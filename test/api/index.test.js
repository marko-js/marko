'use strict';

require('../__util__/test-init');
require('marko/node-require').install();
require('require-self-ref');

var chai = require('chai');
chai.config.includeStack = true;

var expect = require('chai').expect;
var nodePath = require('path');
require('../../compiler');
var autotest = require('../autotest');
var marko = require('../../');
var markoCompiler = require('../../compiler');

describe('api', function () {
    autotest.scanDir(nodePath.join(__dirname, './fixtures'), function run(dir, helpers, done) {
        var test = require(nodePath.join(dir, 'test.js'));
        test.check(marko, markoCompiler, expect, helpers, done);
    });

    describe('deprecated', function () {
        autotest.scanDir(nodePath.join(__dirname, './fixtures-deprecated'), function run(dir, helpers, done) {
            var test = require(nodePath.join(dir, 'test.js'));
            test.check(marko, markoCompiler, expect, done);
        });
    })
});

