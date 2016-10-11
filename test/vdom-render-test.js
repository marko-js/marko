'use strict';
require('./patch-module');

var chai = require('chai');
chai.config.includeStack = true;
var path = require('path');
var marko = require('../');
var markoVDOM = require('../vdom');
var autotest = require('./autotest');
var fs = require('fs');
var fsExtra = require('fs-extra');
var domToHTML = require('./util/domToHTML');
var jsdom = require("jsdom").jsdom;

require('../node-require').install();

var defaultDocument = jsdom('<html><body></body></html>');
markoVDOM.setDocument(defaultDocument); // We need this to parse HTML fragments on the server

describe('render-vdom', function() {
    var autoTestDir = path.join(__dirname, 'autotests/render');

    autotest.scanDir(
        autoTestDir,
        function run(dir, helpers, done) {
            require('../compiler').configure({ output: 'html' });

            var vdomDir = path.join(dir, '../' + path.basename(dir) + '_vdom.skip');

            fsExtra.removeSync(vdomDir);

            fsExtra.copySync(dir, vdomDir, {
                filter: function(file) {
                    if (file.endsWith('.marko.js') || file.indexOf('.generated.') !== -1) {
                        return false;
                    }
                    return true;
                }
            });

            var htmlTemplatePath = path.join(dir, 'template.marko');
            var vdomMainPath = path.join(vdomDir, 'test.js');
            var htmlMainPath = path.join(dir, 'test.js');
            var htmlMain = fs.existsSync(htmlMainPath) ? require(htmlMainPath) : {};
            var htmlTemplate = htmlMain.checkError ? null : marko.load(htmlTemplatePath);


            require('../compiler').configure({ output: 'vdom' });

            var oldDone = done;
            done = function(err) {
                require('../compiler').configure({ output: 'html' });
                oldDone(err);
            };

            var vdomMain = fs.existsSync(vdomMainPath) ? require(vdomMainPath) : {};

            if (vdomMain && vdomMain.vdomSkip) {
                return done();
            }

            var loadOptions = vdomMain.loadOptions;
            if (loadOptions) {
                loadOptions = Object.assign({}, loadOptions);
            } else {
                loadOptions = {};
            }

            loadOptions.output = 'vdom';
            // loadOptions.writeToDisk = false;

            if (vdomMain.writeToDisk === false) {
                require('marko/compiler').defaultOptions.writeToDisk = false;
            }

            if (vdomMain.preserveWhitespaceGlobal === true) {
                require('marko/compiler').defaultOptions.preserveWhitespace = true;
            }

            var templateSrc = fs.readFileSync(htmlTemplatePath, { encoding: 'utf8' });
            var vdomTemplatePath = path.join(vdomDir, 'template.marko');

            try {
                if (vdomMain.checkError) {
                    var e;

                    try {
                        marko.load(vdomTemplatePath, templateSrc, loadOptions);
                    } catch(_e) {
                        e = _e;
                        var errorFile = path.join(dir, 'error.txt');
                        fs.writeFileSync(errorFile, e.stack.toString(), { encoding: 'utf8' });
                    }

                    if (!e) {
                        throw new Error('Error expected');
                    }

                    vdomMain.checkError(e);
                    require('../compiler').configure({ output: 'html' });
                    return done();
                } else {
                    var vdomTemplate = marko.load(vdomTemplatePath, loadOptions);

                    var templateData = vdomMain.templateData || {};

                    var vdomTree = vdomTemplate.renderSync(templateData);


                    var expectedHtml;

                    try {
                        expectedHtml = fs.readFileSync(path.join(dir, 'vdom-expected.html'), { encoding: 'utf8'});
                    } catch(e) {}

                    if (!expectedHtml) {
                        var html = htmlTemplate.renderSync(htmlMain.templateData || {});
                        var document = jsdom('<html><body>' + html + '</body></html>');
                        expectedHtml = domToHTML(document.body, { childrenOnly: true });
                    }

                    fs.writeFileSync(path.join(dir, 'vdom-expected.generated.html'), expectedHtml, { encoding: 'utf8' });
                    var vdomHtml = domToHTML(vdomTree.actualize(defaultDocument));
                    helpers.compare(vdomHtml, 'vdom-', '.generated.html');
                    require('../compiler').configure({ output: 'html' });
                    return done();
                }
            } finally {
                if (vdomMain.writeToDisk === false) {
                    delete require('marko/compiler').defaultOptions.writeToDisk;
                }

                if (vdomMain.preserveWhitespaceGlobal === true) {
                    delete require('marko/compiler').defaultOptions.preserveWhitespace;
                }
            }
        });

});