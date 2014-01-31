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
    
});

