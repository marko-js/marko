'use strict';
var chai = require('chai');
chai.config.includeStack = true;
var expect = require('chai').expect;
var nodePath = require('path');
var marko = require('../');
var fs = require('fs');

require('../node-require').install();

describe('hot-reload' , function() {
    before(function() {
        require('../hot-reload').enable();
        require('../compiler').defaultOptions.checkUpToDate = false;
    });

    it('should allow a required template to be hot reloaded', function() {


        var srcTemplatePath = nodePath.join(__dirname, 'fixtures/hot-reload/hot-reload.marko');
        var templateSrc = fs.readFileSync(srcTemplatePath, { encoding: 'utf8' });

        var tempTemplatePath = nodePath.join(__dirname, 'temp/hello.marko');
        fs.writeFileSync(tempTemplatePath, templateSrc, { encoding: 'utf8' });

        var template = require(tempTemplatePath);

        expect(template.renderSync({ name: 'John' })).to.equal('Hello John!');

        fs.writeFileSync(tempTemplatePath, templateSrc + '!', { encoding: 'utf8' });

        expect(template.renderSync({ name: 'John' })).to.equal('Hello John!');

        require('../hot-reload').handleFileModified(tempTemplatePath);

        expect(template.renderSync({ name: 'John' })).to.equal('Hello John!!');
    });

    it('should allow a non-required template to be hot reloaded', function() {


        var srcTemplatePath = nodePath.join(__dirname, 'fixtures/hot-reload/hot-reload.marko');
        var templateSrc = fs.readFileSync(srcTemplatePath, { encoding: 'utf8' });

        var tempTemplatePath = nodePath.join(__dirname, 'temp/hello2.marko');
        fs.writeFileSync(tempTemplatePath, templateSrc, { encoding: 'utf8' });

        var template = marko.load(tempTemplatePath);

        expect(template.renderSync({ name: 'John' })).to.equal('Hello John!');

        fs.writeFileSync(tempTemplatePath, templateSrc + '!', { encoding: 'utf8' });

        expect(template.renderSync({ name: 'John' })).to.equal('Hello John!');

        require('../hot-reload').handleFileModified(tempTemplatePath);

        expect(template.renderSync({ name: 'John' })).to.equal('Hello John!!');
    });

});
