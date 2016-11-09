'use strict';

const chai = require('chai');
chai.Assertion.includeStack = true;
require('chai').should();
const expect = require('chai').expect;
const consolidateExtensions = require('../util/consolidateExtensions');

function testConsolidated(options) {
    let extension = options.extension;
    let extensions = options.extensions;
    let markoExtensionFn = options.markoExtensionFn;
    let expected = options.expected;

    let requireObj = {
        extensions: {}
    };

    consolidateExtensions(extension, extensions, requireObj, markoExtensionFn);
    expect(requireObj.extensions).to.deep.equal(expected);
}

describe('node-require' , function() {

    it('should consolidate using both extension and extensions', function() {
        let markoExtensionFn = () => {};

        testConsolidated({
            extension: '.marko.xml',
            extensions: ['.marko', '.html'],
            markoExtensionFn,
            expected: {
                '.marko.xml': markoExtensionFn,
                '.marko': markoExtensionFn,
                '.html': markoExtensionFn,
            }
        });
    });

    it('should consolidate using only extensions', function() {
        let markoExtensionFn = () => {};

        testConsolidated({
            extensions: ['.marko', '.html'],
            markoExtensionFn,
            expected: {
                '.marko': markoExtensionFn,
                '.html': markoExtensionFn,
            }
        });
    });

    it('should consolidate using only extension', function() {
        let markoExtensionFn = () => {};

        testConsolidated({
            extension: '.marko.xml',
            markoExtensionFn,
            expected: {
                '.marko.xml': markoExtensionFn
            }
        });
    });

    it('should consolidate using extension and empty array of extensions', function() {
        let markoExtensionFn = () => {};

        testConsolidated({
            extension: '.marko.xml',
            extensions: [],
            markoExtensionFn,
            expected: {
                '.marko.xml': markoExtensionFn
            }
        });
    });

    it('should consolidate with .marko when neither extension or extensions provided', function() {
        let markoExtensionFn = () => {};

        testConsolidated({
            markoExtensionFn,
            expected: {
                '.marko': markoExtensionFn
            }
        });
    });

    it('should insert missing period into extensions', function() {
        let markoExtensionFn = () => {};

        testConsolidated({
            extension: 'marko.xml',
            extensions: ['html'],
            markoExtensionFn,
            expected: {
                '.marko.xml': markoExtensionFn,
                '.html': markoExtensionFn
            }
        });
    });
});
