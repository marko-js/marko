'use strict';
require('./util/patch-module');

var chai = require('chai');
chai.config.includeStack = true;
var path = require('path');
var compiler = require('../compiler');
var autotest = require('./autotest');
var fs = require('fs');

require('marko/node-require').install();

var stripVarData = require('./util/stripVarData');

describe('compiler (vdom)', function() {
    var autoTestDir = path.join(__dirname, 'autotests/vdom-compiler');

    autotest.scanDir(autoTestDir, function run(dir, helpers, done) {
        var templatePath = path.join(dir, 'template.marko');
        var mainPath = path.join(dir, 'test.js');
        var main;

        if (fs.existsSync(mainPath)) {
            main = require(mainPath);
        }

        var compilerOptions = { output: 'vdom' };

        if (main && main.checkError) {
            var e;

            try {
                compiler.compileFileForBrowser(templatePath, compilerOptions);
            } catch(_e) {
                e = _e;
            }

            if (!e) {
                throw new Error('Error expected');
            }

            main.checkError(e);
            done();

        } else {
            var compiledTemplate = compiler.compileFileForBrowser(templatePath, Object.assign(compilerOptions, main && main.compilerOptions));
            var actualSrc = compiledTemplate.code;
            actualSrc = stripVarData(actualSrc);
            helpers.compare(actualSrc, '.js');
            done();
        }
    });

});