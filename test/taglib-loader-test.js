'use strict';
require('./patch-module');

var chai = require('chai');
chai.Assertion.includeStack = true;
require('chai').should();
var expect = require('chai').expect;
var nodePath = require('path');

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
        var taglibLoader = require('../compiler/taglibs').loader;
        var taglib = taglibLoader.load(nodePath.join(__dirname, 'fixtures/taglib-shorthand/marko-taglib.json'));
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


});
