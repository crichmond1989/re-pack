#!/usr/bin/env node

const meow = require("meow");
const app = require("./app.js");

const cli = meow();

if (cli.flags.version) {
    return;
}

app();