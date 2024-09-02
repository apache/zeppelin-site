import Promise from "bluebird";
import stringify from "json-stringify-pretty-compact";
import RegistryClient from 'npm-registry-client';
import dependants from 'npm-dependants'

const depList = [
    "zeppelin-vis",
    "zeppelin-spell",
]

const removeExtraSquareBracket = function(jsonArray) {
    jsonArray = jsonArray.map(function(e){
        return stringify(e)
    })
    return jsonArray.join(",")
}

const setEachVersionInfo = function(dependency, data) {
    const eachVerInfo = {}
    const versions = data.versions
    const defaultIcon = '<i class="fa fa-question-circle"></i>'
    const type = (dependency == "zeppelin-vis") ? "VISUALIZATION" : "SPELL"

    for (let ver in versions) {
        const key = versions[ver]
        // to keep "latest" version tag, use artifact's one
        const verTag = key._id.split('@')[1]

        if (ver == data["dist-tags"].latest) {
            ver = "latest"
        }
        eachVerInfo[ver] = {
            type: type,
            name: key.name,
            version: verTag,
            published: data.time[verTag],
            artifact: key._id,
            author:
                (key.author?.name == undefined) && (key.maintainers[0].name == undefined)
                    ?
                    'unknown'
                    :
                    key.author?.name || key.maintainers[0].name,
            description:
                (key.description == undefined) ? 'unknown' : key.description,
            license:
                (key.license == undefined) ? 'unknown' : key.license,
            icon:
                (key.helium)
                    ?
                    (key.helium.icon == undefined) ? defaultIcon : key.helium.icon
                    :
                    (key.icon == undefined) ? defaultIcon : key.icon,
            config:
                (key.helium) ? key.helium.config : undefined,
            spell:
                (key.helium) ? key.helium.spell : undefined
        }
    }
    return eachVerInfo
}

const finalResult = []
const client = new RegistryClient();
async function getDependencies(packageName) {
    await client.get(`https://registry.npmjs.org/${packageName}`, { timeout: 1000 }, (error, data) => {
        if (error) {
            console.error(error.message);
            return reject(error)
        };

        const pkgInfo = {}
        pkgInfo[data.name] = setEachVersionInfo(packageName, data)
        finalResult.push(pkgInfo)
        // var result = removeExtraSquareBracket(finalResult).replace(/]|[[]/g, '').trim()
    });
}

const delay = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay))
export async function fetchHelium() {
    depList.map(async function(dependency) {
        for await (const dependant of dependants(dependency)) {
            await getDependencies(dependant);
        }
    })
    await delay(10000);
    return finalResult;
}