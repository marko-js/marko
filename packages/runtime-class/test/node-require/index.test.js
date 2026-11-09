"use strict";

require("../__util__/test-init");

const assert = require("assert/strict");

var nodeRequire = require("../../node-require");

function testNodeRequireInstall(options, expected) {
  let requireObj = {
    extensions: {},
  };

  options.require = requireObj;

  nodeRequire.install(options);

  for (let i = 0; i < expected.length; i++) {
    let ext = expected[i];
    assert.equal(typeof requireObj.extensions[ext], "function");
  }

  expected.sort();

  var actualKeys = Object.keys(requireObj.extensions).sort();
  assert.deepEqual(expected, actualKeys);
}

describe("node-require", function () {
  it("should consolidate using both extension and extensions", function () {
    testNodeRequireInstall(
      {
        extension: ".marko.xml",
        extensions: [".marko", ".html"],
      },
      [".marko.xml", ".marko", ".html"],
    );
  });

  it("should consolidate using only extensions", function () {
    testNodeRequireInstall(
      {
        extensions: [".marko", ".html"],
      },
      [".marko", ".html"],
    );
  });

  it("should consolidate using only extension", function () {
    testNodeRequireInstall(
      {
        extension: ".marko.xml",
      },
      [".marko.xml"],
    );
  });

  it("should consolidate using extension and empty array of extensions", function () {
    testNodeRequireInstall(
      {
        extension: ".marko.xml",
        extensions: [],
      },
      [".marko.xml"],
    );
  });

  it("should consolidate with .marko when neither extension or extensions provided", function () {
    testNodeRequireInstall({}, [".marko"]);
  });

  it("should insert missing period into extensions", function () {
    testNodeRequireInstall(
      {
        extension: "marko.xml",
        extensions: ["html"],
      },
      [".marko.xml", ".html"],
    );
  });
});
