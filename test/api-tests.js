'use strict';
require('./patch-module');

var chai = require('chai');
chai.config.includeStack = true;
var expect = require('chai').expect;
var nodePath = require('path');
var marko = require('../');
var through = require('through');
var fs = require('fs');

require('../node-require').install();

describe('api' , function() {

    before(function() {
        require('../compiler').defaultOptions.checkUpToDate = false;
    });

    beforeEach(function(done) {

        done();
    });

    it('should allow a template to be rendered using a callback', function(done) {
        var template = marko.load(nodePath.join(__dirname, 'fixtures/api-tests/hello.marko'));
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

        var template = marko.load(nodePath.join(__dirname, 'fixtures/api-tests/hello.marko'));
        template.render({
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
            .on('end', function() {
                expect(output).to.equal('Hello John!');
                done();
            })
            .on('error', function(e) {
                done(e);
            });

        var template = marko.load(nodePath.join(__dirname, 'fixtures/api-tests/hello.marko'));

        template.render({
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


        var template = require(nodePath.join(__dirname, 'fixtures/api-tests/hello.marko'));
        template.stream(
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
        var template = marko.load(nodePath.join(__dirname, 'fixtures/api-tests/hello.marko'));
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

        var template = marko.load(nodePath.join(__dirname, 'fixtures/api-tests/hello.marko'));
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
            .on('end', function() {
                expect(output).to.equal('Hello John!');
                done();
            })
            .on('error', function(e) {
                done(e);
            });

        var template = marko.load(nodePath.join(__dirname, 'fixtures/api-tests/hello.marko'));
        template.render({
                name: 'John'
            },
            out).end();
    });

    it('should allow a template to be loaded and rendered to a stream', function(done) {
        var template = marko.load(nodePath.join(__dirname, 'fixtures/api-tests/hello.marko'));

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
        var template = marko.load(nodePath.join(__dirname, 'fixtures/api-tests/hello.marko'));
        var output = template.renderSync({ name: 'John' });
        expect(output).to.equal('Hello John!');
    });

    it('should allow a template to be rendered synchronously using global attributes', function() {
        var template = marko.load(nodePath.join(__dirname, 'fixtures/api-tests/hello-global.marko'));
        var data = {
          name: 'John',
          $global: {
              greeting: 'Greetings'
          }
        };
        var output = template.renderSync(data);
        expect(output).to.equal('Greetings John!');
    });

    it('should allow a template to be rendered asynchronously using global attributes', function(done) {
      var template = marko.load(nodePath.join(__dirname, 'fixtures/api-tests/hello-global.marko'));
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
        var template = marko.load(nodePath.join(__dirname, 'fixtures/api-tests/hello-async.marko'));
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
        var template = marko.load(nodePath.join(__dirname, 'fixtures/api-tests/hello-error.marko'));
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

    it('should handle no context passed to renderSync', function() {
        var template = marko.load(nodePath.join(__dirname, 'fixtures/api-tests/hello-empty.marko'));
        var output = template.renderSync();

        expect(output).to.equal('Hello!');
    });

    it('should allow a template to be loaded from a compiled JS module', function(done) {
        // Load the JS file to ensure the hello.marko.js file is created
        marko.load(nodePath.join(__dirname, 'fixtures/api-tests/hello.marko'));

        var templateModule = require(nodePath.join(__dirname, 'fixtures/api-tests/hello.marko.js'));

        var template = marko.load(templateModule);
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

    it('should allow a template to be required', function(done) {
        var templatePath = nodePath.join(__dirname, 'fixtures/api-tests/hello.marko');
        var template = require(templatePath);
        template.render(
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

    it('should allow global data with callback-style render', function(done) {
        var template = marko.load(nodePath.join(__dirname, 'fixtures/api-tests/global-data.marko'));
        template.render({
                $global: {
                    foo: 'bar'
                }
            },
            function(err, output) {
                if (err) {
                    return done(err);
                }

                expect(output).to.equal('bar');
                done();
            });
    });

    it('should allow global data with render to writable stream', function(done) {
        var output = '';

        var stream = through(function write(data) {
            output += data;
        });

        stream.on('end', function() {
                expect(output).to.equal('bar');
                done();
            })
            .on('error', function(e) {
                done(e);
            });

        var template = marko.load(nodePath.join(__dirname, 'fixtures/api-tests/global-data.marko'));
        template.render(
            {
                $global: {
                    foo: 'bar'
                }
            },
            stream);
    });

    it('should write compiled templates to disk by default when using the Node.js require extension', function() {
        var compiledPath;

        try {
            var templatePath = nodePath.join(__dirname, 'fixtures/api-tests/write-to-disk.marko');
            compiledPath = nodePath.join(__dirname, 'fixtures/api-tests/write-to-disk.marko.js');
            var template = require(templatePath);
            delete require.cache[templatePath];
            expect(fs.existsSync(compiledPath)).to.equal(true);
            expect(template.renderSync({name: 'Frank'})).to.equal('Hello Frank!');
        } finally {
            fs.unlinkSync(compiledPath);
        }
    });

    it('should write compiled templates to disk by default when using load', function() {

        var compiledPath;

        try {
            var templatePath = nodePath.join(__dirname, 'fixtures/api-tests/write-to-disk.marko');
            compiledPath = nodePath.join(__dirname, 'fixtures/api-tests/write-to-disk.marko.js');
            var template = marko.load(templatePath);
            expect(fs.existsSync(compiledPath)).to.equal(true);
            expect(template.renderSync({name: 'Frank'})).to.equal('Hello Frank!');
        } finally {
            fs.unlinkSync(compiledPath);
        }
    });

    it('should allow compiled templates to not be written to disk when using the Node.js require extension', function() {
        require('../compiler').defaultOptions.writeToDisk = false;
        try {
            var templatePath = nodePath.join(__dirname, 'fixtures/api-tests/write-to-disk.marko');
            var compiledPath = nodePath.join(__dirname, 'fixtures/api-tests/write-to-disk.marko.js');
            var template = require(templatePath);
            expect(fs.existsSync(compiledPath)).to.equal(false);
            expect(template.render).to.be.a('function');
            expect(template.renderSync({name: 'Frank'})).to.equal('Hello Frank!');
        } finally {
            require('../compiler').defaultOptions.writeToDisk = true;
        }
    });

    it('should allow compiled templates to not be written to disk when using load', function() {
        require('../compiler').defaultOptions.writeToDisk = false;
        try {
            var templatePath = nodePath.join(__dirname, 'fixtures/api-tests/write-to-disk.marko');
            var compiledPath = nodePath.join(__dirname, 'fixtures/api-tests/write-to-disk.marko.js');
            var template = marko.load(templatePath);
            expect(fs.existsSync(compiledPath)).to.equal(false);
            expect(template.render).to.be.a('function');
            expect(template.renderSync({name: 'Frank'})).to.equal('Hello Frank!');
        } finally {
            require('../compiler').defaultOptions.writeToDisk = true;
        }
    });

    it('should allow a template to be loaded from source', function() {
        var template;
        var templatePath;

        // Make sure calling load with templatePath:String, templateSrc:String arguments works
        templatePath = nodePath.join(__dirname, 'dummy.marko');
        template = marko.load(templatePath, '- Hello $!{data.name}!');
        expect(template.renderSync({name: 'Frank'})).to.equal('Hello Frank!');

        // Make sure calling load with templatePath:String, templateSrc:String, options:Object arguments works
        templatePath = nodePath.join(__dirname, 'dummy.marko');
        template = marko.load(templatePath, '- Hello $!{data.name}!', {});
        expect(template.renderSync({name: 'Frank'})).to.equal('Hello Frank!');

        // Make sure calling load with templatePath:String, options:Object arguments works
        delete require('../compiler').defaultOptions.writeToDisk;

        templatePath = nodePath.join(__dirname, 'fixtures/api-tests/write-to-disk.marko');
        var compiledPath = nodePath.join(__dirname, 'fixtures/api-tests/write-to-disk.marko.js');

        try {
            fs.unlinkSync(compiledPath);
        } catch(e) {
            // ignore
        }

        template = marko.load(templatePath, {writeToDisk: false});
        expect(fs.existsSync(compiledPath)).to.equal(false);
        expect(template.render).to.be.a('function');
        expect(template.renderSync({name: 'Frank'})).to.equal('Hello Frank!');
    });

    it('should allow configure()', function() {
        var compiler = require('marko/compiler');
        compiler.configure(); // Use defaults
        expect(compiler.config.writeToDisk).to.equal(true);
        expect(compiler.config.preserveWhitespace).to.equal(false);

        compiler.configure({
            preserveWhitespace: true
        });
        expect(compiler.config.writeToDisk).to.equal(true);
        expect(compiler.config.preserveWhitespace).to.equal(true);

        compiler.configure(); // Use defaults
        expect(compiler.config.writeToDisk).to.equal(true);
        expect(compiler.config.preserveWhitespace).to.equal(false);

    });

});
