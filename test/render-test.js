'use strict';
require('../node-require').install();

var chai = require('chai');
chai.Assertion.includeStack = true;
require('chai').should();
// var expect = require('chai').expect;

require('./util').loadRenderTests(
    'fixtures/templates',
    'render',
    {
        ext: '.marko'
    });