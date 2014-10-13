'use strict';
var chai = require('chai');
chai.Assertion.includeStack = true;
require('chai').should();
var expect = require('chai').expect;
var nodePath = require('path');
var fs = require('fs');

describe('async-writer' , function() {

    beforeEach(function(done) {
        // for (var k in require.cache) {
        //     if (require.cache.hasOwnProperty(k)) {
        //         delete require.cache[k];
        //     }
        // }

        done();
    });

    it('should render a series of sync calls correctly', function(done) {
        var out = require('../').create();
        out.write('1');
        out.write('2');
        out.write('3');
        out.write('4');
        out.end();
        out.on('finish', function() {
            var output = out.getOutput();
            expect(output).to.equal('1234');
            done();
        });
    });

    it('should render a series of sync and async calls correctly', function(done) {
        var out = require('../').create();
        out.write('1');

        var asyncOut1 = out.beginAsync();
        setTimeout(function() {
            asyncOut1.write('2');
            asyncOut1.end();
        }, 100);

        out.write('3');

        var asyncOut2 = out.beginAsync();
        setTimeout(function() {
            asyncOut2.write('4');
            asyncOut2.end();
        }, 10);

        out.end();
        out.on('finish', function() {
            var output = out.getOutput();
            expect(output).to.equal('1234');
            done();
        });
    });

    it('should allow an async fragment to complete synchronously', function(done) {
        var out = require('../').create();
        out.write('1');

        var asyncOut = out.beginAsync();
        setTimeout(function() {
            asyncOut.write('2');
            asyncOut.end();
        }, 10);

        out.write('3');
        out.end();
        out.on('finish', function() {
            var output = out.getOutput();
            expect(output).to.equal('123');
            done();
        });
    });

    it('should allow the async callback to provide data', function(done) {
        var out = require('../').create();
        out.write('1');

        var asyncOut = out.beginAsync();
        setTimeout(function() {
            asyncOut.end('2');
        }, 10);

        out.write('3');
        out.end();
        out.on('finish', function() {
            var output = out.getOutput();
            expect(output).to.equal('123');
            done();
        });
    });

    it('should handle timeouts correctly', function(done) {
        var out = require('../').create();
        var errors = [];
        out.on('error', function(e) {
            errors.push(e);
        });

        out.write('1');

        var asyncOut = out.beginAsync({timeout: 100, name: 'test'});
        setTimeout(function() {
            asyncOut.write('2');
            asyncOut.end();
        }, 200);

        out.write('3');
        out.end();

        out.on('finish', function() {
            expect(errors.length).to.equal(1);
            expect(out.getOutput()).to.equal('13');
            done();
        });
    });

    it('should render nested async calls correctly', function(done) {
        var out = require('../').create();
        out.write('1');

        var asyncOut = out.beginAsync();
        setTimeout(function() {
            asyncOut.write('2a');

            var nestedAsyncContext = asyncOut.beginAsync();
            setTimeout(function() {
                nestedAsyncContext.write('2b');
                nestedAsyncContext.end();
            }, 10);


            asyncOut.write('2c');
            asyncOut.end();
        }, 10);

        out.write('3');

        var asyncOut2 = out.beginAsync();
        setTimeout(function() {
            var nestedAsyncContext = asyncOut2.beginAsync();
            setTimeout(function() {
                nestedAsyncContext.write('4a');
                nestedAsyncContext.end();
            }, 10);

            var nestedAsyncContext2 = asyncOut2.beginAsync();
            setTimeout(function() {
                nestedAsyncContext2.write('4b');
                nestedAsyncContext2.end();
            }, 10);


            asyncOut2.write('4c');
            asyncOut2.end();
        }, 10);

        out.end();
        out.on('finish', function() {
            var output = out.getOutput();
            expect(output).to.equal('12a2b2c34a4b4c');
            done();
        });
    });

    it('should handle sync errors correctly', function(done) {
        var out = require('../').create();
        var errors = [];
        out.on('error', function(e) {
            errors.push(e);
        });

        out.write('1');

        var asyncOut = out.beginAsync();
        setTimeout(function() {
            asyncOut.error(new Error('test'));
        }, 10);
        out.write('3');
        out.end();
        out.on('finish', function() {
            var output = out.getOutput();
            expect(errors.length).to.equal(1);
            expect(output).to.equal('13');
            done();
        });
    });

    it('should support chaining', function(done) {
        var errors = [];
        var out = require('../').create()
            .on('error', function(e) {
                errors.push(e);
            })
            .on('finish', function() {
                var output = out.getOutput();
                expect(errors.length).to.equal(1);
                expect(output).to.equal('13');
                done();
            })
            .write('1');

        var asyncOut = out.beginAsync();
        setTimeout(function() {
            asyncOut.error(new Error('test'));
        }, 10);

        out.write('3')
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
        var out = require('../').create(through)
            .on('error', function(e) {
                errors.push(e);
            })
            .on('finish', function() {
                expect(errors.length).to.equal(0);
                expect(output).to.equal('123');
                done();
            })
            .write('1');

        var asyncOut = out.beginAsync();
        setTimeout(function() {
            asyncOut.write('2');
            asyncOut.end();
        }, 10);

        out.write('3')
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
        out = require('../').create(out)
            .on('error', function(e) {
                errors.push(e);
            })
            .on('finish', function() {
            })
            .write('1');

        var asyncOut = out.beginAsync();
        setTimeout(function() {
            asyncOut.write('2');
            asyncOut.end();
        }, 10);

        out.write('3')
            .end();
    });

    it('should support piping to an async writer', function(done) {

        var out = require('../').create();
        out.write('1');

        var asyncOut = out.beginAsync();

        var helloReadStream = fs.createReadStream(nodePath.join(__dirname, 'hello.txt'), 'utf8');
        helloReadStream.pipe(asyncOut);

        out.write('2');
        out.end();
        out.on('finish', function() {
            var output = out.getOutput();
            expect(output).to.equal('1Hello World2');
            done();
        });
    });

    it('should support a writer being piped to another stream', function(done) {

        var through = require('through')();
        var outStr = '';

        var out = require('through')(
            function write(str) {
                outStr += str;
            }
        );

        through
            .pipe(out)
            
            .on('error', function(e) {
                done(e);
            });

        out = require('../').create(through);
        out.write('1');

        var asyncOut = out.beginAsync();

        var helloReadStream = fs.createReadStream(nodePath.join(__dirname, 'hello.txt'), 'utf8');
        helloReadStream.pipe(asyncOut);

        out.write('2');

        out.on('finish', function() {
            expect(outStr).to.equal('1Hello World2');
            done();
        });

        out.end();

    });

    it('should allow an async fragment to flush last', function(done) {
        var out = require('../').create();
        out.write('1');

        var asyncOut = out.beginAsync({last: true});
        out.once('last', function() {
            asyncOut.write('2');
            asyncOut.end();
        });


        out.write('3');
        out.end();
        out.on('finish', function() {
            var output = out.getOutput();
            expect(output).to.equal('123');
            done();
        });
    });

    it('should allow an async fragment to flush last asynchronously', function(done) {
        var out = require('../').create();
        out.write('1');

        var asyncOut = out.beginAsync({last: true});
        out.on('last', function() {
            lastFiredCount++;
        });

        out.once('last', function() {
            setTimeout(function() {
                asyncOut.write('2');
                asyncOut.end();
            }, 10);
        });

        var lastFiredCount = 0;




        out.write('3');
        out.end();
        out.on('finish', function() {
            expect(lastFiredCount).to.equal(1);
            var output = out.getOutput();
            expect(output).to.equal('123');
            done();
        });
    });

    it('should not crash the program if the underlying stream has an error listener', function(done) {
        var stream = require('stream');
        var PassThrough = stream.PassThrough;
        var passthrough = new PassThrough();

        passthrough.on('error', function(err) {
            done();
        });

        var out = require('../').create(passthrough);
        out.write('hello');
        out.error('test');
    });

    it('should crash the program if the underlying stream does *not* have an error listener', function(done) {
        var stream = require('stream');
        var PassThrough = stream.PassThrough;
        var passthrough = new PassThrough();

        var out = require('../').create(passthrough);
        out.write('hello');
        try {
            out.error('test');
            done('uncaught exception expected');
        } catch(e) {
            done();
        }

    });
});
