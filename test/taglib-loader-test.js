'use strict';
var chai = require('chai');
chai.config.includeStack = true;
require('chai').should();
var expect = require('chai').expect;
var nodePath = require('path');
var taglibLoader = require('../compiler').taglibLoader;

describe('taglib-loader' , function() {

    beforeEach(function(done) {
        for (var k in require.cache) {
            if (require.cache.hasOwnProperty(k)) {
                delete require.cache[k];
            }
        }

        done();
    });

    it('should load a taglib with shorthand attributes and tags', function() {
        var taglib = taglibLoader.load(nodePath.join(__dirname, 'fixtures/taglib-shorthand/marko.json'));
        expect(taglib != null).to.equal(true);

        var shorthandCheckbox = taglib.tags['shorthand-checkbox'];
        expect(shorthandCheckbox.attributes.checked.type).to.equal('boolean');
        expect(shorthandCheckbox.attributes.label.type).to.equal('string');
        expect(shorthandCheckbox.nestedTags.label.type).to.equal('string');
        expect(shorthandCheckbox.nestedTags.checked.type).to.equal('boolean');

        var shorthandTabsTag = taglib.tags['shorthand-tabs'];
        expect(shorthandTabsTag.attributes.orientation != null).to.equal(true);
        expect(shorthandTabsTag.attributes.orientation.type).to.equal('string');
        expect(shorthandTabsTag.attributes.tabs.type).to.equal('expression');

        var nestedTabTag = shorthandTabsTag.nestedTags.tab;
        expect(nestedTabTag.attributes.label != null).to.equal(true);
        expect(nestedTabTag.isRepeated).to.equal(true);
        expect(nestedTabTag.targetProperty).to.equal('tabs');
    });

    it('should load a taglib with index.* or render.* extension', function() {
        var taglib = taglibLoader.load(nodePath.join(__dirname, 'fixtures/marko.json'));

        expect(taglib).to.not.be.null;
        expect(taglib).to.have.deep.property("tags.test-declared-attributes.renderer").to.have.string('renderer.js');
    });


});
