'use strict';

var chai = require('chai');
chai.config.includeStack = true;
var path = require('path');
var compiler = require('../compiler');
var autotest = require('./autotest');

describe('compiler', function() {
    var autoTestDir = path.join(__dirname, 'fixtures/compiler/autotest');

    autotest.scanDir(autoTestDir, function run(dir) {
        var templatePath = path.join(dir, 'template.marko');
        var compiledSrc = compiler.compileFile(templatePath);
        return compiledSrc;
    });

});