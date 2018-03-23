"use strict";

require("../__util__/test-init");

const chai = require("chai");
chai.config.includeStack = true;
const autotest = require("../autotest");
const runRenderTest = require("../__util__/runRenderTest");

autotest("fixtures", {
    html: testRunner,
    vdom: testRunner
});

autotest("fixtures-deprecated", {
    html: testRunner,
    vdom: testRunner
});

autotest("fixtures-async", {
    html: testRunnerAsync,
    vdom: testRunnerAsync
});

autotest("fixtures-async-deprecated", {
    html: testRunnerAsync,
    vdom: testRunnerAsync
});

function testRunner(fixture) {
    let test = fixture.test;
    let dir = fixture.dir;
    let mode = fixture.mode;
    let snapshot = fixture.snapshot;
    test(done => {
        runRenderTest(dir, snapshot, done, { output: mode });
    });
}

function testRunnerAsync(fixture) {
    let test = fixture.test;
    let dir = fixture.dir;
    let mode = fixture.mode;
    let snapshot = fixture.snapshot;
    test(done => {
        runRenderTest(dir, snapshot, done, {
            output: mode,
            checkAsyncEvents: true
        });
    });
}
