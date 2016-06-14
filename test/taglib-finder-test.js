'use strict';
require('./patch-module');

var chai = require('chai');
chai.config.includeStack = true;
require('chai').should();

var nodePath = require('path');
require('../compiler');
var autotest = require('./autotest');

var taglibFinder = require('../compiler/taglib-finder');


describe('taglib-finder' , function() {
    var autoTestDir = nodePath.join(__dirname, 'autotests/taglib-finder');

    autotest.scanDir(autoTestDir, function run(dir, helpers, done) {
            taglibFinder.excludeDir(nodePath.join(autoTestDir, 'excluded-dir/a/b-excluded'));
            taglibFinder.excludePackage('excluded-dependency');

            var test = require(nodePath.join(dir, 'test.js'));
            var finderDir = nodePath.join(dir, test.dir);
            var found = taglibFinder.find(finderDir, [])
                .map((taglib) => {
                    if (taglib.path.startsWith(dir)) {
                        return taglib.path.substring(dir.length).replace(/[\\]/g, '/');
                    } else {
                        return 'BAD:' + taglib.path;
                    }
                });

            helpers.compare(found, '.json');
            return done();
        });
});
