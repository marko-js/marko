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
    var autoTestDir = path.join(__dirname, 'fixtures/async-render/autotest');

    autotest.scanDir(
        autoTestDir,
        function run(dir, callback) {
            var templatePath = path.join(dir, 'template.marko');
            var mainPath = path.join(dir, 'test.js');

            var main = fs.existsSync(mainPath) ? require(mainPath) : {};
            var loadOptions = main && main.loadOptions;

            if (main.checkError) {
                var e;

                try {
                    marko.load(templatePath, loadOptions);
                } catch(_e) {
                    e = _e;
                }

                if (!e) {
                    throw new Error('Error expected');
                }

                main.checkError(e);
                return callback(null, '$PASS$');
            } else {
                var template = marko.load(templatePath, loadOptions);
                var templateData = main.templateData || {};
                template.render(templateData, function(err, html) {

                    if (main.checkHtml) {
                        main.checkHtml(html);
                        return callback(null, '$PASS$');
                    } else {
                        callback(err, html);
                    }

                });
            }
        },
        {
            compareExtension: '.html'
        });
});