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
  configure,
  getRuntimeEntryFiles,
  getRuntimeVersion,
  taglib,
  types as t,
} from "@marko/compiler";
import { diagnosticError } from "@marko/compiler/babel-utils";
import * as translator from "@marko/runtime-tags/translator";

const template = path.join(
  import.meta.dirname,
  "fixtures",
  "register",
  "template.marko",
);

// Serves `files` over the disk, standing in for the virtual file system a
// bundler hands over; it takes no options object for an encoding.
const fromMemory = (files) => {
  const readFileSync = (file, encoding) => {
    if (typeof encoding === "object") {
      throw new TypeError("Expected a string encoding");
    }
    return Object.hasOwn(files, file)
      ? files[file]
      : fs.readFileSync(file, encoding);
  };
  return {
    // Its files stat as files, since a package.json is stat checked before it is read.
    statSync: (file) =>
      Object.hasOwn(files, file)
        ? { isFile: () => true, isDirectory: () => false }
        : fs.statSync(file),
    readdirSync: fs.readdirSync,
    readFileSync,
    readFile: (file, encoding, cb) => cb(null, readFileSync(file, encoding)),
  };
};

const failing = (src, babelConfig) => {
  try {
    compileSync(src, "test.marko", { translator, code: false, babelConfig });
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
        fileSystem: fromMemory({ [template]: "<div>from config</div>" }),
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
          fileSystem: fromMemory({ [template]: "<div>from config</div>" }),
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

    it("keeps a statement import's references through stripTypes", () => {
      let references;
      compileSync(
        'static import { x } from "./x.js";\n<p>${x}</p>\n',
        template,
        {
          translator: Object.create(translator, {
            transform: {
              value: {
                Program(program) {
                  references =
                    program.scope.getBinding("x").referencePaths.length;
                },
              },
            },
          }),
          output: "html",
          code: false,
        },
      );
      assert.equal(references, 1);
    });

    it("keeps each comment's syntax", () => {
      const src =
        "// line\n/* block */\n<!-- html -->\n<div>\n  // line\n  /* block */\n  <!-- html -->\n</div>\n<pre>a // line\n</pre>";
      assert.equal(print(src), src);
    });

    it("keeps a sourceMappingURL comment", () => {
      const src =
        "<button onClick() {\n  //# sourceMappingURL=save.js.map\n  save();\n}/>";
      assert.equal(print(src), src);
    });
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

  describe("packages", () => {
    // A project whose `dep` package ships a tag, imported by path or found
    // through its taglib; `esm` holds a package.json that only sets a type.
    let project;
    const compileImport = (filename) =>
      compileSync('import Dep from "dep/tag.marko"\n<Dep/>', filename, {
        translator,
        output: "html",
      }).code;

    before(() => {
      project = fs.mkdtempSync(path.join(os.tmpdir(), "marko-imports-"));
      fs.mkdirSync(path.join(project, "node_modules", "dep"), {
        recursive: true,
      });
      fs.mkdirSync(path.join(project, "pkg"));
      fs.writeFileSync(
        path.join(project, "node_modules", "dep", "package.json"),
        JSON.stringify({ name: "dep" }),
      );
      fs.writeFileSync(
        path.join(project, "node_modules", "dep", "tag.marko"),
        "<span>dep</span>",
      );
      fs.writeFileSync(
        path.join(project, "node_modules", "dep", "marko.json"),
        JSON.stringify({ "<dep-tag>": { template: "./tag.marko" } }),
      );
      fs.writeFileSync(
        path.join(project, "package.json"),
        JSON.stringify({ name: "app", dependencies: { dep: "*" } }),
      );
      fs.mkdirSync(path.join(project, "esm"));
      fs.writeFileSync(
        path.join(project, "esm", "package.json"),
        JSON.stringify({ type: "module" }),
      );
    });

    it("resolves from a source directory that does not exist", () =>
      assert.match(
        compileImport(path.join(project, "missing", "x.marko")),
        /dep\/tag\.marko/,
      ));

    it("resolves from where a symlinked source directory lives", () => {
      const link = path.join(
        fs.mkdtempSync(path.join(os.tmpdir(), "marko-link-")),
        "pkg",
      );
      fs.symlinkSync(path.join(project, "pkg"), link, "dir");
      assert.match(
        compileImport(path.join(link, "x.marko")),
        /dep\/tag\.marko/,
      );
    });

    it("finds a package's template added after an import of it failed", () => {
      const importLate = () =>
        compileSync(
          'import Late from "late/tag.marko"\n<Late/>',
          path.join(project, "late.marko"),
          { translator, output: "html", cache: new Map() },
        ).code;
      assert.throws(importLate, /Cannot find module 'late\/tag\.marko'/);
      const dir = path.join(project, "node_modules", "late");
      fs.mkdirSync(dir);
      fs.writeFileSync(path.join(dir, "package.json"), '{"name":"late"}');
      fs.writeFileSync(path.join(dir, "tag.marko"), "<span>late</span>");
      assert.match(importLate(), /late\/tag\.marko/);
    });

    it("keeps where a package's template is until the caches are cleared", () => {
      const importMoving = () =>
        compileSync(
          'import Moving from "moving/tag.marko"\n<Moving/>',
          path.join(project, "moving.marko"),
          { translator, output: "html", cache: new Map() },
        ).code;
      const dir = path.join(project, "node_modules", "moving");
      const setTarget = (target) =>
        fs.writeFileSync(
          path.join(dir, "package.json"),
          JSON.stringify({
            name: "moving",
            exports: { "./tag.marko": `./${target}` },
          }),
        );
      fs.mkdirSync(dir);
      fs.writeFileSync(path.join(dir, "a.marko"), "<span>a</span>");
      setTarget("a.marko");
      assert.match(importMoving(), /moving\/tag\.marko/);

      fs.renameSync(path.join(dir, "a.marko"), path.join(dir, "b.marko"));
      setTarget("b.marko");
      assert.throws(importMoving, /Unable to find entry point/);
      taglib.clearCaches();
      assert.match(importMoving(), /moving\/tag\.marko/);
    });

    it("finds a dependency's tags past a package.json that only sets a type", () =>
      assert.match(
        compileSync("<dep-tag/>", path.join(project, "esm", "x.marko"), {
          translator,
          output: "html",
        }).code,
        /dep\/tag\.marko/,
      ));

    describe("through a file system from the config", () => {
      // `app` has `dep` installed, but only `files` holds a package.json naming it.
      let app;
      const files = {};
      const setDependencies = (dependencies) => {
        files[path.join(app, "package.json")] = JSON.stringify({
          name: "app",
          dependencies,
        });
      };
      const compileTag = () =>
        compileSync("<dep-tag/>", path.join(app, "x.marko"), {
          translator,
          output: "html",
          cache: new Map(),
          fileSystem: fromMemory(files),
        }).code;

      before(() => {
        app = fs.mkdtempSync(path.join(os.tmpdir(), "marko-fs-"));
        fs.mkdirSync(path.join(app, "node_modules"));
        fs.symlinkSync(
          path.join(project, "node_modules", "dep"),
          path.join(app, "node_modules", "dep"),
          "dir",
        );
      });

      // Clears `dep`'s taglib, which earlier compiles cached, so these read it
      // through the config's file system.
      beforeEach(() => taglib.clearCaches());

      it("finds the root package and taglibs there", () => {
        setDependencies({ dep: "*" });
        assert.match(compileTag(), /dep\/tag\.marko/);
      });

      it("imports a package's template that only the file system holds", () => {
        setDependencies({});
        files[path.join(app, "node_modules", "virtual", "package.json")] =
          JSON.stringify({ name: "virtual" });
        files[path.join(app, "node_modules", "virtual", "tag.marko")] =
          "<span>virtual</span>";
        assert.match(
          compileSync(
            'import Virtual from "virtual/tag.marko"\n<Virtual/>',
            path.join(app, "x.marko"),
            {
              translator,
              output: "html",
              cache: new Map(),
              fileSystem: fromMemory(files),
            },
          ).code,
          /virtual\/tag\.marko/,
        );
      });

      it("reads the root package again once the taglib caches are cleared", () => {
        setDependencies({});
        assert.throws(compileTag, /Unable to find entry point/);
        setDependencies({ dep: "*" });
        taglib.clearCaches();
        assert.match(compileTag(), /dep\/tag\.marko/);
      });
    });
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

    // Some engines keep only the frames in `stack`, without V8's message header.
    it("keeps each error's text when `stack` holds only frames", () => {
      const report = () => ({
        visitor: {
          Program(path) {
            diagnosticError(path, {
              label: "Located",
              loc: {
                start: { line: 1, column: 1 },
                end: { line: 1, column: 4 },
              },
            });
            diagnosticError(path, { label: "Unlocated", loc: false });
          },
        },
      });
      const { prepareStackTrace } = Error;
      Error.prepareStackTrace = (_err, frames) =>
        frames.map((frame) => `    at ${frame}\n`).join("");
      try {
        assert.equal(
          stripVTControlCharacters(
            failing("<div>hi</div>", { plugins: [report] }).message,
          ),
          `
    at test.marko:1:2
    > 1 | <div>hi</div>
        |  ^^^ Located

    CompileError: Unlocated
        at test.marko`,
        );
      } finally {
        Error.prepareStackTrace = prepareStackTrace;
      }
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
      assert.match(marker, /\^\^ The \[`<if>` tag\]/);
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

  // Matches Babel's `File.buildCodeFrameError`, for nodes a transform builds.
  describe("buildCodeFrameError", () => {
    const buildError = (getNode) => {
      try {
        compileSync("<div x=1/>", "test.marko", {
          code: false,
          translator: {
            transform: {
              MarkoTag(tag) {
                throw tag.hub.buildError(getNode(tag), "msg");
              },
            },
            translate: {},
            taglibs: [],
            tagDiscoveryDirs: [],
          },
        });
      } catch (err) {
        assert.equal(err.label, "msg");
        return err;
      }
      assert.fail("expected a compile error");
    };

    it("frames a node without a loc at its first descendant with one", () => {
      const err = buildError((tag) =>
        t.markoTag(
          t.stringLiteral("div"),
          tag.node.attributes,
          t.markoTagBody(),
        ),
      );
      assert.equal(err.loc.start.column, "<div ".length);
    });

    it("reports a missing node without a frame", () => {
      assert.equal(buildError(() => null).loc, undefined);
    });
  });

  describe("getRuntimeEntryFiles", () => {
    it("asks the translator", () =>
      assert.ok(getRuntimeEntryFiles("html").length));

    it("is empty for a translator that offers none", () =>
      assert.deepEqual(getRuntimeEntryFiles("html", {}), []));

    it("follows the configured optimize and patches over the environment", () => {
      try {
        for (const optimize of [true, false]) {
          for (const patches of [true, false]) {
            configure({ optimize, patches });
            assert.deepEqual(
              getRuntimeEntryFiles("dom", translator),
              translator.getRuntimeEntryFiles("dom", optimize, patches),
            );
          }
        }
      } finally {
        configure();
      }
    });
  });

  describe("getRuntimeVersion", () => {
    it("reports the translator's version", () =>
      assert.match(getRuntimeVersion(), /^\d+\.\d+\.\d+/));

    it("falls back for a translator that has no version", () =>
      assert.equal(getRuntimeVersion({}), "0.0.0"));
  });

  describe("configure", () => {
    it("sets the translator the runtime and taglib helpers default to", () => {
      try {
        configure({ translator, optimize: false });
        assert.deepEqual(
          getRuntimeEntryFiles("dom"),
          translator.getRuntimeEntryFiles("dom", false),
        );
        assert.equal(getRuntimeVersion(), translator.version);
        assert.equal(
          taglib.buildLookup(import.meta.dirname),
          taglib.buildLookup(import.meta.dirname, translator),
        );
      } finally {
        configure();
      }
    });
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

    // A taglib file newer than every entry makes each of them stale, so these
    // only compile if a compile checks each template once.
    const writeNewerTaglib = () => {
      const file = path.join(dir, "marko.json");
      fs.writeFileSync(file, "{}");
      const ahead = new Date(Date.now() + 60_000);
      fs.utimesSync(file, ahead, ahead);
    };

    it("compiles a child against the analysis its parent read", () => {
      writeTag("my-child", `<div>\${input.a}</div>\n<return=1/>\n`);
      fs.writeFileSync(path.join(dir, "template.marko"), `<my-child a=1/>\n`);
      writeNewerTaglib();
      assert.match(compileParent(new Map()), /my-child/);
    });

    it("compiles templates that render each other", () => {
      writeTag("tag-a", `<if=input.show><tag-b/></if>\n`);
      writeTag("tag-b", `<if=input.show><tag-a/></if>\n`);
      fs.writeFileSync(path.join(dir, "template.marko"), `<tag-a show/>\n`);
      writeNewerTaglib();
      assert.match(compileParent(new Map()), /tag-a/);
    });

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

    it("compiles an edited template as a fresh cache would", () => {
      const file = path.join(dir, "counter.marko");
      const src = `<let/count=0>\n<const/inc = () => count++>\n<button onClick=inc>\${count}</button>\n`;
      const edited = `${src}<p>edited</p>\n`;
      for (const output of ["dom", "html"]) {
        const compileWith = (code, cache) =>
          compileSync(code, file, { translator, output, cache }).code;
        const cache = new Map();
        compileWith(src, cache);
        assert.equal(
          compileWith(edited, cache),
          compileWith(edited, new Map()),
        );
      }
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

    const mappedSource = (file, cache, fileSystem = fs) => {
      const { map } = compileFileSync(file, {
        translator,
        cache,
        fileSystem,
        output: "dom",
        sourceMaps: true,
      });
      return map.sourceRoot + map.sources[0];
    };
    const inputMap = (source) => ({
      version: 3,
      sources: [source],
      names: [],
      mappings: "AAAA",
    });
    // From memory, so only a read that bypasses `fileSystem` finds a map file.
    const mappedSourceOf = (src) =>
      mappedSource(
        path.join(dir, "template.marko"),
        new Map(),
        fromMemory(src),
      );

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

    it("keeps an inline map in a comment out of the template's map", () => {
      const data = Buffer.from(JSON.stringify(inputMap("inline.ts"))).toString(
        "base64",
      );
      assert.equal(
        mappedSourceOf(
          `<button onClick() {\n  //# sourceMappingURL=data:application/json;base64,${data}\n  save();\n}/>\n`,
        ),
        path.join(dir, "template.marko"),
      );
    });

    it("never reads the map file a comment names", () => {
      fs.writeFileSync(
        path.join(dir, "side.map"),
        JSON.stringify(inputMap("side.ts")),
      );
      assert.equal(
        mappedSourceOf(
          `import x from "./x.js"; //# sourceMappingURL=side.map\n<div>\${x}</div>\n`,
        ),
        path.join(dir, "template.marko"),
      );
    });

    it("remaps through an input map the caller passes", () => {
      const { map } = compileFileSync(path.join(dir, "template.marko"), {
        translator,
        cache: new Map(),
        output: "dom",
        sourceMaps: true,
        babelConfig: { inputSourceMap: inputMap("pre.ts") },
      });
      assert.deepEqual(map.sources, ["pre.ts"]);
    });
  });

  describe("a later babel plugin", () => {
    const importBindings = (babelConfig) => {
      const imports = [];
      const plugin = () => ({
        visitor: {
          ImportSpecifier(specifier) {
            const { name } = specifier.node.local;
            imports.push([name, specifier.scope.hasOwnBinding(name)]);
          },
        },
      });
      const config = babelConfig(plugin);
      // The repo's own babel config would add plugins to every compile here.
      config.babelrc = config.configFile = false;
      compileSync("<div>hi</div>", "test.marko", {
        translator,
        babelConfig: config,
      });
      return imports;
    };
    const boundImports = [
      ["_html", true],
      ["_scope_id", true],
      ["_scope_reason", true],
      ["_template", true],
    ];

    it("sees the bindings the translator adds", () =>
      assert.deepEqual(
        importBindings((plugin) => ({ plugins: [plugin] })),
        boundImports,
      ));

    it("sees them from a preset's own pass", () =>
      assert.deepEqual(
        importBindings((plugin) => ({
          passPerPreset: true,
          presets: [() => ({ plugins: [plugin] })],
        })),
        boundImports,
      ));
  });

  it("keeps the compile error when compiling asynchronously", () =>
    assert.rejects(
      () => compile("<div", template),
      /EOF reached while parsing/,
    ));
});
