'use strict';
var chai = require('chai');
chai.Assertion.includeStack = true;
require('chai').should();
var expect = require('chai').expect;
var nodePath = require('path');
var fs = require('fs');

function testRender(path, data, done) {
    var inputPath = nodePath.join(__dirname, path);
    var expectedPath = nodePath.join(__dirname, path + '.expected.html');
    var actualPath = nodePath.join(__dirname, path + '.actual.html');
    var compiledPath = nodePath.join(__dirname, path + '.actual.js');

    var compiler = require('../compiler').createCompiler(inputPath);
    var src = fs.readFileSync(inputPath, {encoding: 'utf8'});
    
    var compiledSrc = compiler.compile(src);
    fs.writeFileSync(compiledPath, compiledSrc, {encoding: 'utf8'});


    // console.log('\nCompiled (' + inputPath + '):\n---------\n' + compiledSrc);

    require('../').render(inputPath, data, function(err, output) {
        if (err) {
            return done(err);
        }

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

        done();
    });
}

describe('raptor-templates' , function() {

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

    it('should render a simple template', function(done) {
        testRender('test-project/simple.rhtml', {}, done);
    });

    it('should render a template with a custom tag', function(done) {
        testRender('test-project/custom-tag.rhtml', {}, done);
    });

    it("should allow for text replacement", function(done) {
        testRender("test-project/test-templates/text-replacement.rhtml", {
            person: {
                name: "John",
                address: {
                    city: "San Jose",
                    state: "CA",
                    line1: "2065 E. Hamilton Ave.",
                    zip: "95125"
                }
            }
        }, done);
    });

    it("should render simple template with logic", function(done) {
        testRender("test-project/test-templates/simple.rhtml", {
            message: "Hello World!",
            rootClass: "title",
            colors: ["red", "green", "blue"]
        }, done);
    });


});

