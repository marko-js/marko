'use strict';
var chai = require('chai');
chai.Assertion.includeStack = true;
require('chai').should();
var expect = require('chai').expect;
var nodePath = require('path');
var marko = require('../');
var through = require('through');

describe('marko/api' , function() {

    before(function() {
        require('../compiler').defaultOptions.checkUpToDate = false;
    });

    beforeEach(function(done) {

        done();
    });

    it('should allow a template to be rendered using a callback', function(done) {
        marko.render(
            nodePath.join(__dirname, 'test-project/hello.marko'),
            {
                name: 'John'
            },
            function(err, output) {
                if (err) {
                    return done(err);
                }

                expect(output).to.equal('Hello John!');
                done();
            });
    });

    it('should allow a template to be rendered to a writer wrapping a string builder', function(done) {
        var out = marko.createWriter();
        out
            .on('finish', function() {
                expect(out.getOutput()).to.equal('Hello John!');
                done();
            })
            .on('error', function(e) {
                done(e);
            });

        marko.render(
            nodePath.join(__dirname, 'test-project/hello.marko'),
            {
                name: 'John'
            },
            out);

        out.end();
    });

    it('should allow a template to be rendered to a writer wrapping a stream', function(done) {
        var output = '';

        var stream = through(function write(data) {
            output += data;
        });

        var out = marko.createWriter(stream);
        out
            .on('finish', function() {
                expect(output).to.equal('Hello John!');
                done();
            })
            .on('error', function(e) {
                done(e);
            });

        marko.render(
            nodePath.join(__dirname, 'test-project/hello.marko'),
            {
                name: 'John'
            },
            out).end();
    });

    it('should allow a template to be rendered to a stream', function(done) {
        var output = '';
        var outStream = through(function write(data) {
            output += data;
        });

        outStream.on('end', function() {
            expect(output).to.equal('Hello John!');
            done();
        });


        marko.stream(
            nodePath.join(__dirname, 'test-project/hello.marko'),
            {
                name: 'John'
            })
            .pipe(outStream)
            .on('error', function(e) {
                done(e);
            });
    });


    /// TEMPLATE LOADING:

    it('should allow a template to be loaded and rendered using a callback', function(done) {
        var template = marko.load(nodePath.join(__dirname, 'test-project/hello.marko'));
        template.render({
                name: 'John'
            },
            function(err, output) {
                if (err) {
                    return done(err);
                }

                expect(output).to.equal('Hello John!');
                done();
            });
    });

    it('should allow a template to be loaded and rendered to a writer wrapping a string builder', function(done) {
        var out = marko.createWriter();
        out
            .on('finish', function() {
                expect(out.getOutput()).to.equal('Hello John!');
                done();
            })
            .on('error', function(e) {
                done(e);
            });

        var template = marko.load(nodePath.join(__dirname, 'test-project/hello.marko'));
        template.render({
                name: 'John'
            },
            out);

        out.end();
    });

    it('should allow a template to be loaded and rendered to a writer wrapping a stream', function(done) {

        var output = '';

        var stream = through(function write(data) {
            output += data;
        });

        var out = marko.createWriter(stream)
            .on('finish', function() {
                expect(output).to.equal('Hello John!');
                done();
            })
            .on('error', function(e) {
                done(e);
            });

        var template = marko.load(nodePath.join(__dirname, 'test-project/hello.marko'));
        template.render({
                name: 'John'
            },
            out).end();
    });

    it('should allow a template to be loaded and rendered to a stream', function(done) {
        var template = marko.load(nodePath.join(__dirname, 'test-project/hello.marko'));

        var output = '';
        var outStream = through(function write(data) {
            output += data;
        });

        outStream.on('end', function() {
            expect(output).to.equal('Hello John!');
            done();
        });


        template.stream({
                name: 'John'
            })
            .pipe(outStream)
            .on('error', function(e) {
                done(e);
            });
    });

    it('should allow a template to be rendered to a string synchronously using renderSync', function() {
        var template = marko.load(nodePath.join(__dirname, 'test-project/hello.marko'));
        var output = template.renderSync({ name: 'John' });
        expect(output).to.equal('Hello John!');
    });

    it('should allow a template to be rendered synchronously using global attributes', function() {
        var template = marko.load(nodePath.join(__dirname, 'test-project/hello-global.marko'));
        var data = {
          name: 'John',
          $global: {
              greeting: 'Greetings'
          }
        };
        var output = template.renderSync(data)
        expect(output).to.equal('Greetings John!');
    });

    it('should allow a template to be rendered asynchronously using global attributes', function(done) {
      var template = marko.load(nodePath.join(__dirname, 'test-project/hello-global.marko'));
      var data = {
          name: 'John',
          $global: {
              greeting: 'Greetings'
          }
      };
      template.render(data, function(error, output) {
          expect(output).to.equal('Greetings John!');
          done();
      });
    });

    it('should throw an error if beginAsync is used with renderSync', function() {
        var template = marko.load(nodePath.join(__dirname, 'test-project/hello-async.marko'));
        var output;
        var e;

        try {
            output = template.renderSync({
                nameDataProvider: function(arg, callback) {
                    setTimeout(function() {
                        callback(null, 'John');
                    }, 100);
                }
            });
        } catch(_e) {
            e = _e;
        }

        expect(output).to.equal(undefined);
        expect(e).to.not.equal(undefined);
    });

    it('should throw errors correctly with renderSync', function() {
        var template = marko.load(nodePath.join(__dirname, 'test-project/hello-error.marko'));
        var output;
        var e;

        try {
            output = template.renderSync();
        } catch(_e) {
            e = _e;
        }

        expect(output).to.equal(undefined);
        expect(e).to.not.equal(undefined);
    });

});
