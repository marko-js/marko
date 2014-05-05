'use strict';
var chai = require('chai');
chai.Assertion.includeStack = true;
require('chai').should();
var expect = require('chai').expect;
var nodePath = require('path');
var raptorTemplates = require('../');
var through = require('through');

describe('raptor-templates/rhtml' , function() {

    beforeEach(function(done) {
        done();
    });

    it('should allow a template to be loaded and rendered using a callback', function(done) {
        raptorTemplates.render(
            nodePath.join(__dirname, 'test-project/hello.rhtml'),
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

    it('should allow a template to be loaded and rendered to a context wrapping a string builder', function(done) {
        var context = raptorTemplates.createContext();
        context
            .on('end', function() {
                expect(context.getOutput()).to.equal('Hello John!');
                done();
            })
            .on('error', function(e) {
                done(e);
            });

        raptorTemplates.render(
            nodePath.join(__dirname, 'test-project/hello.rhtml'),
            {
                name: 'John'
            },
            context);

        context.end();
    });

    it('should allow a template to be loaded and rendered to a context wrapping a stream', function(done) {
        var output = '';

        var stream = through(function write(data) {
            output += data;
        });

        var context = raptorTemplates.createContext(stream);
        context
            .on('end', function() {
                expect(output).to.equal('Hello John!');
                done();
            })
            .on('error', function(e) {
                done(e);
            });

        raptorTemplates.render(
            nodePath.join(__dirname, 'test-project/hello.rhtml'),
            {
                name: 'John'
            },
            context);

        context.end();
    });

    it('should allow a template to be loaded and rendered to a stream', function(done) {
        

        var output = '';
        var outStream = through(function write(data) {
                output += data;
            });


        raptorTemplates.stream(
            nodePath.join(__dirname, 'test-project/hello.rhtml'),
            {
                name: 'John'
            })
            .pipe(outStream)
            .on('end', function() {
                expect(output).to.equal('Hello John!');
                done();
            })
            .on('error', function(e) {
                done(e);
            });
    });


    /// TEMPLATE LOADING:

    it('should allow a template to be loaded and rendered using a callback', function(done) {
        var template = raptorTemplates.load(nodePath.join(__dirname, 'test-project/hello.rhtml'));
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

    it('should allow a template to be loaded and rendered to a context wrapping a string builder', function(done) {
        var context = raptorTemplates.createContext();
        context
            .on('end', function() {
                expect(context.getOutput()).to.equal('Hello John!');
                done();
            })
            .on('error', function(e) {
                done(e);
            });

        var template = raptorTemplates.load(nodePath.join(__dirname, 'test-project/hello.rhtml'));
        template.render({
                name: 'John'
            },
            context);

        context.end();
    });

    it('should allow a template to be loaded and rendered to a context wrapping a stream', function(done) {

        var output = '';

        var stream = through(function write(data) {
            output += data;
        });

        var context = raptorTemplates.createContext(stream);
        context
            .on('end', function() {
                expect(output).to.equal('Hello John!');
                done();
            })
            .on('error', function(e) {
                done(e);
            });

        var template = raptorTemplates.load(nodePath.join(__dirname, 'test-project/hello.rhtml'));
        template.render({
                name: 'John'
            },
            context);

        context.end();
    });

    it('should allow a template to be loaded and rendered to a stream', function(done) {
        var template = raptorTemplates.load(nodePath.join(__dirname, 'test-project/hello.rhtml'));

        var output = '';
        var outStream = through(function write(data) {
                output += data;
            });


        template.stream({
                name: 'John'
            })
            .pipe(outStream)
            .on('end', function() {
                expect(output).to.equal('Hello John!');
                done();
            })
            .on('error', function(e) {
                done(e);
            });
    });

});

