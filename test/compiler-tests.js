'use strict';
var chai = require('chai');
chai.Assertion.includeStack = true;
require('chai').should();
var expect = require('chai').expect;
var nodePath = require('path');
var fs = require('fs');
var logger = require('raptor-logging').logger(module);

function testCompiler(path) {
    var inputPath = nodePath.join(__dirname, path);
    var expectedPath = nodePath.join(__dirname, path + '.expected.js');
    var actualPath = nodePath.join(__dirname, path + '.actual.js');

    var compiler = require('../compiler').createCompiler(inputPath);
    var src = fs.readFileSync(inputPath, {encoding: 'utf8'});
    
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
        throw new Error('Unexpected output for "' + inputPath + '":\nEXPECTED (' + expectedPath + '):\n---------\n' + expected +
            '\n---------\nACTUAL (' + actualPath + '):\n---------\n' + output + '\n---------');
    }
}

describe('raptor-templates/compiler' , function() {

    beforeEach(function(done) {
        for (var k in require.cache) {
            if (require.cache.hasOwnProperty(k)) {
                delete require.cache[k];
            }
        }

        require('raptor-logging').configureLoggers({
            'raptor-templates': 'INFO'
        });

        done();
    });

    it('should compile a simple template', function() {
        testCompiler('test-project/simple.rhtml');
    });

    it('should compile a simple template with custom tag', function() {
        testCompiler('test-project/custom-tag.rhtml');
    });

    it('should compile a template with <c:invoke>', function() {
        testCompiler('test-project/tabs.rhtml');
    });

    it.only('should compile a template with <c:include>', function() {
        testCompiler('test-project/test-templates/include.rhtml');
    });

    
});

