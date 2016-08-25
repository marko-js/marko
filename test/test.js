'use strict';
var chai = require('chai');
chai.Assertion.includeStack = true;
require('chai').should();
var expect = require('chai').expect;
var nodePath = require('path');
var fs = require('fs');

var fsReadOptions = { encoding: 'utf8' };

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
        var out = require('../debug').create();
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
        var out = require('../debug').create();
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

    it('should handle odd execution ordering', function(done) {
        var outA = require('../debug').create({ name:'outA' });

        outA.on('finish', function() {
            var output = outA.getOutput();
            expect(output).to.equal('1234567');
            done();
        });

        outA.write('1');
            // write 1 to original_stream (1)

        var outB = outA.beginAsync({ name:'outB' });
            // set outA.writer to buffer1
            //     buffer1.async to outA
            // set outB.writer to original_stream
            //     original_stream.async to outB
            // set outB.next to buffer1
            //     buffer1.prev to outB

        outA.write('3');
            // write 3 to buffer 1 (3)

        var outC = outA.beginAsync({ name:'outC' });
            // set newOut(outC).writer to this.writer(buffer1)
            //     buffer1.async to outC
            // set this(outA).writer to newBuffer(buffer2)
            //     buffer2.async to outA
            // set newOut(outC).next to newBuffer(buffer2)
            //     buffer2.prev to outC

            // set buffer1.next to outC
            //     outC.prev to buffer1
            // set buffer2.next to null

        var outD = outC.beginAsync({ name:'outD' });
            // set newOut(outD).writer to this.writer(buffer1)
            //     buffer1.async to outD
            // set this(outC).writer to newBuffer(buffer3)
            //     buffer3.async to outC
            // set newOut(outD).next to newBuffer(buffer3)
            //     buffer3.prev to outD

            // set buffer3.next to buffer2
            //     buffer2.prev to buffer3
            // set outC.next to outD
            //     outD.prev to outC

        outB.write('2');
            // write 2 to original_stream (12)

        outB.end();
            // flush this(outB).next(buffer1) to this(outB).writer(original_stream)
            // write buffer1.contents (3) to original_stream (123)
            // set buffer1.async.writer (outD.writer) to original_stream
            // stop, buffer1 not finished
            // if outB.prev (null)
            //    false

        outA.write('7');
            // write 7 to buffer2 (7)

        outC.write('5')
            // write 5 to buffer3 (5)

        outD.write('4');
            // write 4 to original_stream (1234)

        outD.end();
            // flush outD.next (buffer3) to outD.writer (original_stream)
            // write buffer3.contents (5) to original_stream (12345)
            // set buffer3.async.writer (outC.writer) to original_stream
            // stop, buffer3 not finished
            // if outD.prev (outC)
            //    set outC.next to buffer3.next (buffer2)
            //        buffer2.prev to outC

        outC.write('6');
            // write 6 to original_stream (123456)

        outC.end();
            // flush outC.next (buffer2) to outC.writer (original_stream)
            // write buffer2.contents(7) to original_stream (1234567)
            // set buffer2.async.writer (outA.writer) to original_stream
            // stop, buffer2 not finished
            // if outC.prev (buffer1)
            //    set buffer1.next to buffer2.next (null)

        outA.end();
            // all done
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

    it('should support writing to a through2 stream', function(done) {

        var output = '';
        var through2 = require('through2')(
            function write(data, encoding, callback) {
                output += data;
                callback(null, data);
            }
        );

        var errors = [];
        var out = require('../').create(through2)
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

    it('should support writing to a through stream', function(done) {

        var output = '';
        var through = require('through')(
            function write(data) {
                output += data;
                this.queue(data);
            }
        );

        var errors = [];
        var out = require('../').create(through)
            .on('error', function(e) {
                errors.push(e);
            })
            .on('end', function() {
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
        var out = fs.createWriteStream(outFile, fsReadOptions);

        out.on('close', function() {
            var output  = fs.readFileSync(outFile, fsReadOptions);
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

        var helloReadStream = fs.createReadStream(nodePath.join(__dirname, 'hello.txt'), fsReadOptions);
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

        var helloReadStream = fs.createReadStream(nodePath.join(__dirname, 'hello.txt'), fsReadOptions);
        helloReadStream.pipe(asyncOut);

        out.write('2');

        out.on('end', function() {
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

    it('should allow multiple onLast calls', function(done) {
        var out = require('../').create();
        out.write('1');

        var asyncOut1 = out.beginAsync();
        setTimeout(function() {
            asyncOut1.write('2');
            asyncOut1.end();
        }, 20);

        var asyncOut2 = out.beginAsync({last: true});
        var onLastCount = 0;
        var lastOutput = [];

        out.onLast(function(next) {
            onLastCount++;
            lastOutput.push('a');
            asyncOut2.write('3');
            asyncOut2.end();
            setTimeout(next, 10);
        });

        var asyncOut3 = out.beginAsync({last: true});
        out.onLast(function(next) {
            onLastCount++;
            lastOutput.push('b');
            asyncOut3.write('4');
            asyncOut3.end();
            next();
        });

        out.write('5');
        out.end();
        out.on('finish', function() {
            var output = out.getOutput();
            expect(output).to.equal('12345');
            expect(onLastCount).to.equal(2);
            expect(lastOutput).to.deep.equal(['a', 'b']);
            done();
        });
    });

    it('should handle timeout errors correctly', function(done) {
        var output = '';
        var errors = [];

        var through = require('through')(
            function write(data) {
                output += data;
            })
            .on('error', function(err) {
                errors.push(err);
            })
            .on('end', function() {
                expect(output).to.equal('12');
                expect(errors.length).to.equal(1);
                expect(errors[0].toString()).to.contain('timed out');
                done();
            });

        var out = require('../').create(through);
        out.write('1');

        var asyncOut1 = out.beginAsync();
        out.beginAsync({ timeout: 50});

        setTimeout(function() {
            asyncOut1.write('2');
            asyncOut1.end();

        }, 100);

        out.end();
    });

    it('should avoid writes after end (a)', function(done) {
        var output = '';
        var errors = [];
        var ended = false;

        var through = require('through')(
            function write(data) {
                expect(ended).to.equal(false);
                output += data;
            })
            .on('error', function(err) {
                errors.push(err);
            })
            .on('end', function() {
                ended = true;
                expect(output).to.equal('13');
                done();
            });

        var out = require('../').create(through);
        out.write('1');

        var asyncOut1 = out.beginAsync({ timeout: 50});

        setTimeout(function() {
            asyncOut1.write('2');
            asyncOut1.end();
        }, 100);


        var asyncOut2 = out.beginAsync();
        setTimeout(function() {
            asyncOut2.write('3');
            asyncOut2.end();
        }, 50);

        out.end();
    });

    it('should avoid writes after end (b)', function(done) {
        var output = '';
        var errors = [];
        var ended = false;

        var through = require('through')(
            function write(data) {
                expect(ended).to.equal(false);
                output += data;
            })
            .on('error', function(err) {
                errors.push(err);
            })
            .on('end', function() {
                ended = true;
                expect(output).to.equal('12');
                done();
            });

        var out = require('../').create(through);
        out.write('1');

        var asyncOut1 = out.beginAsync();

        setTimeout(function() {
            asyncOut1.write('2');
            asyncOut1.end();
        }, 75);

        var asyncOut2 = out.beginAsync({ timeout: 50});
        // This async fragment will timeout but we will
        // still write to it after it ends
        setTimeout(function() {
            asyncOut2.write('3');
            asyncOut2.end();
        }, 100);

        out.end();
    });

    it('should avoid writes after end (c)', function(done) {
        var output = '';
        var errors = [];
        var ended = false;

        var through = require('through')(
            function write(data) {
                expect(ended).to.equal(false);
                output += data;
            })
            .on('error', function(err) {
                errors.push(err);
            })
            .on('end', function() {
                ended = true;
                expect(output).to.equal('12');
                expect(errors.length).to.equal(1);
                done();
            });

        var out = require('../').create(through);
        out.write('1');

        var asyncOut1 = out.beginAsync();

        setTimeout(function() {
            asyncOut1.write('2');
            asyncOut1.end();
        }, 75);

        var asyncOut2 = out.beginAsync();
        // This async fragment will timeout but we will
        // still write to it after it ends
        setTimeout(function() {
            asyncOut2.error('TEST ERROR');
            asyncOut2.end();
        }, 100);

        out.end();
    });

    it('should track finished correctly', function(done) {
        var myGlobal = {};

        var out1 = require('../').create(null, {global: myGlobal});
        var out2 = require('../').create(null, {global: myGlobal});

        function handleFinished() {
            if (out1.data.__finishedFlag && out2.data.__finishedFlag) {
                done();
            }
        }

        out1.on('finish', function() {
            if (out1.data.__finishedFlag) {
                return done(new Error('finished invoked multiple times!'));
            }

            out1.data.__finishedFlag = true;
            handleFinished();
        });
        out2.on('finish', function() {
            if (out2.data.__finishedFlag) {
                return done(new Error('finished invoked multiple times!'));
            }

            out2.data.__finishedFlag = true;
            handleFinished();
        });

        out1.write('foo');
        out1.end();
        out1.end();

        out2.write('bar');
        out2.end();


    });

    it('should end correctly if top-level is ended asynchronously', function(done) {
        var out = require('../').create();
        out.name = 'outer';

        out.on('finish', function() {
            var output = out.getOutput();
            expect(output).to.equal('123');
            done();
        });

        out.write('1');

        setTimeout(function() {
            var asyncOut = out.beginAsync({ name: 'inner'});
            setTimeout(function() {
                asyncOut.write('2');
                asyncOut.end();
            }, 50);

            out.write('3');

            out.end();
        }, 10);
    });

    it('should end correctly if top-level is ended asynchronously when providing custom globals', function(done) {
        var out = require('../').create(null, {global: { foo: 'bar' }});
        out.name = 'outer';

        out.on('finish', function() {
            var output = out.getOutput();
            expect(output).to.equal('123');
            done();
        });

        out.write('1');

        setTimeout(function() {
            var asyncOut = out.beginAsync({ name: 'inner'});
            setTimeout(function() {
                asyncOut.write('2');
                asyncOut.end();
            }, 50);

            out.write('3');

            out.end();
        }, 10);
    });
});
