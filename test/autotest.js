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

function runFixtureTest(name, dir, run, mode, context) {
    const resolve = file => path.join(dir, file);
    const mainPath = resolve("test.js");
    const hasMainFile = fs.existsSync(mainPath);
    let mochaTestFunction = it;
    let mochaDetails;

    if (hasMainFile) {
        const main = require(mainPath);
        const skip = main.skip || main["skip_" + mode];
        const fails =
            main.fails ||
            main["fails_" + mode] ||
            (dir.includes("deprecated") &&
                process.env.EXPECT_DEPRECATED_FAILURES &&
                "this is deprecated");
        if (skip) {
            mochaTestFunction = it.skip;
            mochaDetails = skip;
        } else if (fails) {
            mochaTestFunction = it.fails;
            mochaDetails = fails;
        }
    }

    const snapshot = (actual, opts) => {
        let prefix = opts && opts.name ? opts.name + "-" : "";
        let ext =
            typeof opts === "string" ? opts : (opts && opts.ext) || ".html";
        let actualPath = resolve(prefix + "actual" + ext);
        let expectedPath = resolve(prefix + "expected" + ext);
        let format = (opts && opts.format) || formatters[ext];
        let isObject = typeof actual === "string" ? false : true;
        let actualString = isObject ? JSON.stringify(actual, null, 4) : actual;
        let expectedString = loadExpected(expectedPath, isObject);
        let expected;

        fs.writeFileSync(actualPath, actualString, { encoding: "utf8" });

        actual = normalize(actualString, isObject, format);
        expected = normalize(expectedString, isObject, format);

        try {
            assert.deepEqual(actual, expected);
        } catch (e) {
            if (updateExpectations) {
                fs.writeFileSync(expectedPath, actualString, {
                    encoding: "utf8"
                });
            } else {
                e.stack = e.stack.slice(
                    e.stack.indexOf("\n", e.stack.indexOf("\n") + 1) + 1
                );
                e.message = `SnapshotError: ${path.relative(
                    process.cwd(),
                    actualPath
                )}`;
                throw e;
            }
        }
    };

    const test = fn => {
        const test = mochaTestFunction(name, fn);
        test.details = mochaDetails;
        test.file = mainPath;
        return test;
    };

    const skip = reason => {
        const test = it.skip(name);
        test.details = reason;
        test.file = mainPath;
        return test;
    };

    run({
        resolve,
        test,
        skip,
        dir,
        snapshot,
        mode,
        context
    });
}

function loadExpected(expectedPath, isObject) {
    try {
        return fs.readFileSync(expectedPath, { encoding: "utf8" });
    } catch (e) {
        let expected = `${path.basename(expectedPath)} does not exist`;
        return isObject ? JSON.stringify(expected) : expected;
    }
}

function normalize(content, isObject, format) {
    if (isObject) {
        content = JSON.parse(content);
    } else {
        content = replaceAll(content, projectRoot, "PROJECT_ROOT").replace(
            /\r?\n$/g,
            ""
        );
    }
    format = format || (content => content);
    return format(content);
}

function replaceAll(str, substr, replacement) {
    return str.split(substr).join(replacement);
}
