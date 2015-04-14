'use strict';
var chai = require('chai');
chai.Assertion.includeStack = true;
require('chai').should();
// var expect = require('chai').expect;

require('./util').loadRenderTests(
    'fixtures/xml-templates',
    'render marko.xml',
    {
        ext: '.marko.xml'
    });