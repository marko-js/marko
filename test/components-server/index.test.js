require("../__util__/test-init");

var path = require("path");
var autotest = require("../autotest");
var compiler = require("../../compiler");
var TEST_NAME = path.basename(__dirname);

describe(TEST_NAME, function() {
    before(function() {
        compiler.configure({ output: "html", assumeUpToDate: false });
    });

    autotest.scanDir(path.join(__dirname, "./fixtures"), run);
});

function run(dir, helpers, done) {
    var testFunc = require(path.join(dir, "test.js"));
    if (testFunc.length <= 1) {
        testFunc(helpers);
        done();
    } else {
        testFunc(helpers, done);
    }
}
