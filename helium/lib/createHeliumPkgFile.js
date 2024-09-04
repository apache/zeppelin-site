import fetch from "node-fetch";
import Promise from "bluebird";
import stringify from 'json-stringify-pretty-compact';
import {getMavenHandler} from "./getMavenArtifactInfo.js";
import {fetchHelium} from "./fetchHeliumPkgInfo.js";
import * as fs from "fs";
import {getBasicMavenHandler} from "./getBasicMavenArtifactInfo.js";

const pushPkgInfoToTmp = async function() {
    // const response = await fetch('https://zeppelin.apache.org/helium.json')
    // const data = await response.json();
    // return data[0];
    return {};
}

const delay = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay))


export function create() {
    pushPkgInfoToTmp()
        .then(async (response) => {
            const result = await getBasicMavenHandler(() => {});
            for (const body of result) {
                for (const key of Object.keys(body)) {
                    response[key] = body[key];
                }
            }
            return response;
        })
        .then(async (response) => {
            const result = await getMavenHandler(() => {});
            for (const body of result) {
                for (const key of Object.keys(body)) {
                    response[key] = body[key];
                }
            }
            return response;
        })
        .then(async (response) => {
            const result = await fetchHelium();
            for (const body of result) {
                for (const key of Object.keys(body)) {
                    response[key] = body[key];
                }
            }
            return response;
        })
        .then(async (response) => {
            await delay(8000)
            const result = [response];
            fs.writeFileSync('./helium.json', stringify(result), (err) => {
                console.log("error!!!");
            })
        });
}
