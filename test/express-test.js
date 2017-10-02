'use strict';

require('./util/test-init');

const loadExpressTests = require('./autotests/express/loadExpressTests');


describe('express-4', function() {
    this.timeout(15000);

    loadExpressTests('express-4');
});

describe('express-5', function() {
    this.timeout(10000);

    loadExpressTests('express-5');
});
