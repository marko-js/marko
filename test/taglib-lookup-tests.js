'use strict';
var chai = require('chai');
chai.Assertion.includeStack = true;
require('chai').should();
var expect = require('chai').expect;
var nodePath = require('path');
var fs = require('fs');
var logger = require('raptor-logging').logger(module);

describe('raptor-templates/compiler/taglibs' , function() {

    beforeEach(function(done) {
        for (var k in require.cache) {
            if (require.cache.hasOwnProperty(k)) {
                delete require.cache[k];
            }
        }

        require('raptor-logging').configureLoggers({
            'raptor-templates': 'INFO'
        });

        done();
    });

    it('should lookup core attributes for top-level template', function() {
        var taglibLookup = require('../compiler/lib/taglib-lookup');
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project'));
        var ifAttr = lookup.getAttribute('', 'div', 'c', 'if');
        expect(ifAttr != null).to.equal(true);
        expect(ifAttr.type).to.equal('expression');
    });

    it('should lookup core tag for top-level template', function() {
        var taglibLookup = require('../compiler/lib/taglib-lookup');
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project'));
        var ifTag = lookup.getTag('c', 'if');
        expect(ifTag != null).to.equal(true);
        expect(ifTag.name).to.equal('if');
        expect(ifTag.namespace).to.equal(null);
    });

    it('should lookup core template for top-level template', function() {
        var taglibLookup = require('../compiler/lib/taglib-lookup');
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project'));
        // console.log(Object.keys(lookup.tags));
        var templateTag = lookup.getTag('c', 'template');
        expect(templateTag != null).to.equal(true);
        expect(templateTag.name).to.equal('template');
        expect(templateTag.namespace).to.equal(null);
    });

    it('should lookup custom tag for top-level template', function() {
        var taglibLookup = require('../compiler/lib/taglib-lookup');
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project'));
        var tag = lookup.getTag('test', 'hello');
        // console.log(Object.keys(lookup.tags));
        expect(tag != null).to.equal(true);
        expect(tag.name).to.equal('hello');
        expect(tag.namespace).to.equal(undefined);
    });

    it('should lookup custom attributes for top-level template', function() {
        var taglibLookup = require('../compiler/lib/taglib-lookup');
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project'));
        // console.log(Object.keys(lookup.attributes));
        var attr = lookup.getAttribute('test', 'hello', '', 'name');
        expect(attr != null).to.equal(true);
        expect(attr.type).to.equal('string');

        var attr2 = lookup.getAttribute('test', 'hello', 'test', 'name');
        expect(attr2).to.equal(attr);

        attr = lookup.getAttribute('test', 'hello', '', 'expr');
        expect(attr != null).to.equal(true);
        expect(attr.type).to.equal('expression');
    });

    it('should allow for dynamic attributes', function() {
        var taglibLookup = require('../compiler/lib/taglib-lookup');
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project'));
        // console.log(Object.keys(lookup.attributes));
        var attr = lookup.getAttribute('test', 'hello', '', 'DYNAMIC');
        expect(attr != null).to.equal(true);
        expect(attr.type).to.equal('number');
    });

    it('should cache a lookup', function() {
        var taglibLookup = require('../compiler/lib/taglib-lookup');
        var lookup1 = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project'));
        var lookup2 = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project'));
        var lookup3 = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project/empty'));
        var lookup4 = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project/nested'));
        expect(lookup1).to.equal(lookup2);
        expect(lookup2).to.equal(lookup3);
        expect(lookup1).to.not.equal(lookup4);
    });

    it('should lookup nested tags', function() {
        var taglibLookup = require('../compiler/lib/taglib-lookup');
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project/nested'));
        var tag = lookup.getTag('nested', 'foo');
        
        expect(tag != null).to.equal(true);
        expect(tag.name).to.equal('foo');
        expect(tag.namespace).to.equal(undefined);
    });

    it('should lookup attributes for nested tags', function() {
        var taglibLookup = require('../compiler/lib/taglib-lookup');
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project/nested'));
        // console.log(Object.keys(lookup.attributes));
        var attr = lookup.getAttribute('nested', 'foo', '', 'attr1');
        expect(attr != null).to.equal(true);
        expect(attr.type).to.equal('string');
    });

    it('should lookup tag transformers correctly for un-namespaced tags', function() {
        var transformers = [];

        var taglibLookup = require('../compiler/lib/taglib-lookup');
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project/nested'));

        lookup.forEachTagTransformer('', 'div', function(transformer) {
            transformers.push(transformer);
        });

        expect(transformers.length).to.equal(2);
    });

    it('should lookup tag transformers correctly for namespaced tag with transformer', function() {
        var transformers;

        var taglibLookup = require('../compiler/lib/taglib-lookup');
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project/nested'));

        transformers = [];
        lookup.forEachTagTransformer('nested', 'foo', function(transformer) {
            transformers.push(transformer);
        });

        expect(transformers.length).to.equal(2);

        lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project/transformers'));

        transformers = [];
        lookup.forEachTagTransformer('transform', 'foo', function(transformer) {
            transformers.push(transformer);
        });
        
        expect(transformers.length).to.equal(3);
        expect(transformers[0].path.indexOf('HtmlTagTransformer')).to.not.equal(-1);
        expect(transformers[1].name).to.equal('foo');
        expect(transformers[2].name).to.equal('CoreTagTransformer');

        transformers = [];
        lookup.forEachTagTransformer('transform', 'bar', function(transformer) {
            transformers.push(transformer);
        });
        
        expect(transformers.length).to.equal(3);
        expect(transformers[0].path.indexOf('HtmlTagTransformer')).to.not.equal(-1);
        expect(transformers[1].name).to.equal('CoreTagTransformer');
        expect(transformers[2].name).to.equal('bar');
    });

    it('should lookup tag transformers core tag with custom node', function() {
        var transformers = [];

        var taglibLookup = require('../compiler/lib/taglib-lookup');
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project/nested'));

        lookup.forEachTagTransformer('c', 'else', function(transformer) {
            transformers.push(transformer);
        });

        expect(transformers.length).to.equal(3);
        // expect(transformers[0].name).to.equal('HTagTransformer');
        expect(transformers[1].name).to.equal('CoreTagTransformer');
        expect(transformers[2].name).to.equal('ElseTagTransformer');
    });
    
});

