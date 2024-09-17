import _ from 'underscore';
import moment from 'moment';
import Promise from 'bluebird';
import fetch from 'node-fetch';
import xml2jsImport from 'xml2js';

const xml2js = Promise.promisifyAll(xml2jsImport);

const zeppelinList = [];
const pomUriList = [];
const responseList = [];
const bodyList = [];
const finalArtifactList = [];

function filterLessThanOneYear(standard) {
  const duration = moment.duration({ year: 1 });
  const oneYearAgo = moment().subtract(duration).format();

  // filter only artifacts created within 1 year from now
  return moment(standard).isAfter(oneYearAgo);
}

async function searchOnlyZeppelinRelatedArtifact(uri) {
  const options = {
    uri: uri,
    json: true,
  };

  return fetch(uri).then(async (result) => {
    const response = (await result.json()).response;
    const body = response.docs;

    for (const artifact in body) {
      const artifactId = body[artifact].a;
      const groupId = body[artifact].g;
      let published = body[artifact].timestamp;
      published = moment(published).format();

      if (filterLessThanOneYear(published)) {
        zeppelinList.push({
          groupId,
          artifactId,
        });
      }
    }
    return zeppelinList;
  });
}

function createSlashedGroupId(groupId) {
  let slashedGroupId = '';

  for (const id in groupId) {
    const text = groupId[id] + '/';
    slashedGroupId = slashedGroupId.concat(text);
  }

  return slashedGroupId;
}

function createPomUrl(groupId, artifactId, version) {
  const baseUri = 'http://repo1.maven.org/maven2/';
  const slashedGroupId = createSlashedGroupId(groupId);

  if (slashedGroupId) {
    const uri = baseUri + slashedGroupId + artifactId + '/' + version + '/';
    return uri + artifactId + '-' + version + '.pom';
  }
  return undefined;
}

async function getAllVersionInfo(zeppelinList) {
  // get all version of an artifact
  return _.map(zeppelinList, function (resources) {
    const baseUri =
      'http://search.maven.org/solrsearch/select?q=g:%22' +
      resources.groupId +
      '%22+AND+a:%22' +
      resources.artifactId +
      '%22&core=gav&rows=20';
    const options = {
      uri: baseUri,
      json: true,
    };

    return fetch(baseUri).then(async (result) => {
      const response = (await result.json()).response;
      const body = response.docs;
      const pomUriListEachVer = {};

      for (const ver in body) {
        const artifactId = body[ver].a;
        const groupId = body[ver].g.split('.');
        const version = body[ver].v;
        let published = body[ver].timestamp;
        published = moment(published).format();

        if (filterLessThanOneYear(published) && createSlashedGroupId(groupId)) {
          const pomUri = createPomUrl(groupId, artifactId, version);

          pomUriListEachVer[version] = {
            artifactId,
            version,
            published,
            pomUri,
          };
        }
      }
      pomUriList.push(pomUriListEachVer);
      return pomUriList;
    });
  });
}

function getEachPomFileContent(pomUriList) {
  return _.map(pomUriList, function (result) {
    return Promise.all(
      _.map(result, function (ver) {
        const options = {
          uri: ver.pomUri,
        };
        const artifactId = ver.artifactId;
        const published = ver.published;
        const version = ver.version;

        const pomUri = ver.pomUri.replace('http', 'https');
        return fetch(pomUri).then(async (result) => {
          const response = await result.text();

          const eachVersionResponse = {
            version: version,
            artifactId: artifactId,
            published: published,
            response: response,
          };
          return eachVersionResponse;
        });
      })
    ).then(function (result) {
      responseList.push(result);
    });
  });
}

function parseXmlToJson(responseList) {
  return _.map(responseList, function (response) {
    return Promise.all(
      _.map(response, function (ver) {
        // parse each pom.xml to JSON format
        return xml2js
          .parseStringAsync(ver.response, { explicitArray: false })
          .then(function (result) {
            const projectDeps = result.project.dependencies;
            const projectDepManages = result.project.dependencyManagement;
            const name = result.project.artifactId;
            const groupId = result.project.groupId
              ? result.project.groupId
              : result.project.parent.groupId;
            const artifactId = result.project.artifactId;
            const version = result.project.version
              ? result.project.version
              : result.project.parent.version;
            const description = result.project.description
              ? result.project.description
              : result.project.name;
            const published = ver.published;

            let dependencies;
            if (projectDeps) {
              dependencies = projectDeps.dependency;
            } else if (projectDepManages) {
              dependencies = projectDepManages.dependencies.dependency;
            } else {
              dependencies = undefined;
            }

            const eachVerBodyList = {
              name: name,
              groupId: groupId,
              artifactId: artifactId,
              version: version,
              description: description,
              published: published,
              dependencies: dependencies,
            };
            return eachVerBodyList;
          });
      })
    ).then(function (result) {
      bodyList.push(result);
    });
  });
}

function filterWithGivenArtifact(bodyList) {
  return _.map(bodyList, function (version) {
    return Promise.all(
      _.map(version, function (dep, index) {
        const type = 'INTERPRETER';
        const license = 'Apache-2.0';
        const icon = '<i class="fa fa-rocket"></i>';
        const dependency = dep.dependencies;
        const name = dep.name;
        const groupId = dep.groupId;
        const artifactId = dep.artifactId;
        const version = index == 0 ? 'latest' : dep.version;
        const artifact = artifactId + '@' + dep.version;
        const description = dep.description ? dep.description : name;
        const published = dep.published;

        return result
          ? {
              type: type,
              name: name,
              version: version,
              published: published,
              artifact: artifact,
              description: description,
              license: license,
              icon: icon,
              groupId: groupId,
              artifactId: artifactId,
            }
          : undefined;
      })
    ).then(function (result) {
      const resultByVersion = _.indexBy(_.omit(result, _.isUndefined), 'version');
      for (const key in resultByVersion) {
        const obj = resultByVersion[key];
        if (obj.version == 'latest') {
          obj.version = obj.artifact.split('@')[1];
        }
      }

      finalArtifactList.push(resultByVersion);
    });
  });
}

function getMavenUris() {
  const dependencies = [
    'zeppelin-alluxio',
    'zeppelin-angular',
    'zeppelin-bigquery',
    'zeppelin-cassandra',
    'zeppelin-elasticsearch',
    'zeppelin-file',
    'zeppelin-flink',
    'zeppelin-groovy',
    'zeppelin-hbase',
    'zeppelin-java',
    'zeppelin-jdbc',
    'zeppelin-livy',
    'zeppelin-markdown',
    'zeppelin-neo4j',
    'zeppelin-python',
    'zeppelin-shell',
    'zeppelin-sparql',
  ];
  const uris = [];
  for (const dependency of dependencies) {
    const uri = `http://search.maven.org/solrsearch/select?q=${dependency}&rows=100`;
    uris.push(uri);
  }
  return uris;
}

const delay = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay));
const result = [];

export async function getMavenHandler(callback) {
  let mavenUris = getMavenUris();
  for (const uri of mavenUris) {
    await searchOnlyZeppelinRelatedArtifact(uri);
  }
  await delay(5000);
  await getAllVersionInfo(zeppelinList);
  await delay(4000);
  await getEachPomFileContent(pomUriList);
  await delay(4000);
  await parseXmlToJson(responseList);
  await delay(4000);
  await filterWithGivenArtifact(bodyList);
  await delay(4000);
  _.map(finalArtifactList, function (artifact) {
    if (!_.isEmpty(artifact)) {
      for (const key in artifact) {
        const artifactId = artifact[key].artifactId;
        result[artifactId] = artifact;
      }
    }
  });
  return result;
}
