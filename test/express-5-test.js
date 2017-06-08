'use strict';

require('./util/test-init');

const fs = require('fs');
const path = require('path');
const expressTests = require('./autotests/express/express');
const expressTestUtil = require('./util/express-test');

const testsPath = path.resolve(__dirname, './autotests/express');
const filePath = testsPath + '/package.json';

function rewriteExpressPackage (originalVersion) {
    const file = expressTestUtil.getExpressPackageFile();
    file.devDependencies.express = '^' + originalVersion;
    fs.writeFileSync(filePath, JSON.stringify(file, null, 2), 'utf8');
}

describe('express-5', function() {
    this.timeout(10000);

    let originalVersion;

    before(function() {
        expressTests.purgeExpressCache();

        const file = expressTestUtil.getExpressPackageFile();
        const expressVersion = file.devDependencies.express;

        // Remove the caret
        originalVersion = expressVersion.substr(1, expressVersion.length - 1);

        // Install express 5
        expressTestUtil.installExpressVersion('5.0.0-alpha.2');
    });

    after(function() {
        // Rewrite package.json because in npm 5, performing an npm install
        // automatically updates the package.json dependencies by default
        rewriteExpressPackage(originalVersion);
    });

    expressTests.test();
});
