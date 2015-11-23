'use strict';
var chai = require('chai');
chai.config.includeStack = true;
var path = require('path');
var marko = require('../');
var autotest = require('./autotest');

describe('render', function() {
    var autoTestDir = path.join(__dirname, 'fixtures/render/autotest');

    autotest.scanDir(
        autoTestDir,
        function run(dir) {
            var templatePath = path.join(dir, 'template.marko');
            var mainPath = path.join(dir, 'test.js');
            var template = marko.load(templatePath);
            var main = require(mainPath);
            var templateData = main.templateData || {};
            var html = template.renderSync(templateData);
            return html;
        },
        {
            compareExtension: '.html'
        });
});