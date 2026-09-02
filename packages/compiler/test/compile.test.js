import assert from "assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import {
  compile,
  compileFile,
  compileFileSync,
  compileSync,
  getRuntimeEntryFiles,
  getRuntimeVersion,
} from "@marko/compiler";
import * as translator from "@marko/runtime-tags/translator";

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

  describe("output", () => {
    it("rejects an unrecognized value instead of falling through to dom", () =>
      assert.throws(
        () => compileSync("<div>hi</div>", template, { output: "HTML" }),
        /Invalid Marko compiler option "output": "HTML"\. Expected one of: html, dom, source, migrate, hydrate\./,
      ));
  });

  describe("template id", () => {
    it("keeps paths with unusual characters distinct", () => {
      const dir = fs.mkdtempSync(path.join(os.tmpdir(), "marko-id-"));
      fs.mkdirSync(path.join(dir, "foo"));
      fs.writeFileSync(path.join(dir, "foo+bar.marko"), "<div>a</div>");
      fs.writeFileSync(path.join(dir, "foo", "bar.marko"), "<div>b</div>");
      const ids = ["foo+bar.marko", path.join("foo", "bar.marko")].map(
        (f) => compileFileSync(path.join(dir, f), { output: "html" }).meta.id,
      );
      assert.notEqual(ids[0], ids[1]);
    });

    it("keeps benign punctuation literal and encodes the rest", () => {
      const dir = fs.mkdtempSync(path.join(os.tmpdir(), "marko-id-"));
      fs.writeFileSync(path.join(dir, "+(x).marko"), "<div>a</div>");
      fs.writeFileSync(path.join(dir, "a b.marko"), "<div>b</div>");
      assert.match(
        compileFileSync(path.join(dir, "+(x).marko"), { output: "html" }).meta
          .id,
        /\+\(x\)\.marko$/,
      );
      assert.match(
        compileFileSync(path.join(dir, "a b.marko"), { output: "html" }).meta
          .id,
        /a%20b\.marko$/,
      );
    });
  });

  // Analyze-phase mistakes are recorded as diagnostics rather than thrown, so
  // one compile can report several; the fixture harness only ever reads
  // `.message`, so nothing else exercises how the aggregate serializes.
  describe("aggregate errors", () => {
    const failing = (src) => {
      try {
        compileSync(src, "test.marko", { translator, code: false });
      } catch (err) {
        return err;
      }
      assert.fail("expected a compile error");
    };

    it("throws the error itself when there is only one", () => {
      const err = failing("<if>a</if>");
      assert.equal(err.name, "CompileError");
      assert.equal(err.errors, undefined);
    });

    it("collects several into one CompileErrors", () => {
      const err = failing("<if>a</if>\n<if>b</if>");
      assert.equal(err.name, "CompileErrors");
      assert.equal(err.errors.length, 2);
    });

    it("names itself and strips ansi when stringified", () => {
      const text = String(failing("<if>a</if>\n<if>b</if>"));
      assert.ok(text.startsWith("CompileErrors: "), text);
      assert.doesNotMatch(text, /\u001b\[/, "expected no ansi escapes");
      assert.match(text, /test\.marko:1/);
      assert.match(text, /test\.marko:2/);
    });

    it("serializes to the text a bundler would log", () => {
      const err = failing("<if>a</if>\n<if>b</if>");
      assert.equal(err.toJSON(), String(err));
      assert.equal(JSON.parse(JSON.stringify({ err })).err, String(err));
    });
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

  describe("cache", () => {
    // Analysis reads through child templates, so an edit below the compiled
    // file has to invalidate it even though its own content is unchanged.
    const STATEFUL = `<let/x=1/>\n<button onClick() { x++ }>bump</button>\n<return=x/>\n`;

    let dir;
    beforeEach(() => {
      dir = fs.mkdtempSync(path.join(os.tmpdir(), "marko-cache-"));
      fs.mkdirSync(path.join(dir, "tags"));
      fs.writeFileSync(
        path.join(dir, "template.marko"),
        `<my-child/x/>\n<div>\${x}</div>\n`,
      );
    });
    afterEach(() => fs.rmSync(dir, { recursive: true, force: true }));

    const writeTag = (name, src) => {
      const file = path.join(dir, "tags", `${name}.marko`);
      fs.writeFileSync(file, src);
      // Pin the mtime ahead so invalidation does not race the clock's resolution.
      const ahead = new Date(Date.now() + 1000);
      fs.utimesSync(file, ahead, ahead);
    };

    const compileParent = (cache) =>
      compileFileSync(path.join(dir, "template.marko"), {
        cache,
        output: "dom",
        writeVersionComment: false,
      }).code;

    it("invalidates when an analyzed child changes", () => {
      writeTag("my-child", `<return=1/>\n`);
      const cache = new Map();
      assert.doesNotMatch(compileParent(cache), /_var_resume/);

      writeTag("my-child", STATEFUL);
      assert.match(compileParent(cache), /_var_resume/);
    });

    it("invalidates when a transitively analyzed template changes", () => {
      writeTag("my-child", `<my-grandchild/y/>\n<return=y/>\n`);
      writeTag("my-grandchild", `<return=1/>\n`);
      const cache = new Map();
      assert.doesNotMatch(compileParent(cache), /_var_resume/);

      writeTag("my-grandchild", STATEFUL);
      assert.match(compileParent(cache), /_var_resume/);
    });
  });

  it("keeps the compile error when compiling asynchronously", () =>
    assert.rejects(
      () => compile("<div", template),
      /EOF reached while parsing/,
    ));
});
