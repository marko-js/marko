'use strict';
require('./patch-module');

var chai = require('chai');
chai.Assertion.includeStack = true;
var nodePath = require('path');
var fs = require('fs');

require('../node-require').install();

function testCompiler(path) {
    var templatePath = nodePath.join(__dirname, path, 'template.marko');
    var expectedPath = nodePath.join(__dirname, path, 'expected.js');
    var actualPath = nodePath.join(__dirname, path, 'template.marko.js');

    var compiler = require('../compiler').createCompiler(templatePath);
    var src = fs.readFileSync(templatePath, {encoding: 'utf8'});

    var output = compiler.compile(src);
    fs.writeFileSync(actualPath, output, {encoding: 'utf8'});

    var expected;
    try {
        expected = fs.readFileSync(expectedPath, {encoding: 'utf8'});
    }
    catch(e) {
        expected = 'TBD';
        fs.writeFileSync(expectedPath, expected, {encoding: 'utf8'});
    }

    if (output !== expected) {
        throw new Error('Unexpected output for "' + templatePath + '":\nEXPECTED (' + expectedPath + '):\n---------\n' + expected +
            '\n---------\nACTUAL (' + actualPath + '):\n---------\n' + output + '\n---------');
    }
}

describe('marko/compiler' , function() {

    beforeEach(function(done) {
        for (var k in require.cache) {
            if (require.cache.hasOwnProperty(k)) {
                delete require.cache[k];
            }
        }

        require('raptor-logging').configureLoggers({
            'marko': 'INFO'
        });

        done();
    });

    it('should compile a simple template', function() {
        testCompiler('fixtures/templates/compiler/simple');
    });

    it('should compile a simple template with custom tag', function() {
        testCompiler('fixtures/templates/compiler/custom-tag');
    });

    it('should compile a simple template with expressions', function() {
        testCompiler('fixtures/templates/compiler/hello-dynamic');
    });

    it('should compile a simple template with entities', function() {
        testCompiler('fixtures/templates/compiler/entities');
    });

    it('should de-dupe the same taglib', function() {
        require('./fixtures/repeated-taglib/nested/template.marko');
    });

    // it.only('should compile a template with <c:invoke>', function() {
    //     testCompiler('test-project/tabs.marko');
    // });

    // it('should compile a template with <c:include>', function() {
    //     testCompiler('test-project/test-templates/include.marko');
    // });


});

