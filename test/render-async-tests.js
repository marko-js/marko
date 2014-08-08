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

    require('../compiler').defaultOptions.checkUpToDate = false;
    
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
        .on('error', done)
        .end();

        
}

describe('raptor-templates/rhtml-async' , function() {

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

    it('should render a simple template with async fragments correctly (1)', function(done) {
        testRender('test-project/rhtml-templates/async-fragment-ordering.rhtml', {}, done, {
            dataProviders: {
                'D1': delayedDataProvider(100),
                'D2': delayedDataProvider(300),
                'D3': delayedDataProvider(200),
                'D4': delayedDataProvider(800)
            }
        });        
    });

    it('should render a simple template with async fragments correctly (2)', function(done) {
        testRender('test-project/rhtml-templates/async-fragment-ordering.rhtml', {}, done, {
            dataProviders: {
                'D1': delayedDataProvider(100),
                'D2': delayedDataProvider(200),
                'D3': delayedDataProvider(300),
                'D4': delayedDataProvider(150)
            }
        });        
    });

    it('should render a simple template with async fragments correctly (3)', function(done) {
        testRender('test-project/rhtml-templates/async-fragment-ordering.rhtml', {}, done, {
            dataProviders: {
                'D1': delayedDataProvider(800),
                'D2': delayedDataProvider(200),
                'D3': delayedDataProvider(300),
                'D4': delayedDataProvider(100)
            }
        });        
    });

    it('should render a simple template with async fragments correctly (4)', function(done) {
        testRender('test-project/rhtml-templates/async-fragment-ordering.rhtml', {}, done, {
            dataProviders: {
                'D1': delayedDataProvider(800),
                'D2': delayedDataProvider(300),
                'D3': delayedDataProvider(200),
                'D4': delayedDataProvider(100)
            }
        });        
    });

    it('should render a less simple template with async fragments correctly (1)', function(done) {
        testRender('test-project/rhtml-templates/async-fragment-ordering2.rhtml', {}, done, {
            dataProviders: {
                'D1': delayedDataProvider(100),
                'D2': delayedDataProvider(300),
                'D3': delayedDataProvider(200),
                'D4': delayedDataProvider(800),
                'D5': delayedDataProvider(900),
                'D6': delayedDataProvider(100),
                'D7': delayedDataProvider(50)
            }
        });        
    });

    it('should render a less simple template with async fragments correctly (2)', function(done) {
        testRender('test-project/rhtml-templates/async-fragment-ordering2.rhtml', {}, done, {
            dataProviders: {
                'D1': delayedDataProvider(100),
                'D2': delayedDataProvider(300),
                'D3': delayedDataProvider(200),
                'D4': delayedDataProvider(800),
                'D5': delayedDataProvider(900),
                'D6': delayedDataProvider(100),
                'D7': delayedDataProvider(200)
            }
        });        
    });

    it('should render a less simple template with async fragments correctly (3)', function(done) {
        testRender('test-project/rhtml-templates/async-fragment-ordering2.rhtml', {}, done, {
            dataProviders: {
                'D1': delayedDataProvider(900),
                'D2': delayedDataProvider(300),
                'D3': delayedDataProvider(200),
                'D4': delayedDataProvider(800),
                'D5': delayedDataProvider(100),
                'D6': delayedDataProvider(100),
                'D7': delayedDataProvider(200)
            }
        });        
    });

    it("should allow for using macros inside async fragments", function(done) {
        testRender('test-project/rhtml-templates/async-fragment-macros.rhtml', {}, done, {
            dataProviders: {
                'D1': delayedDataProvider(100)
            }
        });  
    });

    it("should allow for shared and context-specific data providers", function(done) {
        require('raptor-data-providers').register({
            'sharedData': function(args, done) {
                var deferred = require('raptor-promises').defer();

                setTimeout(function() {
                    deferred.resolve({
                        name: 'testSharedData'
                    });
                }, 100);

                return deferred.promise;
            }
        });

        testRender('test-project/rhtml-templates/async-fragment-data-providers.rhtml', {}, done, {
            dataProviders: {
                'contextData': delayedDataProvider(100, {name: "testContextData"})
            }
        });
    });

    it("should allow for data args", function(done) {

        var users = {
            "0": {
                name: "John B. Flowers",
                occupation: "Clock repairer",
                gender: "Male"
            },
            "1": {
                name: "Pamela R. Rice",
                occupation: "Cartographer",
                gender: "Female"
            },
            "2": {
                name: "Barbara C. Rigsby",
                occupation: "Enrollment specialist",
                gender: "Female"
            },
            "3": {
                name: "Anthony J. Ward",
                occupation: "Clinical laboratory technologist",
                gender: "Male"
            }
        };


        testRender('test-project/rhtml-templates/async-fragment-args.rhtml', {}, done, {
            dataProviders: {
                'userInfo': function(arg, done) {
                    setTimeout(function() {
                        done(null, users[arg.userId]);
                    }, 100);
                }
            }
        });
    });

    it("should allow a data provider to be a promise", function(done) {

        var deferred = require('raptor-promises').defer();
        setTimeout(function() {
            deferred.resolve('Test promise');
        }, 200);

        testRender('test-project/rhtml-templates/async-fragment-promise.rhtml', {}, done, {
            dataProviders: {
                'promiseData': function(arg, done) {
                    return deferred.promise;
                }
            }
        });
    });

    it("should allow functions that return promises as data providers", function(done) {
        testRender('test-project/rhtml-templates/async-fragment-function-data-provider.rhtml', {
            userInfo: function() {
                var deferred = require('raptor-promises').defer();
                setTimeout(function() {
                    deferred.resolve({
                        name: 'John'
                    });
                }, 200);
                return deferred.promise;
            }
        }, done);
    });

    it("should allow functions that return non-promises as data providers", function(done) {
        testRender('test-project/rhtml-templates/async-fragment-function-data-provider.rhtml', {
            userInfo: function() {
                return {
                    name: 'John'
                };
            }
        }, done);
    });

    it("should allow functions that use done callback", function(done) {
        testRender('test-project/rhtml-templates/async-fragment-function-data-provider.rhtml', {
            userInfo: function(arg, done) {
                done(null, {
                    name: 'John'
                });
            }
        }, done);
    });

    it("should allow for a timeout message", function(done) {
        testRender('test-project/rhtml-templates/async-fragment-timeout-message.rhtml', {
            userInfo: function(arg, done) {
                // Do nothing to trigger a timeout
            }
        }, done);
    });

});

