'use strict';

var chai = require('chai');
chai.config.includeStack = true;
var path = require('path');
var compiler = require('../compiler');
var autotest = require('./autotest');
var fs = require('fs');

describe('compiler', function() {
    var autoTestDir = path.join(__dirname, 'fixtures/compiler/autotest');

    autotest.scanDir(autoTestDir, function run(dir) {
        var templatePath = path.join(dir, 'template.marko');
        var mainPath = path.join(dir, 'test.js');
        var main;

        if (fs.existsSync(mainPath)) {
            main = require(mainPath);
        }
        if (main && main.checkError) {
            var e;

            try {
                compiler.compileFile(templatePath);
            } catch(_e) {
                e = _e;
            }

            if (!e) {
                throw new Error('Error expected');
            }

            main.checkError(e);
            return '$PASS$';

        } else {
            var compiledSrc = compiler.compileFile(templatePath);
            return compiledSrc;
        }
    });

});