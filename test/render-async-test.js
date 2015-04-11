'use strict';
var chai = require('chai');
chai.Assertion.includeStack = true;
require('chai').should();

function delayedDataProvider(delay, value) {
    return function(args, done) {
        setTimeout(function() {
            done(null, value);
        }, delay);
    };
}

var testRender = require('./util').createTestRender({
    ext: '.marko'
});


describe('marko/marko-async' , function() {

    beforeEach(function(done) {
        // for (var k in require.cache) {
        //     if (require.cache.hasOwnProperty(k)) {
        //         delete require.cache[k];
        //     }
        // }

        // require('raptor-logging').configureLoggers({
        //     'marko': 'INFO'
        // });

        done();
    });

    it('should render a simple template with async fragments correctly (1)', function(done) {
        testRender('fixtures/templates/async-fragment-ordering', {
            'D1': delayedDataProvider(100),
            'D2': delayedDataProvider(300),
            'D3': delayedDataProvider(200),
            'D4': delayedDataProvider(800)
        }, done);
    });

    it('should render a simple template with async fragments correctly (2)', function(done) {
        testRender('fixtures/templates/async-fragment-ordering', {
            'D1': delayedDataProvider(100),
            'D2': delayedDataProvider(200),
            'D3': delayedDataProvider(300),
            'D4': delayedDataProvider(150)
        }, done);
    });

    it('should render a simple template with async fragments correctly (3)', function(done) {
        testRender('fixtures/templates/async-fragment-ordering', {
            'D1': delayedDataProvider(800),
            'D2': delayedDataProvider(200),
            'D3': delayedDataProvider(300),
            'D4': delayedDataProvider(100)
        }, done);
    });

    it('should render a simple template with async fragments correctly (4)', function(done) {
        testRender('fixtures/templates/async-fragment-ordering', {
            'D1': delayedDataProvider(800),
            'D2': delayedDataProvider(300),
            'D3': delayedDataProvider(200),
            'D4': delayedDataProvider(100)
        }, done);
    });

    it('should render a less simple template with async fragments correctly (1)', function(done) {
        testRender('fixtures/templates/async-fragment-ordering2', {
            'D1': delayedDataProvider(100),
            'D2': delayedDataProvider(300),
            'D3': delayedDataProvider(200),
            'D4': delayedDataProvider(800),
            'D5': delayedDataProvider(900),
            'D6': delayedDataProvider(100),
            'D7': delayedDataProvider(50)
        }, done);
    });

    it('should render a less simple template with async fragments correctly (2)', function(done) {
        testRender('fixtures/templates/async-fragment-ordering2', {
            'D1': delayedDataProvider(100),
            'D2': delayedDataProvider(300),
            'D3': delayedDataProvider(200),
            'D4': delayedDataProvider(800),
            'D5': delayedDataProvider(900),
            'D6': delayedDataProvider(100),
            'D7': delayedDataProvider(200)
        }, done);
    });

    it('should render a less simple template with async fragments correctly (3)', function(done) {
        testRender('fixtures/templates/async-fragment-ordering2', {
            'D1': delayedDataProvider(900),
            'D2': delayedDataProvider(300),
            'D3': delayedDataProvider(200),
            'D4': delayedDataProvider(800),
            'D5': delayedDataProvider(100),
            'D6': delayedDataProvider(100),
            'D7': delayedDataProvider(200)
        }, done);
    });

    it("should allow for using macros inside async fragments", function(done) {
        testRender('fixtures/templates/async-fragment-macros', {
            'D1': delayedDataProvider(100)
        }, done);
    });

    it("should allow for global data providers", function(done) {
        testRender('fixtures/templates/async-fragment-data-providers', {
            'sharedData': function(args, done) {
                var deferred = require('raptor-promises').defer();

                setTimeout(function() {
                    deferred.resolve({
                        name: 'testSharedData'
                    });
                }, 100);

                return deferred.promise;
            },
            'contextData': delayedDataProvider(100, {name: "testContextData"})
        }, done);
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


        testRender('fixtures/templates/async-fragment-args', {
            'userInfo': function(arg, done) {
                setTimeout(function() {
                    done(null, users[arg.userId]);
                }, 100);
            }
        }, done);
    });

    it("should allow a data provider to be a promise", function(done) {

        var deferred = require('raptor-promises').defer();
        setTimeout(function() {
            deferred.resolve('Test promise');
        }, 200);

        testRender('fixtures/templates/async-fragment-promise', {
            'promiseData': function(arg, done) {
                return deferred.promise;
            }
        }, done);
    });

    it("should allow functions that return promises as data providers", function(done) {
        testRender('fixtures/templates/async-fragment-function-data-provider', {
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
        testRender('fixtures/templates/async-fragment-function-data-provider', {
            userInfo: function() {
                return {
                    name: 'John'
                };
            }
        }, done);
    });

    it("should allow functions that use done callback", function(done) {
        testRender('fixtures/templates/async-fragment-function-data-provider', {
            userInfo: function(arg, done) {
                done(null, {
                    name: 'John'
                });
            }
        }, done);
    });

    it("should allow for a timeout message", function(done) {
        testRender('fixtures/templates/async-fragment-timeout-message', {
            userInfo: function(arg, done) {
                // Do nothing to trigger a timeout
            }
        }, done);
    });

    it("should allow data provider function to only have a callback parameter", function(done) {
        testRender('fixtures/templates/async-fragment-function-data-provider', {
            userInfo: function(done) {
                done(null, {
                    name: 'John'
                });
            }
        }, done);
    });

    it("should allow for alternative error message (sync)", function(done) {
        testRender('fixtures/templates/async-fragment-error', {
            userInfo: function(done) {
                done(new Error('Invalid user'));
            }
        }, done);
    });

    it("should allow for alternative error message (async)", function(done) {
        testRender('fixtures/templates/async-fragment-error', {
            userInfo: function(done) {
                setTimeout(function() {
                    done(new Error('Invalid user'));
                }, 200);
            }
        }, done);
    });

    it("should allow for alternative timeout message", function(done) {
        testRender('fixtures/templates/async-fragment-timeout', {
            userInfo: function(done) {
                setTimeout(function() {
                    done(null, {});
                }, 600);
            }
        }, done);
    });

    it("should render async fragments correctly with client-reorder set to true", function(done) {
        // NOTE: This test is very sensitive to the client-side JavaScript that gets written that handles
        //       rearranging DOM nodes. Might want to revisit in the future.
        testRender('fixtures/templates/async-fragment-client-reorder', {
            outer: function(callback) {
                setTimeout(function() {
                    callback(null, {});
                }, 400);
            },
            inner1: function(callback) {
                setTimeout(function() {
                    callback(null, {});
                }, 500);
            },
            inner2: function(callback) {
                setTimeout(function() {
                    callback(null, {});
                }, 600);
            }
        }, done);
    });

});
