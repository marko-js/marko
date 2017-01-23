'use strict';
require('./util/patch-module');

var chai = require('chai');
chai.config.includeStack = true;
var path = require('path');
var compiler = require('../compiler');
var autotest = require('./autotest');
var fs = require('fs');

require('marko/node-require').install();

describe('compiler (browser target)', function() {
    var autoTestDir = path.join(__dirname, 'autotests/compiler-browser');

    autotest.scanDir(autoTestDir, function run(dir, helpers, done) {
        var templatePath = path.join(dir, 'template.marko');
        var mainPath = path.join(dir, 'test.js');
        var main;

        if (fs.existsSync(mainPath)) {
            main = require(mainPath);
        }

        if (main && main.checkError) {
            var e;

            try {
                compiler.compileFileForBrowser(templatePath);
            } catch(_e) {
                e = _e;
            }

            if (!e) {
                throw new Error('Error expected');
            }

            main.checkError(e);
            done();

        } else {
            var compiledTemplate = compiler.compileFileForBrowser(templatePath, main && main.compilerOptions);

            if(main && main.checkTemplate) {
                main.checkTemplate(compiledTemplate);
            } else {
                helpers.compare(compiledTemplate.code, '.js');
            }

            done();
        }
    });

});