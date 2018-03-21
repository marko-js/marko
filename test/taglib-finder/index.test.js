"use strict";

require("../__util__/test-init");

var chai = require("chai");
chai.config.includeStack = true;
require("chai").should();
require("marko/compiler");
var autotest = require("../autotest");

var taglibFinder = require("marko/compiler/taglib-finder");

autotest("fixtures", ({ test, dir, resolve, snapshot }) => {
    test(() => {
        var test = require(resolve("test.js"));

        if (test.check) {
            test.check(taglibFinder, { compare: snapshot });
        } else {
            if (test.before) {
                test.before(taglibFinder);
            }

            var finderDir = resolve(test.dir);
            var found = taglibFinder.find(finderDir, []).map(taglib => {
                if (taglib.path.startsWith(dir)) {
                    return taglib.path
                        .substring(dir.length)
                        .replace(/[\\]/g, "/");
                } else {
                    return "BAD:" + taglib.path;
                }
            });

            snapshot(found, ".json");

            if (test.after) {
                test.after(taglibFinder);
            }
        }
    });
});
