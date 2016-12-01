'use strict';
require('./util/patch-module');

var chai = require('chai');
chai.config.includeStack = true;
var path = require('path');
var autotest = require('./autotest');
var runRenderTest = require('./util/runRenderTest');

require('../node-require').install();

describe('render', function() {
    var autoTestDir = path.join(__dirname, 'autotests/render-deprecated');

    autotest.scanDir(
        autoTestDir,
        function run(dir, helpers, done) {
            runRenderTest(dir, helpers, done, {
                output: 'html'
            });
        });
});