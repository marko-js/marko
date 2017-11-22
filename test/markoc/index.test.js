'use strict';

require('../__util__/test-init');
require('marko/node-require').install();

var chai = require('chai');
chai.config.includeStack = true;

var nodePath = require('path');
require('../../compiler');
var autotest = require('../autotest');
var markocPath = require.resolve('../../bin/markoc');
var childProcess = require('child_process');
var fs = require('fs');

describe('markoc', function () {
    var autoTestDir = nodePath.join(__dirname, './fixtures');

    autotest.scanDir(autoTestDir, function run(dir, helpers, done) {
        const testModule = require(nodePath.join(dir, 'test.js'));

        helpers.existsSync = function (filename) {
            return fs.existsSync(nodePath.join(dir, filename));
        };

        helpers.readSync = function (filename) {
            return fs.readFileSync(nodePath.join(dir, filename));
        };

        helpers.spawnSync = function (args, options) {
            options = options || {};
            if (!options.cwd) {
                options.cwd = dir;
            }
            return childProcess.spawnSync(markocPath, args, options);
        };

        helpers.spawnSync(['.', '--clean']);

        testModule.test(helpers);
        done();
    }, { timeout: 20000 });
});