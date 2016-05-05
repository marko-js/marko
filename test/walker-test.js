'use strict';
require('./patch-module');

var chai = require('chai');
chai.config.includeStack = true;

var path = require('path');
var compiler = require('../compiler');
var autotest = require('./autotest');

describe('compiler/walker', function() {
    var autoTestDir = path.join(__dirname, 'autotests/walker');

    autotest.scanDir(autoTestDir, function run(dir, helpers, done) {
            var getAST = require(path.join(dir, 'index.js'));
            helpers.compare(getAST(compiler), '.json');
            return done();
        });

});