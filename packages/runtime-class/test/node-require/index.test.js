"use strict";

require("../__util__/test-init");

const assert = require("assert/strict");
const fs = require("fs");
const os = require("os");
const path = require("path");

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

  it("checks what each compiler's templates read against disk once per run", async function () {
    const { taglib } = require("@marko/compiler");
    const translator = require.resolve("../../translator");
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "marko-node-require-"));
    const write = (rel, src) => {
      const file = path.join(dir, rel);
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, src);
    };
    // A package of its own, so nothing above the directory is read.
    write("app/package.json", '{ "name": "app" }');
    fs.symlinkSync(
      path.join(__dirname, "../../../../node_modules"),
      path.join(dir, "app/node_modules"),
    );
    // Other copies of the compiler, which templates beside them resolve: one
    // older than `revalidate`.
    write(
      "other/node_modules/@marko/compiler/index.js",
      "exports.checks = 0;\n" +
        "exports.taglib = { revalidate: () => exports.checks++ };\n" +
        "exports.compileFileSync = () => ({ code: '' });\n",
    );
    write(
      "old/node_modules/@marko/compiler/index.js",
      "exports.taglib = {};\n" +
        "exports.compileFileSync = () => ({ code: '' });\n",
    );
    const other = require(path.join(dir, "other/node_modules/@marko/compiler"));
    const requireObj = { extensions: {}, cache: {} };
    nodeRequire.install({
      require: requireObj,
      compilerOptions: { translator },
    });
    const load = (rel) => {
      let code;
      requireObj.extensions[".marko"](
        { _compile: (c) => (code = c) },
        path.join(dir, rel),
      );
      return code;
    };
    const lookup = () => taglib.buildLookup(path.join(dir, "app"), translator);
    const tick = () => new Promise((resolve) => setImmediate(resolve));
    write("app/a.marko", "<aside>a</aside>\n");
    write("other/b.marko", "");
    write("old/d.marko", "");
    // Read once the clock moves on from the writes, so none reads as changed.
    for (const now = Date.now(); Date.now() === now;);
    load("app/a.marko");
    load("other/b.marko");
    load("other/b.marko");
    load("old/d.marko");
    assert.equal(other.checks, 1);
    const before = lookup();
    await tick();
    // Nothing changed.
    load("app/a.marko");
    load("other/b.marko");
    assert.equal(lookup(), before);
    assert.equal(other.checks, 2);
    await tick();
    // A tag added, and a template never compiled required first.
    write("app/tags/aside.marko", "<span>custom</span>\n");
    write("app/c.marko", "<aside>c</aside>\n");
    assert.match(load("app/c.marko"), /aside\.marko/);
    assert.notEqual(lookup(), before);
    fs.rmSync(dir, { recursive: true });
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
