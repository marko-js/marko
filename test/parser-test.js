'use strict';
require('./util/patch-module');

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
    var autoTestDir = path.join(__dirname, 'autotests/parser');

    autotest.scanDir(
        autoTestDir,
        function run(dir, helpers, done) {
            var templatePath = path.join(dir, 'template.marko');
            var src = fs.readFileSync(templatePath, {encoding: 'utf8'});
            var context = new CompileContext(src, templatePath, builder);
            var ast = parser.parse(src, context);
            helpers.compare(ast, '.json');
            return done();
        });
});