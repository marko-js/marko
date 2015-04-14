'use strict';
var chai = require('chai');
chai.Assertion.includeStack = true;
require('chai').should();
// var expect = require('chai').expect;

require('./util').loadRenderTests(
    'fixtures/async-templates',
    'async render',
    {
        ext: '.marko'
    });