#!/usr/bin/env node

import {Command} from "commander";
import {create} from "./lib/createHeliumPkgFile.js";

const command = new Command();
command
    .name('create')
    .description('CLI to create helium json')
    .action((str, options) => {
        create();
    });
command.parse();
