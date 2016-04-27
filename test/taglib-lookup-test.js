'use strict';
require('./patch-module');

var chai = require('chai');
chai.config.includeStack = true;
require('chai').should();
var expect = require('chai').expect;
var nodePath = require('path');

describe('taglib-lookup' , function() {

    beforeEach(function(done) {
        for (var k in require.cache) {
            if (require.cache.hasOwnProperty(k)) {
                delete require.cache[k];
            }
        }

        done();
    });

    it('should lookup core attributes for top-level template', function() {
        var taglibLookup = require('../compiler').taglibLookup;
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'fixtures'));
        // console.log('LOOKUP: ', Object.keys(lookup.attributes));
        var ifAttr = lookup.getAttribute('div', 'if');
        expect(ifAttr != null).to.equal(true);
        expect(ifAttr.type).to.equal('argument');
    });

    it('should lookup core tag for top-level template', function() {
        var taglibLookup = require('../compiler').taglibLookup;
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'fixtures'));
        var ifTag = lookup.getTag('if');
        expect(ifTag != null).to.equal(true);
        expect(ifTag.name).to.equal('if');
    });

    it('should lookup custom tag for top-level template', function() {
        var taglibLookup = require('../compiler').taglibLookup;
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'fixtures'));
        var tag = lookup.getTag('test-hello');
        // console.log(Object.keys(lookup.tags));
        expect(tag != null).to.equal(true);
        expect(tag.name).to.equal('test-hello');
    });

    it('should allow for declared and dynamic attributes', function() {
        var taglibLookup = require('../compiler').taglibLookup;
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'fixtures/taglib-dynamic-attribute'));
        // console.log(Object.keys(lookup.attributes));
        var attr = lookup.getAttribute('test-dynamic-attribute', 'DYNAMIC');
        expect(attr != null).to.equal(true);
        expect(attr.type).to.equal('boolean');
        expect(attr.name).to.equal('*');

        attr = lookup.getAttribute('test-dynamic-attribute', 'foo');
        expect(attr != null).to.equal(true);
        expect(attr.type).to.equal('string');
    });

    it('should lookup global attributes correctly', function() {
        var taglibLookup = require('../compiler').taglibLookup;
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'fixtures/taglib-custom-attribute'));
        // console.log('LOOKUP: ', Object.keys(lookup.attributes));
        var attrDef = lookup.getAttribute('test-dynamic-attributes', 'global-attribute');
        expect(attrDef != null).to.equal(true);
        expect(attrDef.type).to.equal('boolean');
    });

    it('should cache a lookup', function() {
        var taglibLookup = require('../compiler').taglibLookup;
        var lookup1 = taglibLookup.buildLookup(nodePath.join(__dirname, 'fixtures'));
        var lookup2 = taglibLookup.buildLookup(nodePath.join(__dirname, 'fixtures'));
        var lookup3 = taglibLookup.buildLookup(nodePath.join(__dirname, 'fixtures/taglib-empty'));
        var lookup4 = taglibLookup.buildLookup(nodePath.join(__dirname, 'fixtures/taglib-nested'));
        expect(lookup1).to.equal(lookup2);
        expect(lookup2).to.equal(lookup3);
        expect(lookup1).to.not.equal(lookup4);
    });

    it('should lookup nested tags', function() {
        var taglibLookup = require('../compiler').taglibLookup;
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'fixtures/taglib-nested'));
        var tag = lookup.getTag('nested-foo');

        expect(tag != null).to.equal(true);
        expect(tag.name).to.equal('nested-foo');
    });

    it('should lookup attributes for nested tags', function() {
        var taglibLookup = require('../compiler').taglibLookup;
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'fixtures/taglib-nested'));
        // console.log(Object.keys(lookup.attributes));
        var attr = lookup.getAttribute('nested-foo', 'attr1');
        expect(attr != null).to.equal(true);
        expect(attr.type).to.equal('string');
    });

    it('should lookup tag transformers correctly for un-namespaced tags', function() {
        var transformers = [];

        var taglibLookup = require('../compiler').taglibLookup;
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'fixtures/taglib-nested'));

        lookup.forEachTagTransformer('div', function(transformer) {
            transformers.push(transformer);
        });

        expect(transformers.length).to.equal(1);
    });

    it('should lookup tag transformers correctly for namespaced tag with transformer', function() {
        var transformers;

        var taglibLookup = require('../compiler').taglibLookup;
        var lookup;
        // lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'fixtures/nested'));

        // transformers = [];
        // lookup.forEachTagTransformer('nested-foo', function(transformer) {
        //     transformers.push(transformer);
        // });

        // expect(transformers.length).to.equal(2);

        lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'fixtures/taglib-transformers'));

        transformers = [];
        lookup.forEachTagTransformer('transform-foo', function(transformer) {
            transformers.push(transformer);
        });

        expect(transformers.length).to.equal(2);
        expect(transformers[0].path.indexOf('foo')).to.not.equal(-1);
        expect(transformers[1].path.indexOf('core-transformer')).to.not.equal(-1);

        transformers = [];
        lookup.forEachTagTransformer('transform-bar', function(transformer) {
            transformers.push(transformer);
        });

        expect(transformers.length).to.equal(2);
        expect(transformers[0].path.indexOf('core-transformer')).to.not.equal(-1);
        expect(transformers[1].path.indexOf('bar')).to.not.equal(-1);
    });

    it('should lookup tag transformers core tag with custom node', function() {
        var transformers = [];

        var taglibLookup = require('../compiler').taglibLookup;
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'fixtures/taglib-nested'));

        lookup.forEachTagTransformer('else', function(transformer) {
            transformers.push(transformer);
        });

        expect(transformers.length).to.equal(1);
        expect(transformers[0].path.indexOf('core-transformer')).to.not.equal(-1);
    });

    it('should de-duplicate taglibs', function() {
        var taglibLookup = require('../compiler').taglibLookup;
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'fixtures/taglib-duplicate/taglib-duplicate'));

        // The "duplicate-bar" tag was declared in the lower
        // taglib so it should have been found since the taglib
        // should not have been de-duped.
        var barTag = lookup.getTag('duplicate-bar');
        expect(barTag != null).to.equal(true);

        // The "duplicate-foo" tag was declared in the higher
        // up taglib so it should have been discarded
        var fooTag = lookup.getTag('duplicate-foo');
        expect(fooTag == null).to.equal(true);
    });

});
