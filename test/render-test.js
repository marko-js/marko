'use strict';
var chai = require('chai');
chai.config.includeStack = true;
var path = require('path');
var marko = require('../');
var autotest = require('./autotest');
var fs = require('fs');

require('../node-require').install();

describe('render', function() {
    var autoTestDir = path.join(__dirname, 'fixtures/render/autotest');

    autotest.scanDir(
        autoTestDir,
        function run(dir) {
            var templatePath = path.join(dir, 'template.marko');
            var mainPath = path.join(dir, 'test.js');

            var main = fs.existsSync(mainPath) ? require(mainPath) : {};

            if (main.checkError) {
                var e;

                try {
                    marko.load(templatePath);
                } catch(_e) {
                    e = _e;
                }

                if (!e) {
                    throw new Error('Error expected');
                }

                main.checkError(e);
                return '$PASS$';
            } else {
                var template = marko.load(templatePath);
                var templateData = main.templateData || {};
                var html = template.renderSync(templateData);
                return html;
            }
        },
        {
            compareExtension: '.html'
        });
});