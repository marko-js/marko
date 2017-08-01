'use strict';

require('./util/test-init');

const expressTests = require('./autotests/express/express');
const expressTestUtil = require('./util/express-test');

describe('express-4', function() {
    this.timeout(15000);

    before(function() {
        // install express 4
        expressTestUtil.installExpressVersion('^4');
    });

    expressTests.test();
});

describe('express-5', function() {
    this.timeout(10000);

    before(function() {
        // Install express 5
        expressTestUtil.installExpressVersion('5.0.0-alpha.5');
    });

    expressTests.test();
});