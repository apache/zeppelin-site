import _ from 'underscore';
import moment from 'moment';
import Promise from 'bluebird';
import fetch from 'node-fetch';
import xml2jsImport from 'xml2js';

const xml2js = Promise.promisifyAll(xml2jsImport);

function filterLessThanOneYear(standard) {
  const duration = moment.duration({ year: 1 });
  const oneYearAgo = moment().subtract(duration).format();

  // filter only artifacts created within 1 year from now
  return moment(standard).isAfter(oneYearAgo);
}

async function searchOnlyZeppelinRelatedArtifact(uri) {
  const zeppelinList = [];
  const options = {
    uri: uri,
    json: true,
  };

  const result = await fetch(uri);
  const responseText = await result.text();
  console.log(`Root URI: ${uri}`);
  console.log(`Root URI Fetch Result: ${responseText}`);
  const response = JSON.parse(responseText).response;
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
  const baseUri = 'https://repo1.maven.org/maven2/';
  const slashedGroupId = createSlashedGroupId(groupId);

  if (slashedGroupId) {
    const uri = baseUri + slashedGroupId + artifactId + '/' + version + '/';
    return uri + artifactId + '-' + version + '.pom';
  }
  return undefined;
}

async function getAllVersionInfo(zeppelinList) {
  // get all version of an artifact
  return Promise.all(
      zeppelinList.map(async (resources) => {
        const baseUri =
            'https://search.maven.org/solrsearch/select?q=g:%22' +
            resources.groupId +
            '%22+AND+a:%22' +
            resources.artifactId +
            '%22&core=gav&rows=20';
        const options = {
          uri: baseUri,
          json: true,
        };

        const result = await fetch(baseUri);

        const responseText = await result.text();
        console.log(`Base URI: ${baseUri}`);
        console.log(`Base URI Fetch Result: ${responseText}`);
        const response = JSON.parse(responseText).response;
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
        return pomUriListEachVer;
      })
  ).then((resolve) => resolve);
}

async function getEachPomFileContent(pomUriList) {
  return Promise.all(
      pomUriList.map(async function (result) {
        return Promise.all(
            _.map(result, async function (ver) {
              const options = {
                uri: ver.pomUri,
              };
              const artifactId = ver.artifactId;
              const published = ver.published;
              const version = ver.version;

              const pomUri = ver.pomUri;
              const result = await fetch(pomUri);
              const response = await result.text();
              console.log(`Pom URI: ${pomUri}`);
              console.log(`Pom URI Fetch Result: ${response}`);

              const eachVersionResponse = {
                version: version,
                artifactId: artifactId,
                published: published,
                response: response,
              };
              return eachVersionResponse;
            })
        ).then((resolve) => resolve);
      })
  ).then((resolve) => resolve);
}

async function parseXmlToJson(responseList) {
  return Promise.all(
      _.map(responseList, async function (response) {
        return Promise.all(
            _.map(response, async function (ver) {
              // parse each pom.xml to JSON format
              const result = await xml2js.parseStringAsync(ver.response, { explicitArray: false });
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
            })
        ).then((resolve) => resolve);
      })
  ).then((resolve) => resolve);
}

async function filterWithGivenArtifact(bodyList) {
  return Promise.all(
      _.map(bodyList, async function (version) {
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

              const interpreters = [
                'spark-interpreter',
                'zeppelin-jupyter-interpreter',
                'zeppelin-display',
                'zeppelin-flink',
                'spark-scala-',
                'sap',
                'spark1-shims',
                'spark2-shims',
                'spark3-shims',
                'spark-scala-parent',
                'spark-shims',
                'zeppelin-beam',
                'zeppelin-kylin',
                'zeppelin-ignite_',
                'zeppelin-flink_',
                'zeppelin-lens',
                'zeppelin-cassandra_',
                'zeppelin-solr',
                'zeppelin-viyadb',
                'snappydata-zeppelin',
              ];
              const result = dependency
                  ? _.findWhere(dependency, { artifactId: 'zeppelin-interpreter' }) ||
                  interpreters.some((interpreter) => dep.name.includes(interpreter))
                  : undefined;

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
        ).then((resultArtifact) => {
          const resultByVersion = _.indexBy(_.omit(resultArtifact, _.isUndefined), 'version');
          for (const key in resultByVersion) {
            const obj = resultByVersion[key];
            if (obj.version == 'latest') {
              obj.version = obj.artifact.split('@')[1];
            }
          }
          return resultByVersion;
        });
      })
  ).then((resolve) => resolve);
}

export async function getBasicMavenHandler(callback) {
  const result = {};
  const uri = 'https://search.maven.org/solrsearch/select?q=zeppelin&rows=200';
  const zeppelinList = await searchOnlyZeppelinRelatedArtifact(uri);
  const pomUriList = await getAllVersionInfo(zeppelinList);
  const responseList = await getEachPomFileContent(pomUriList);
  const bodyList = await parseXmlToJson(responseList);
  const finalArtifactList = await filterWithGivenArtifact(bodyList);
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
