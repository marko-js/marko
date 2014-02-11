'use strict';
var chai = require('chai');
chai.Assertion.includeStack = true;
require('chai').should();
var expect = require('chai').expect;
var nodePath = require('path');
var fs = require('fs');

var StringBuilder = require('raptor-strings/StringBuilder');

function testCompiler(path) {
    var inputPath = nodePath.join(__dirname, path);
    var expectedPath = nodePath.join(__dirname, path + '.expected.js');
    var actualPath = nodePath.join(__dirname, path + '.actual.js');

    var compiler = require('raptor-templates/compiler').createCompiler(inputPath);
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

function testRender(path, data, done, options) {
    var inputPath = nodePath.join(__dirname, path);
    var expectedPath = nodePath.join(__dirname, path + '.expected.html');
    var actualPath = nodePath.join(__dirname, path + '.actual.html');
    options = options || {};
    // var compiledPath = nodePath.join(__dirname, path + '.actual.js');
    // var compiler = require('raptor-templates/compiler').createCompiler(inputPath);
    // var src = fs.readFileSync(inputPath, {encoding: 'utf8'});
    
    // var compiledSrc = compiler.compile(src);
    // fs.writeFileSync(compiledPath, compiledSrc, {encoding: 'utf8'});

    var raptorTemplates = require('raptor-templates');
    var Context = raptorTemplates.Context;
    var context = options.context || new Context(new StringBuilder());

    raptorTemplates.render(inputPath, data, context)
        .on('end', function() {
            var output = context.getOutput();

            fs.writeFileSync(actualPath, output, {encoding: 'utf8'});

            var expected;
            try {
                expected = options.expected || fs.readFileSync(expectedPath, {encoding: 'utf8'});
            }
            catch(e) {
                expected = 'TBD';
                fs.writeFileSync(expectedPath, expected, {encoding: 'utf8'});
            }

            if (output !== expected) {
                throw new Error('Unexpected output for "' + inputPath + '":\nEXPECTED (' + expectedPath + '):\n---------\n' + expected +
                    '\n---------\nACTUAL (' + actualPath + '):\n---------\n' + output + '\n---------');
            }

            done();
        })
        .on('error', done);
        
}

describe('raptor-widgets/taglib' , function() {

    beforeEach(function(done) {
        // for (var k in require.cache) {
        //     if (require.cache.hasOwnProperty(k)) {
        //         delete require.cache[k];
        //     }
        // }

        // require('raptor-logging').configureLoggers({
        //     'raptor-templates': 'INFO'
        // });

        done();
    });

    it('should compile a simple template with a w:widget attribute', function() {
        testCompiler('test-project/foo/view.rhtml');
    });

    it.only('should render a simple page', function(done) {
        testRender('test-project/page1.rhtml', {}, done);
    });

});

