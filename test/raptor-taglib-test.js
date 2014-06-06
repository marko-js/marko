'use strict';
var chai = require('chai');
chai.Assertion.includeStack = true;
require('chai').should();
var expect = require('chai').expect;
var nodePath = require('path');

describe('raptor-taglibs/taglib-lookup' , function() {

    beforeEach(function(done) {
        for (var k in require.cache) {
            if (require.cache.hasOwnProperty(k)) {
                delete require.cache[k];
            }
        }

        done();
    });

    it('should lookup core attributes for top-level template', function() {
        var taglibLookup = require('../compiler').taglibs.lookup;
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project'));
        // console.log('LOOKUP: ', Object.keys(lookup.attributes));
        var ifAttr = lookup.getAttribute('div', 'c-if');
        expect(ifAttr != null).to.equal(true);
        expect(ifAttr.type).to.equal('expression');
    });

    it('should lookup core tag for top-level template', function() {
        var taglibLookup = require('../compiler').taglibs.lookup;
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project'));
        var ifTag = lookup.getTag('c-if');
        expect(ifTag != null).to.equal(true);
        expect(ifTag.name).to.equal('c-if');
    });

    it('should lookup core template for top-level template', function() {
        var taglibLookup = require('../compiler').taglibs.lookup;
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project'));
        // console.log(Object.keys(lookup.tags));
        var templateTag = lookup.getTag('c-template');
        expect(templateTag != null).to.equal(true);
        expect(templateTag.name).to.equal('c-template');
    });

    it('should lookup custom tag for top-level template', function() {
        var taglibLookup = require('../compiler').taglibs.lookup;
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project'));
        var tag = lookup.getTag('test-hello');
        // console.log(Object.keys(lookup.tags));
        expect(tag != null).to.equal(true);
        expect(tag.name).to.equal('test-hello');
    });

    it('should lookup custom attributes for top-level template', function() {
        var taglibLookup = require('../compiler').taglibs.lookup;
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project'));
        // console.log(Object.keys(lookup.attributes));
        var attr = lookup.getAttribute('test-hello', 'name');
        expect(attr != null).to.equal(true);
        expect(attr.type).to.equal('string');

        var attr2 = lookup.getAttribute('test-hello', 'splat');
        expect(attr2 != null).to.equal(true);
        expect(attr2.type).to.equal('number');

        attr = lookup.getAttribute('test-hello', 'expr');
        expect(attr != null).to.equal(true);
        expect(attr.type).to.equal('expression');
    });

    it('should allow for dynamic attributes', function() {
        var taglibLookup = require('../compiler').taglibs.lookup;
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project'));
        // console.log(Object.keys(lookup.attributes));
        var attr = lookup.getAttribute('test-hello', 'DYNAMIC');
        expect(attr != null).to.equal(true);
        expect(attr.type).to.equal('number');
    });

    it('should lookup global attributes correctly', function() {
        var taglibLookup = require('../compiler').taglibs.lookup;
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project'));
        // console.log('LOOKUP: ', Object.keys(lookup.attributes));
        var attrDef = lookup.getAttribute('test-dynamic-attributes', 'global-attribute');
        expect(attrDef != null).to.equal(true);
        expect(attrDef.type).to.equal('boolean');
    });

    it('should cache a lookup', function() {
        var taglibLookup = require('../compiler').taglibs.lookup;
        var lookup1 = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project'));
        var lookup2 = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project'));
        var lookup3 = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project/empty'));
        var lookup4 = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project/nested'));
        expect(lookup1).to.equal(lookup2);
        expect(lookup2).to.equal(lookup3);
        expect(lookup1).to.not.equal(lookup4);
    });

    it('should lookup nested tags', function() {
        var taglibLookup = require('../compiler').taglibs.lookup;
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project/nested'));
        var tag = lookup.getTag('nested-foo');
        
        expect(tag != null).to.equal(true);
        expect(tag.name).to.equal('nested-foo');
    });

    it('should lookup attributes for nested tags', function() {
        var taglibLookup = require('../compiler').taglibs.lookup;
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project/nested'));
        // console.log(Object.keys(lookup.attributes));
        var attr = lookup.getAttribute('nested-foo', 'attr1');
        expect(attr != null).to.equal(true);
        expect(attr.type).to.equal('string');
    });

    it('should lookup tag transformers correctly for un-namespaced tags', function() {
        var transformers = [];

        var taglibLookup = require('../compiler').taglibs.lookup;
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project/nested'));

        lookup.forEachTagTransformer('div', function(transformer) {
            transformers.push(transformer);
        });

        expect(transformers.length).to.equal(2);
    });

    it('should lookup tag transformers correctly for namespaced tag with transformer', function() {
        var transformers;

        var taglibLookup = require('../compiler').taglibs.lookup;
        var lookup;
        // lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project/nested'));

        // transformers = [];
        // lookup.forEachTagTransformer('nested-foo', function(transformer) {
        //     transformers.push(transformer);
        // });

        // expect(transformers.length).to.equal(2);

        lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project/transformers'));

        transformers = [];
        lookup.forEachTagTransformer('transform-foo', function(transformer) {
            transformers.push(transformer);
        });

        expect(transformers.length).to.equal(3);
        expect(transformers[0].path.indexOf('foo')).to.not.equal(-1);
        expect(transformers[1].path.indexOf('core-tag-transformer')).to.not.equal(-1);
        expect(transformers[2].path.indexOf('html-tag-transformer')).to.not.equal(-1);
        
        transformers = [];
        lookup.forEachTagTransformer('transform-bar', function(transformer) {
            transformers.push(transformer);
        });
        
        expect(transformers.length).to.equal(3);
        expect(transformers[0].path.indexOf('core-tag-transformer')).to.not.equal(-1);
        expect(transformers[1].path.indexOf('bar')).to.not.equal(-1);
        expect(transformers[2].path.indexOf('html-tag-transformer')).to.not.equal(-1);
    });

    it('should lookup tag transformers core tag with custom node', function() {
        var transformers = [];

        var taglibLookup = require('../compiler').taglibs.lookup;
        var lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'test-project/nested'));

        lookup.forEachTagTransformer('c-else', function(transformer) {
            transformers.push(transformer);
        });

        expect(transformers.length).to.equal(3);
        expect(transformers[0].path.indexOf('core-tag-transformer')).to.not.equal(-1);
        expect(transformers[1].path.indexOf('else-tag-transformer')).to.not.equal(-1);
        expect(transformers[2].path.indexOf('html-tag-transformer')).to.not.equal(-1);
    });
    
});

