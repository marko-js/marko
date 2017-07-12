'use strict';

const childProcess = require('child_process');
const fs = require('fs');
const path = require('path');

const testsPath = path.resolve(__dirname, '../autotests/express');
const filePath = testsPath + '/package.json';

exports.installExpressVersion = (version) => {
    let currentPath = process.cwd();
    let command = 'npm install';

    if (version) {
        command += (' express@' + version);
    }

    try {
        fs.unlinkSync(path.join(testsPath, 'node_modules'));
    } catch(e) {}
    
    process.chdir(testsPath);
    childProcess.execSync(command);
    process.cwd(currentPath);
};

exports.getExpressPackageFile = () => {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};
