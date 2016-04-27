'use strict';
require('./patch-module');

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
            let inputPath = path.join(dir, 'input.txt');
            let input = fs.readFileSync(inputPath, {encoding: 'utf8'});
            try {
                let parsed = parseFor(input);
                return parsed;
            } catch(e) {
                if (e.code === 'INVALID_FOR') {
                    return {
                        error: e.message
                    };
                } else {
                    throw e;
                }

            }
        },
        {
            deepEqual: true,
            compareExtension: '.json'
        });
});
