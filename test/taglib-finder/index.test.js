'use strict';

require('../__util__/test-init');

var chai = require('chai');
chai.config.includeStack = true;
require('chai').should();

var nodePath = require('path');
require('marko/compiler');
var autotest = require('../autotest');

var taglibFinder = require('marko/compiler/taglib-finder');

describe('taglib-finder', function () {
    var autoTestDir = nodePath.join(__dirname, './fixtures');

    autotest.scanDir(autoTestDir, function run(dir, helpers, done) {
        var test = require(nodePath.join(dir, 'test.js'));

        if (test.check) {
            test.check(taglibFinder, helpers);
        } else {
            if (test.before) {
                test.before(taglibFinder);
            }

            var finderDir = nodePath.join(dir, test.dir);
            var found = taglibFinder.find(finderDir, []).map(taglib => {
                if (taglib.path.startsWith(dir)) {
                    return taglib.path.substring(dir.length).replace(/[\\]/g, '/');
                } else {
                    return 'BAD:' + taglib.path;
                }
            });

            helpers.compare(found, '.json');

            if (test.after) {
                test.after(taglibFinder);
            }
        }

        return done();
    });
});