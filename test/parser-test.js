'use strict';
require('./patch-module');

var chai = require('chai');
chai.config.includeStack = true;
var path = require('path');
var compiler = require('../compiler');
var builder = compiler.createBuilder();
var autotest = require('./autotest');
var fs = require('fs');
var CompileContext = require('../compiler/CompileContext');
var HtmlJsParser = require('../compiler/HtmlJsParser');
var Parser = require('../compiler/Parser');
var parser = new Parser(new HtmlJsParser());

describe('compiler/parser', function() {
    var autoTestDir = path.join(__dirname, 'fixtures/parser/autotest');

    autotest.scanDir(
        autoTestDir,
        function run(dir) {
            var templatePath = path.join(dir, 'template.marko');
            var src = fs.readFileSync(templatePath, {encoding: 'utf8'});
            var context = new CompileContext(src, templatePath, builder);
            var ast = parser.parse(src, context);
            return ast;
        },
        {
            deepEqual: true,
            compareExtension: '.json'
        });
});