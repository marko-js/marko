'use strict';
require('./util/patch-module');

var chai = require('chai');
chai.config.includeStack = true;
var parseFor = require('../taglibs/core/util/parseFor.js');
var autotest = require('./autotest');
var fs = require('fs');
var path = require('path');

describe('parseFor' , function() {

    var autoTestDir = path.join(__dirname, 'autotests/parseFor');

    autotest.scanDir(
        autoTestDir,
        function run(dir, helpers, done) {
            let inputPath = path.join(dir, 'input.txt');
            let input = fs.readFileSync(inputPath, {encoding: 'utf8'});

            try {
                let parsed = parseFor(input);
                helpers.compare(parsed, '.json');
                return done();
            } catch(e) {
                if (e.code === 'INVALID_FOR') {
                    helpers.compare({
                        error: e.message
                    }, '.json');
                    return done();
                } else {
                    throw e;
                }

            }
        });
});
