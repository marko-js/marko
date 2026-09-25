import assert from "assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { stripVTControlCharacters } from "node:util";

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

const failing = (src) => {
  try {
    compileSync(src, "test.marko", { translator, code: false });
  } catch (err) {
    return err;
  }
  assert.fail("expected a compile error");
};

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

  describe("tag var ending in a line comment", () => {
    const src = '<div/el // the box\n  class="box"/>\n<p>${el}</p>';

    it("compiles", () =>
      assert.match(
        compileSync(src, template, { translator, output: "html" }).code,
        /box/,
      ));

    it("keeps the rest of the tag out of the comment in source output", () => {
      const code = compileSync(src, template, {
        translator,
        output: "source",
      }).code;
      assert.equal(
        code,
        '<div/el // the box\n  class="box"/>\n<p>\n  ${el}\n</p>',
      );
      compileSync(code, template, { translator, output: "html" });
    });
  });

  describe("comment-only bodies", () => {
    it("keeps their comments in source output", () => {
      const src =
        "static {\n  // setup\n}\n<script>\n  // todo\n</script>\n<button onClick() {\n  // todo\n}/>";
      assert.equal(
        compileSync(src, template, { translator, output: "source" }).code,
        src,
      );
    });

    it("keeps a method's directives in source output", () => {
      const src = '<button onClick() {\n  "use strict";\n\n  save();\n}/>';
      assert.equal(
        compileSync(src, template, { translator, output: "source" }).code,
        src,
      );
    });
  });

  describe("source output", () => {
    const print = (src, config) =>
      compileSync(src, template, { translator, output: "source", ...config })
        .code;

    it("strips a tag's type arguments and parameters with stripTypes", () =>
      assert.equal(
        print("<foo<string> <T>|x: T|>${x}</foo>\n<type-arg<string>/>", {
          stripTypes: true,
        }),
        "<foo|x|>\n  ${x}\n</foo>\n<type-arg/>",
      ));
  });

  describe("synthetic filenames", () => {
    const missingDir = path.join(os.tmpdir(), "marko-missing-dir", "x.marko");

    it("compiles a source whose directory does not exist", () =>
      assert.match(
        compileSync("<let/x=1><p>${x}</p>", missingDir, {
          translator,
          output: "html",
        }).code,
        /<p>/,
      ));

    it("compiles a class api source whose directory does not exist", () =>
      assert.match(
        compileSync(
          "class { onCreate() { this.state = { a: 1 } } }\n<div>${state.a}</div>",
          missingDir,
          { translator: "marko/translator", output: "html" },
        ).code,
        /<div>/,
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

  describe("code frame", () => {
    const long = "x".repeat(100_000);
    const frameLines = (err) => stripVTControlCharacters(err.frame).split("\n");

    it("windows a long line around the error and keeps the label", () => {
      const err = failing(`<div>${long}<if>a</if>${long}</div>`);
      assert.ok(err.message.length < 1_000, `${err.message.length} chars`);
      assert.match(err.message, /test\.marko:1:100007/);
      const [source, marker] = frameLines(err);
      assert.match(source, /^> 1 \| …x+<if>a<\/if>x+…$/);
      assert.equal(marker.indexOf("^"), source.indexOf("if>"));
      assert.match(marker, /\^\^ The \[`if` tag\]/);
    });

    it("windows the long lines around it to the same columns", () => {
      const err = failing(`<div>${long}</div>\n<if>a</if>`);
      assert.ok(err.message.length < 1_000, `${err.message.length} chars`);
      const [above, source, marker] = frameLines(err);
      assert.match(above, /^  1 \| <div>x+…$/);
      assert.equal(source, "> 2 | <if>a</if>");
      assert.equal(marker.indexOf("^"), source.indexOf("if>"));
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

  // Node's `--enable-source-maps` joins `sourceRoot` and a source by plain
  // concatenation, so a mapped frame only names a real file with a separator.
  describe("source maps", () => {
    let dir;
    beforeEach(() => {
      dir = fs.mkdtempSync(path.join(os.tmpdir(), "marko-maps-"));
      fs.mkdirSync(path.join(dir, "tags"));
      fs.writeFileSync(path.join(dir, "template.marko"), `<my-child/>\n`);
      fs.writeFileSync(
        path.join(dir, "tags", "my-child.marko"),
        `<p>child</p>\n`,
      );
    });
    afterEach(() => fs.rmSync(dir, { recursive: true, force: true }));

    const mappedSource = (file, cache) => {
      const { map } = compileFileSync(file, {
        translator,
        cache,
        output: "dom",
        sourceMaps: true,
      });
      return map.sourceRoot + map.sources[0];
    };

    it("maps a template to its own path", () => {
      const file = path.join(dir, "template.marko");
      assert.equal(mappedSource(file, new Map()), file);
    });

    it("maps a template first analyzed as another's child to its own path", () => {
      const cache = new Map();
      compileFileSync(path.join(dir, "template.marko"), {
        translator,
        cache,
        output: "dom",
      });
      const child = path.join(dir, "tags", "my-child.marko");
      assert.equal(mappedSource(child, cache), child);
    });
  });

  it("keeps the compile error when compiling asynchronously", () =>
    assert.rejects(
      () => compile("<div", template),
      /EOF reached while parsing/,
    ));
});
