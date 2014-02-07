'use strict';
var chai = require('chai');
chai.Assertion.includeStack = true;
require('chai').should();
var expect = require('chai').expect;
var nodePath = require('path');
var fs = require('fs');


var StringBuilder = require('raptor-strings/StringBuilder');

function delayedDataProvider(delay, value) {
    return function(args, done) {
        setTimeout(function() {
            done(null, value);
        }, delay);
    };
}

function testRender(path, data, done, options) {
    var inputPath = nodePath.join(__dirname, path);
    var expectedPath = nodePath.join(__dirname, path + '.expected.html');
    var actualPath = nodePath.join(__dirname, path + '.actual.html');
    options = options || {};
    var compiledPath = nodePath.join(__dirname, path + '.actual.js');

    var compiler = require('../compiler').createCompiler(inputPath);
    var src = fs.readFileSync(inputPath, {encoding: 'utf8'});
    
    var compiledSrc = compiler.compile(src);
    fs.writeFileSync(compiledPath, compiledSrc, {encoding: 'utf8'});



    // console.log('\nCompiled (' + inputPath + '):\n---------\n' + compiledSrc);

    

    var raptorTemplates = require('../');
    var Context = raptorTemplates.Context;
    var context = options.context || new Context(new StringBuilder());


    if (options.dataProviders) {
        var dataProviders = require('raptor-data-providers').forContext(context);
        dataProviders.register(options.dataProviders);
    }

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

describe('raptor-templates/rhtml' , function() {

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

    it('should render a simple template', function(done) {

        testRender('test-project/rhtml-templates/async-fragment-ordering.rhtml', {}, done, {
            dataProviders: {
                'D1': delayedDataProvider({delay: 100}),
                'D2': delayedDataProvider({delay: 300}),
                'D3': delayedDataProvider({delay: 200}),
                'D4': delayedDataProvider({delay: 800})
            }
        });
    });

    

});

