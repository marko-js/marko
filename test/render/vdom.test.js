'use strict';

require('../__util__/test-init');

var chai = require('chai');
chai.config.includeStack = true;
var path = require('path');
var autotest = require('../autotest');
var runRenderTest = require('../__util__/runRenderTest');

describe('render-vdom', function () {
    autotest.scanDir(path.join(__dirname, './fixtures'), run);

});

describe('render-vdom (deprecated)', function () {
    autotest.scanDir(path.join(__dirname, './fixtures-deprecated'), run);
});

function run(dir, helpers, done) {
    runRenderTest(dir, helpers, done, {
        output: 'vdom'
    });
}
