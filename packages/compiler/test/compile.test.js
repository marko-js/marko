import assert from "assert/strict";
import fs from "node:fs";
import path from "node:path";

import {
  compile,
  compileFile,
  compileFileSync,
  getRuntimeEntryFiles,
  getRuntimeVersion,
} from "@marko/compiler";

const template = path.join(
  import.meta.dirname,
  "fixtures",
  "register",
  "template.marko",
);

// Enough of an fs to read one template, standing in for the virtual one a
// bundler hands over.
const fromMemory = (src) => ({
  ...fs,
  readFile: (_file, _encoding, cb) => cb(null, src),
  readFileSync: () => src,
});

describe("compiler/compile", () => {
  describe("compileFile", () => {
    it("reads with the default file system when given no config", async () => {
      const { code } = await compileFile(template);
      assert.ok(code.length);
    });

    it("reads through a file system from the config", async () => {
      const { code } = await compileFile(template, {
        fileSystem: fromMemory("<div>from config</div>"),
      });
      assert.match(code, /from config/);
    });

    it("rejects when the file cannot be read", () =>
      assert.rejects(() => compileFile(template + ".missing"), {
        code: "ENOENT",
      }));
  });

  describe("compileFileSync", () => {
    it("reads with the default file system when given no config", () =>
      assert.ok(compileFileSync(template).code.length));

    it("reads through a file system from the config", () =>
      assert.match(
        compileFileSync(template, {
          fileSystem: fromMemory("<div>from config</div>"),
        }).code,
        /from config/,
      ));
  });

  describe("getRuntimeEntryFiles", () => {
    it("asks the translator", () =>
      assert.ok(getRuntimeEntryFiles("html").length));

    it("is empty for a translator that offers none", () =>
      assert.deepEqual(getRuntimeEntryFiles("html", {}), []));
  });

  describe("getRuntimeVersion", () => {
    it("reports the translator's version", () =>
      assert.match(getRuntimeVersion(), /^\d+\.\d+\.\d+/));

    it("falls back for a translator that has no version", () =>
      assert.equal(getRuntimeVersion({}), "0.0.0"));
  });

  it("caches analysis separately for a persisted compile", async () => {
    const cache = new Map();
    await compileFile(template, { cache });
    await compileFile(template, { cache, persisted: true });
    const [compiled] = cache.values();
    assert.equal(compiled.size, 2);
  });

  it("keeps the compile error when compiling asynchronously", () =>
    assert.rejects(
      () => compile("<div", template),
      /EOF reached while parsing/,
    ));
});
