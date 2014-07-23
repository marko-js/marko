'use strict';
var chai = require('chai');
chai.Assertion.includeStack = true;
require('chai').should();
var expect = require('chai').expect;
var nodePath = require('path');
var fs = require('fs');

describe('raptor-render-context' , function() {

    beforeEach(function(done) {
        // for (var k in require.cache) {
        //     if (require.cache.hasOwnProperty(k)) {
        //         delete require.cache[k];
        //     }
        // }

        done();
    });

    it('should render a series of sync calls correctly', function(done) {
        var context = require('../').create();
        context.write('1');
        context.write('2');
        context.write('3');
        context.write('4');
        context.end();
        context.on('end', function() {
            var output = context.getOutput();
            expect(output).to.equal('1234');
            done();
        });
    });

    it('should render a series of sync and async calls correctly', function(done) {
        var context = require('../').create();
        context.write('1');

        var asyncContext1 = context.beginAsync();
        setTimeout(function() {
            asyncContext1.write('2');
            asyncContext1.end();
        }, 100);
        
        context.write('3');

        var asyncContext2 = context.beginAsync();
        setTimeout(function() {
            asyncContext2.write('4');
            asyncContext2.end();
        }, 10);

        context.end();
        context.on('end', function() {
            var output = context.getOutput();
            expect(output).to.equal('1234');
            done();
        });
    });

    it('should allow an async fragment to complete synchronously', function(done) {
        var context = require('../').create();
        context.write('1');

        var asyncContext = context.beginAsync();
        setTimeout(function() {
            asyncContext.write('2');
            asyncContext.end();
        }, 10);

        context.write('3');
        context.end();
        context.on('end', function() {
            var output = context.getOutput();
            expect(output).to.equal('123');
            done();
        });
    });

    it('should allow the async callback to provide data', function(done) {
        var context = require('../').create();
        context.write('1');

        var asyncContext = context.beginAsync();
        setTimeout(function() {
            asyncContext.end('2');
        }, 10);

        context.write('3');
        context.end();
        context.on('end', function() {
            var output = context.getOutput();
            expect(output).to.equal('123');
            done();
        });
    });

    it('should handle timeouts correctly', function(done) {
        var context = require('../').create();
        var errors = [];
        context.on('error', function(e) {
            errors.push(e);
        });

        context.write('1');

        var asyncContext = context.beginAsync({timeout: 100, name: 'test'});
        setTimeout(function() {
            asyncContext.write('2');
            asyncContext.end();
        }, 200);

        context.write('3');
        context.end();
        
        context.on('end', function() {
            expect(errors.length).to.equal(1);
            expect(context.getOutput()).to.equal('13');
            done();
        });
    });

    it('should render nested async calls correctly', function(done) {
        var context = require('../').create();
        context.write('1');

        var asyncContext = context.beginAsync();
        setTimeout(function() {
            asyncContext.write('2a');

            var nestedAsyncContext = asyncContext.beginAsync();
            setTimeout(function() {
                nestedAsyncContext.write('2b');
                nestedAsyncContext.end();
            }, 10);
            

            asyncContext.write('2c');
            asyncContext.end();
        }, 10);

        context.write('3');

        var asyncContext2 = context.beginAsync();
        setTimeout(function() {
            var nestedAsyncContext = asyncContext2.beginAsync();
            setTimeout(function() {
                nestedAsyncContext.write('4a');
                nestedAsyncContext.end();
            }, 10);

            var nestedAsyncContext2 = asyncContext2.beginAsync();
            setTimeout(function() {
                nestedAsyncContext2.write('4b');
                nestedAsyncContext2.end();
            }, 10);
            

            asyncContext2.write('4c');
            asyncContext2.end();
        }, 10);

        context.end();
        context.on('end', function() {
            var output = context.getOutput();
            expect(output).to.equal('12a2b2c34a4b4c');
            done();
        });
    });

    it('should handle sync errors correctly', function(done) {
        var context = require('../').create();
        var errors = [];
        context.on('error', function(e) {
            errors.push(e);
        });

        context.write('1');

        var asyncContext = context.beginAsync();
        setTimeout(function() {
            asyncContext.error(new Error('test'));
        }, 10);
        context.write('3');
        context.end();
        context.on('end', function() {
            var output = context.getOutput();
            expect(errors.length).to.equal(1);
            expect(output).to.equal('13');
            done();
        });
    });

    it('should support chaining', function(done) {
        var errors = [];
        var context = require('../').create()
            .on('error', function(e) {
                errors.push(e);
            })
            .on('end', function() {
                var output = context.getOutput();
                expect(errors.length).to.equal(1);
                expect(output).to.equal('13');
                done();
            })
            .write('1');

        var asyncContext = context.beginAsync();
        setTimeout(function() {
            asyncContext.error(new Error('test'));
        }, 10);

        context.write('3')
            .end();
    });

    it('should support writing to a through stream', function(done) {

        var output = '';
        var through = require('through')(
            function write(data) {
                output += data;
            }
        );

        var errors = [];
        var context = require('../').create(through)
            .on('error', function(e) {
                errors.push(e);
            })
            .on('end', function() {
                expect(errors.length).to.equal(0);
                expect(output).to.equal('123');
                done();
            })
            .write('1');

        var asyncContext = context.beginAsync();
        setTimeout(function() {
            asyncContext.write('2');
            asyncContext.end();
        }, 10);

        context.write('3')
            .end();
    });

    it('should support writing to a file output stream', function(done) {

        var outFile = nodePath.join(__dirname, 'test.out');
        var out = fs.createWriteStream(outFile, 'utf8');

        out.on('close', function() {
            var output  = fs.readFileSync(outFile, 'utf8');
            expect(errors.length).to.equal(0);
            expect(output).to.equal('123');
            fs.unlinkSync(outFile);
            done(); 
        });

        var errors = [];
        var context = require('../').create(out)
            .on('error', function(e) {
                errors.push(e);
            })
            .on('end', function() {
            })
            .write('1');

        var asyncContext = context.beginAsync();
        setTimeout(function() {
            asyncContext.write('2');
            asyncContext.end();
        }, 10);

        context.write('3')
            .end();
    });

    it('should support piping to an async render context', function(done) {

        var context = require('../').create();
        context.write('1');

        var asyncContext = context.beginAsync();

        var helloReadStream = fs.createReadStream(nodePath.join(__dirname, 'hello.txt'), 'utf8');
        helloReadStream.pipe(asyncContext);

        context.write('2');
        context.end();
        context.on('end', function() {
            var output = context.getOutput();
            expect(output).to.equal('1Hello World2');
            done();
        });
    });

    it('should support a render context being piped to another stream', function(done) {

        var through = require('through')();
        var outStr = '';

        var out = require('through')(
            function write(str) {
                outStr += str;
            }
        );

        through
            .pipe(out)
            .on('end', function() {
                expect(outStr).to.equal('1Hello World2');
                done();
            })
            .on('error', function(e) {
                done(e);
            });

        var context = require('../').create(through);
        context.write('1');

        var asyncContext = context.beginAsync();

        var helloReadStream = fs.createReadStream(nodePath.join(__dirname, 'hello.txt'), 'utf8');
        helloReadStream.pipe(asyncContext);

        context.write('2');
        context.end();
        
    });

    it('should allow an async fragment to flush last', function(done) {
        var context = require('../').create();
        context.write('1');

        var asyncContext = context.beginAsync({last: true});
        context.once('last', function() {
            asyncContext.write('2');
            asyncContext.end();
        });

        
        context.write('3');
        context.end();
        context.on('end', function() {
            var output = context.getOutput();
            expect(output).to.equal('123');
            done();
        });
    });

    it('should allow an async fragment to flush last asynchronously', function(done) {
        var context = require('../').create();
        context.write('1');

        var asyncContext = context.beginAsync({last: true});
        context.on('last', function() {
            lastFiredCount++;
        });

        context.once('last', function() {
            setTimeout(function() {
                asyncContext.write('2');
                asyncContext.end();
            }, 10);
        });

        var lastFiredCount = 0;

        

        
        context.write('3');
        context.end();
        context.on('end', function() {
            expect(lastFiredCount).to.equal(1);
            var output = context.getOutput();
            expect(output).to.equal('123');
            done();
        });
    });
});

