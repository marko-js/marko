"use strict";

require("../__util__/test-init");

const loadExpressTests = require("./fixtures/loadExpressTests.js");

describe("express-4", function() {
    this.timeout(15000);

    loadExpressTests("express-4");
});

describe("express-5", function() {
    this.timeout(10000);

    loadExpressTests("express-5");
});
