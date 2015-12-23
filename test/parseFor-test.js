'use strict';
var chai = require('chai');
chai.config.includeStack = true;
var parseFor = require('../taglibs/core/util/parseFor.js');
var autotest = require('./autotest');
var fs = require('fs');
var path = require('path');

describe('parseFor' , function() {

    var autoTestDir = path.join(__dirname, 'fixtures/parseFor/autotest');

    autotest.scanDir(
        autoTestDir,
        function run(dir) {
            var inputPath = path.join(dir, 'input.txt');
            var input = fs.readFileSync(inputPath, {encoding: 'utf8'});
            var parsed = parseFor(input);
            return parsed;
        },
        {
            deepEqual: true,
            compareExtension: '.json'
        });
});
