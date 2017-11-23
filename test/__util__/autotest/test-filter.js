var enabledTest = process.env.TEST;

var enabledTestNames = enabledTest && enabledTest.split(/[\s*,\s*/]/);
var enabledTests = null;

if (enabledTestNames && enabledTestNames.length) {
    enabledTests = {};
    enabledTestNames.forEach(function (testName) {
        enabledTests[testName] = true;
    });
}

exports.isOnlyTest = function (testName) {
    return enabledTestNames ? enabledTests.hasOwnProperty(testName) : false;
};

exports.isTestEnabled = function (testName) {
    return enabledTestNames ? enabledTests.hasOwnProperty(testName) : true;
};