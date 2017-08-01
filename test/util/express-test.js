'use strict';

const childProcess = require('child_process');
const fs = require('fs');
const path = require('path');

const semver = require('semver');
const testsPath = path.resolve(__dirname, '../autotests/express');
const nodeModulesPath = path.join(testsPath, 'node_modules');
const packageLockPath = path.join(testsPath, 'package-lock.json');
const nodeModulesRegExp = new RegExp(nodeModulesPath);

exports.installExpressVersion = (versionRequest) => {
    let currentPath = process.cwd();
    let command = 'npm install --no-save';

    if (versionRequest) {
        command += (' express@' + versionRequest);
    }

    // delete previous node_modules and package-lock
    try {
        fs.unlinkSync(nodeModulesPath);
        fs.unlinkSync(packageLockPath);
    } catch(e) {}

    let env = { PATH: process.env.PATH };

    process.chdir(testsPath);
    childProcess.execSync(command, { env });
    process.cwd(currentPath);

    // Purge the require cache
    Object.keys(require.cache)
        .filter(key => nodeModulesRegExp.test(key))
        .forEach(key => delete require.cache[key]);

    // This is a test to self validate.  Probably should be a separate unit test.
    let installedVersion = require(path.join(nodeModulesPath, 'express/package.json')).version;

    if (!semver.satisfies(installedVersion, versionRequest)) {
        throw new Error(`Installed version of express (${installedVersion}) does not match requested version (${versionRequest}).`);
    }
};

