'use strict';

var chai = require('chai');
chai.config.includeStack = true;

var path = require('path');
var compiler = require('../compiler');
var autotest = require('./autotest');

describe('compiler/walker', function() {
    var autoTestDir = path.join(__dirname, 'fixtures/walker/autotest');

    autotest.scanDir(autoTestDir, function run(dir) {
            var getAST = require(path.join(dir, 'index.js'));
            return getAST(compiler);
        },
        {
            deepEqual: true,
            compareExtension: '.json'
        });

});