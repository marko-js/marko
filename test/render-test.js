'use strict';
require('./patch-module');

var chai = require('chai');
chai.config.includeStack = true;
var path = require('path');
var marko = require('../');
var autotest = require('./autotest');
var fs = require('fs');

require('../node-require').install();

describe('render', function() {
    var autoTestDir = path.join(__dirname, 'autotests/render');

    autotest.scanDir(
        autoTestDir,
        function run(dir, helpers, done) {
            var templatePath = path.join(dir, 'template.marko');
            var mainPath = path.join(dir, 'test.js');

            var main = fs.existsSync(mainPath) ? require(mainPath) : {};
            var loadOptions = main && main.loadOptions;

            if (main.writeToDisk === false) {
                require('marko/compiler').defaultOptions.writeToDisk = false;
            }

            if (main.preserveWhitespaceGlobal === true) {
                require('marko/compiler').defaultOptions.preserveWhitespace = true;
            }

            try {
                if (main.checkError) {
                    var e;

                    try {
                        marko.load(templatePath, loadOptions);
                    } catch(_e) {
                        e = _e;
                        var errorFile = path.join(dir, 'error.txt');
                        fs.writeFileSync(errorFile, e.stack.toString(), { encoding: 'utf8' });
                    }

                    if (!e) {
                        throw new Error('Error expected');
                    }

                    main.checkError(e);
                    return done();
                } else {
                    var template = marko.load(templatePath, loadOptions);
                    var templateData = main.templateData || {};
                    var html = template.renderSync(templateData);
                    helpers.compare(html, '.html');
                    return done();
                }
            } finally {
                if (main.writeToDisk === false) {
                    delete require('marko/compiler').defaultOptions.writeToDisk;
                }

                if (main.preserveWhitespaceGlobal === true) {
                    delete require('marko/compiler').defaultOptions.preserveWhitespace;
                }
            }
        });
});