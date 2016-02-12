'use strict';
var chai = require('chai');
chai.config.includeStack = true;
require('chai').should();

var nodePath = require('path');
require('../compiler');
var autotest = require('./autotest');

var taglibFinder = require('../compiler/taglib-finder');


describe('taglib-finder' , function() {
    var autoTestDir = nodePath.join(__dirname, 'fixtures/taglib-finder/autotest');

    autotest.scanDir(autoTestDir, function run(dir) {
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
            return found;
        },
        {
            deepEqual: true,
            compareExtension: '.json'
        });
});
