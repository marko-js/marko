"use strict";

const fs = require("fs");
const path = require("path");
const assert = require("assert");
const callerpath = require("caller-path");
const projectRoot = path.join(__dirname, "..");
const updateExpectations = process.env.hasOwnProperty("UPDATE_EXPECTATIONS");
const formatters = {};

module.exports = function autotest(fixturesName, run) {
    const suiteDirectory = path.dirname(callerpath());
    const suiteName = path.basename(suiteDirectory);
    const fixturesDirectory = path.join(suiteDirectory, fixturesName);

    describe(path.join(suiteName, fixturesName), () => {
        let modes = [];

        if (typeof run === "function") {
            modes.push({ name: "", run });
        } else {
            Object.keys(run).forEach(modeName =>
                modes.push({
                    name: modeName,
                    run: run[modeName]
                })
            );
        }

        fs.readdirSync(fixturesDirectory).forEach(fixtureName => {
            let fixtureDirectory = path.join(fixturesDirectory, fixtureName);
            let context = {};
            if (fixtureName[0] === "~") {
                // skip the fixture directory
            } else if (modes.length > 1) {
                describe(fixtureName, function() {
                    modes.forEach(mode => {
                        runFixtureTest(
                            mode.name,
                            fixtureDirectory,
                            mode.run,
                            mode.name,
                            context
                        );
                    });
                });
            } else {
                runFixtureTest(fixtureName, fixtureDirectory, modes[0].run);
            }
        });
    });
};

function runFixtureTest(fixtureName, fixtureDirectory, run, mode, context) {
    const filePathFromFixture = file => path.join(fixtureDirectory, file);
    const testPath = filePathFromFixture("test.js");
    const hasTestFile = fs.existsSync(testPath);
    let mochaTestFunction = it;
    let mochaDetails;

    if (hasTestFile) {
        const test = require(testPath);
        const skip = test.skip || test["skip_" + mode];
        const fails = test.fails || test["fails_" + mode];
        if (skip) {
            mochaTestFunction = it.skip;
            mochaDetails = skip;
        } else if (fails) {
            mochaTestFunction = it.fails;
            mochaDetails = fails;
        }
    }

    const snapshot = (actual, options) => {
        let name = (options && options.name) || "";
        let ext =
            typeof options === "string"
                ? options
                : (options && options.ext) || ".html";
        let format = (options && options.format) || formatters[ext];
        return compareHelper(fixtureDirectory, actual, name, ext, format);
    };

    const runMochaTest = fn => {
        const test = mochaTestFunction(fixtureName, fn);
        test.details = mochaDetails;
        test.file = testPath;
        return test;
    };

    const skipMochaTest = reason => {
        const test = it.skip(fixtureName);
        test.details = reason;
        test.file = testPath;
        return test;
    };

    run({
        resolve: filePathFromFixture,
        test: runMochaTest,
        skip: skipMochaTest,
        dir: fixtureDirectory,
        snapshot,
        mode,
        context
    });
}

function compareHelper(dir, actual, name, ext, format) {
    var prefix = name ? name + "-" : "";
    var actualPath = path.join(dir, prefix + "actual" + ext);
    var expectedPath = path.join(dir, prefix + "expected" + ext);

    actual = normalize(actual);
    format = format || (contents => contents);

    var isObject = typeof actual === "string" ? false : true;
    var actualString = isObject ? JSON.stringify(actual, null, 4) : actual;
    fs.writeFileSync(actualPath, actualString, { encoding: "utf8" });

    var expectedString;

    try {
        expectedString = fs.readFileSync(expectedPath, { encoding: "utf8" });
    } catch (e) {
        expectedString = isObject ? '"TBD"' : "TBD";
        fs.writeFileSync(expectedPath, expectedString, { encoding: "utf8" });
    }

    actual = isObject
        ? JSON.parse(actualString)
        : actualString.replace(/\r?\n$/, "");

    if (typeof actual === "string") {
        actual = replaceAll(actual, projectRoot, "PROJECT_ROOT");
    }

    var expected = isObject
        ? JSON.parse(expectedString)
        : expectedString.replace(/\r?\n$/, "");
    var formattedActual = format(actual);
    var formattedExpected = format(expected);
    try {
        assert.deepEqual(formattedActual, formattedExpected);
    } catch (e) {
        if (updateExpectations) {
            fs.writeFileSync(expectedPath, actualString, { encoding: "utf8" });
        } else {
            throw e;
        }
    }
}

function normalize(str) {
    if (typeof str === "string") {
        return replaceAll(str, projectRoot, "PROJECT_ROOT");
    }
    return str;
}

function replaceAll(str, substr, replacement) {
    return str.split(substr).join(replacement);
}
