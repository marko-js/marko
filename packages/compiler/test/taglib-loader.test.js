import assert from "assert/strict";
import fs from "node:fs";
import { createRequire } from "node:module";
import os from "node:os";
import path from "node:path";
import v8 from "node:v8";
import vm from "node:vm";

import { compileSync, configure, taglib } from "@marko/compiler";
import * as runtimeTagsTranslator from "@marko/runtime-tags/translator";

const classAPITranslator = createRequire(
  new URL("../../runtime-class/package.json", import.meta.url),
)("marko/translator");
v8.setFlagsFromString("--expose-gc");
const gc = vm.runInNewContext("gc");

// Every case writes its own project in a fresh directory.
let dir;

const tagsTranslator = { taglibs: [], tagDiscoveryDirs: ["tags"] };
const classTranslator = {
  taglibs: [],
  tagDiscoveryDirs: ["tags", "components"],
  classTaglibs: true,
};

function write(files, root = dir) {
  for (const rel in files) {
    const file = path.join(root, rel);
    const data = files[rel];
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(
      file,
      typeof data === "string" ? data : JSON.stringify(data),
    );
  }
}

// Waits for the clock to move on, so a later read is after what was written.
function tick() {
  for (const now = Date.now(); Date.now() === now;);
}

// Writes files after every read so far, stamped with the clock, as file times may
// lag it; then lets it move on, so a later read is after them.
function writeChanged(files) {
  tick();
  write(files);
  const now = new Date(Date.now());
  for (const rel in files) {
    fs.utimesSync(file(rel), now, now);
    fs.utimesSync(path.dirname(file(rel)), now, now);
  }
  tick();
}

const lookup = (rel = "", translator = tagsTranslator) =>
  taglib.buildLookup(path.join(dir, rel), translator);
const template = (rel) =>
  lookup(path.dirname(rel)).getTag(path.basename(rel))?.template;
const file = (rel) => path.join(dir, rel);
// The marko.json files a directory's lookup read, but for installed ones.
const configFiles = (rel = "", translator = tagsTranslator) =>
  listed(taglib.getDependencies([path.join(dir, rel)], translator)).file.filter(
    (f) => f.endsWith("marko.json") && !f.includes(path.sep + "node_modules"),
  );
// The paths `deps` lists, by kind, as a tool visits them.
function listed(deps, seen) {
  const paths = { file: [], missing: [], directory: [] };
  taglib.forEachDependency(deps, (p, kind) => paths[kind].push(p), seen);
  return paths;
}
// Whether a path is in, or is, a `node_modules` folder.
const installed = (p) => /[\\/]node_modules(?:[\\/]|$)/.test(p);

describe("compiler/taglib-loader", () => {
  beforeEach(() => {
    taglib.clearCaches();
    dir = fs.realpathSync(
      fs.mkdtempSync(path.join(os.tmpdir(), "marko-taglib-loader-")),
    );
    write({ "package.json": { name: "app" } });
  });
  afterEach(() => fs.rmSync(dir, { recursive: true, force: true }));

  describe("tags dirs", () => {
    it("finds a tag by its file, or its directory's index.marko or own-named template", () => {
      write({
        "tags/tag-a.marko": "",
        "tags/tag-b/index.marko": "",
        "tags/tag-b/tag-b.marko": "",
        "tags/tag-c/tag-c.marko": "",
        "tags/tag-c/helper.marko": "",
      });
      const tags = lookup();
      assert.equal(tags.getTag("tag-a").template, file("tags/tag-a.marko"));
      assert.equal(
        tags.getTag("tag-b").template,
        file("tags/tag-b/index.marko"),
      );
      assert.equal(
        tags.getTag("tag-c").template,
        file("tags/tag-c/tag-c.marko"),
      );
      assert.equal(tags.getTag("helper"), undefined);
    });

    it("finds tags one group down, but not in a nested group or a tags or components folder", () => {
      write({
        "tags/group/tag-a.marko": "",
        "tags/group/tag-b/index.marko": "",
        "tags/group/deeper/c.marko": "",
        "tags/tags/tag-d.marko": "",
        "tags/components/tag-e.marko": "",
      });
      const tags = lookup();
      assert.equal(
        tags.getTag("tag-a").template,
        file("tags/group/tag-a.marko"),
      );
      assert.equal(
        tags.getTag("tag-b").template,
        file("tags/group/tag-b/index.marko"),
      );
      assert.equal(tags.getTag("c"), undefined);
      assert.equal(tags.getTag("deeper"), undefined);
      assert.equal(tags.getTag("tag-d"), undefined);
      assert.equal(tags.getTag("tag-e"), undefined);
      assert.equal(tags.getTag("group"), undefined);
    });

    it("keeps a class API entry in a grouped folder from shadowing <template>", () => {
      write({
        "tags/legacy/template.marko": "",
        "tags/legacy/helper.marko": "",
      });
      const tags = lookup();
      assert.equal(tags.getTag("legacy"), undefined);
      assert.equal(tags.getTag("template").html, true);
      assert.equal(
        tags.getTag("helper").template,
        file("tags/legacy/helper.marko"),
      );
    });

    it("skips dot entries and node_modules", () => {
      write({
        "tags/.hidden/index.marko": "",
        "tags/node_modules/index.marko": "",
      });
      assert.equal(lookup().getTag(".hidden"), undefined);
      assert.equal(lookup().getTag("node_modules"), undefined);
    });

    it("prefers a tag's file to a directory of the same name at its depth, even in another group, and a top level tag to a grouped one", () => {
      write({
        "tags/tag-a.marko": "",
        "tags/tag-a/index.marko": "",
        "tags/tag-b.marko": "",
        "tags/group/tag-b.marko": "",
        "tags/group/tag-c/index.marko": "",
        "tags/group/tag-c.marko": "",
        "tags/group-a/tag-d/index.marko": "",
        "tags/group-b/tag-d.marko": "",
        "tags/group-b/tag-e/index.marko": "",
        "tags/group-a/tag-e.marko": "",
      });
      assert.equal(template("tag-a"), file("tags/tag-a.marko"));
      assert.equal(template("tag-b"), file("tags/tag-b.marko"));
      assert.equal(template("tag-c"), file("tags/group/tag-c.marko"));
      assert.equal(template("tag-d"), file("tags/group-b/tag-d.marko"));
      assert.equal(template("tag-e"), file("tags/group-a/tag-e.marko"));
    });

    it("takes a tag directory's marko-tag.json, reading older hook names, but not a lone hook file", () => {
      write({
        "tags/hooked/transformer.js": "",
        "tags/old-names/marko-tag.json": {
          template: "./index.marko",
          transformer: "./transformer.js",
        },
        "tags/old-names/index.marko": "",
        "tags/old-names/transformer.js": "",
        "tags/declared/marko-tag.json": {
          template: "./index.marko",
          transform: "./transform.js",
        },
        "tags/declared/index.marko": "",
        "tags/declared/transform.js": "",
      });
      const tags = lookup();
      assert.equal(tags.getTag("hooked"), undefined);
      assert.equal(
        tags.getTag("old-names").transformers[0].path,
        file("tags/old-names/transformer.js"),
      );
      const declared = tags.getTag("declared");
      assert.equal(declared.template, file("tags/declared/index.marko"));
      assert.equal(declared.filePath, file("tags/declared/marko-tag.json"));
      assert.equal(
        declared.transformers[0].path,
        file("tags/declared/transform.js"),
      );
    });

    it("finds a tag a grouped marko-tag.json renames, by name and in the full list", () => {
      write({
        "tags/group/renamed/index.marko": "",
        "tags/group/renamed/marko-tag.json": { name: "new-name" },
      });
      assert.equal(
        lookup().getTag("new-name").template,
        file("tags/group/renamed/index.marko"),
      );
      taglib.clearCaches();
      assert.ok(
        lookup()
          .getTagsSorted()
          .some((tag) => tag.name === "new-name"),
      );
    });

    it("reports a broken marko-tag.json only where its tag is used", () => {
      write({
        "tags/broken/marko-tag.json": "{ BAD JSON",
        "tags/group/inner.marko": "",
      });
      const tags = lookup();
      assert.ok(tags.getTag("div"));
      assert.equal(
        tags.getTag("inner").template,
        file("tags/group/inner.marko"),
      );
      assert.ok(tags.getTagsSorted().every((tag) => tag.name !== "broken"));
      assert.equal(tags.getTag("broken"), undefined);
      assert.match(
        tags.getTagError("broken").message,
        /Unable to parse JSON file/,
      );
    });

    it("keeps a tag's own file over a directory its marko-tag.json renames to it", () => {
      write({
        "tags/bar.marko": "",
        "tags/foo/marko-tag.json": { name: "bar" },
        "tags/foo/index.marko": "",
      });
      const tags = lookup();
      assert.equal(tags.getTag("bar").template, file("tags/bar.marko"));
      assert.equal(tags.getTag("foo"), undefined);
    });

    it("skips a group folder it cannot read", () => {
      write({ "tags/locked/inner.marko": "", "tags/tag-a.marko": "" });
      const locked = file("tags/locked");
      const fileSystem = {
        readFileSync: fs.readFileSync,
        statSync: fs.statSync,
        readdirSync(path, ...args) {
          if (path === locked) {
            throw Object.assign(new Error("permission denied"), {
              code: "EACCES",
            });
          }
          return fs.readdirSync(path, ...args);
        },
      };
      const tags = taglib.buildLookup(
        dir,
        tagsTranslator,
        undefined,
        fileSystem,
      );
      assert.equal(tags.getTag("tag-a").template, file("tags/tag-a.marko"));
      assert.equal(tags.getTag("inner"), undefined);
      assert.ok(tags.getTag("div"));
    });

    it("takes index.marko beside a marko-tag.json whose only hook is a migrator", () => {
      write({
        "tags/my-tag/index.marko": "",
        "tags/my-tag/marko-tag.json": { migrator: "./migrator.js" },
        "tags/my-tag/migrator.js": "",
      });
      const tag = lookup().getTag("my-tag");
      assert.equal(tag.template, file("tags/my-tag/index.marko"));
      assert.equal(tag.migrators[0].path, file("tags/my-tag/migrator.js"));
    });

    it("lists every tag in reach, sorted and cached", () => {
      write({
        "tags/zed.marko": "",
        "tags/group/alpha.marko": "",
        "src/tags/beta/index.marko": "",
      });
      const tags = lookup("src");
      const names = tags.getTagsSorted().map((tag) => tag.name);
      const own = new Set(["alpha", "beta", "zed"]);
      assert.deepEqual(
        names.filter((name) => own.has(name)),
        ["alpha", "beta", "zed"],
      );
      assert.ok(names.includes("div"));
      assert.equal(tags.getTagsSorted(), tags.getTagsSorted());
    });
  });

  describe("scopes", () => {
    it("prefers a nearer tags dir and stops at the package root", () => {
      write({
        "tags/tag-a.marko": "",
        "src/tags/tag-a.marko": "",
        "nested/package.json": { name: "nested" },
      });
      assert.equal(template("src/tag-a"), file("src/tags/tag-a.marko"));
      assert.equal(template("tag-a"), file("tags/tag-a.marko"));
      assert.equal(lookup("nested").getTag("tag-a"), undefined);
    });

    it("replaces a native tag whole, so its parse options stay with it", () => {
      write({ "tags/textarea.marko": "" });
      const tag = lookup().getTag("textarea");
      assert.equal(tag.template, file("tags/textarea.marko"));
      assert.equal(tag.parseOptions, undefined);
      assert.equal(tag.html, undefined);
    });

    it("merges other taglibs' definitions of the translator's own tags into them, keeping their hooks", () => {
      const translator = {
        taglibs: [
          [
            "core",
            {
              "<core-tag>": { translate: {} },
              "<core-rendered>": { translate: {}, renderer: "core-renderer" },
            },
          ],
        ],
        tagDiscoveryDirs: ["tags"],
        classTaglibs: true,
      };
      write({
        "tags/core-tag.marko": "",
        "marko.json": { "<core-tag>": { transform: "./core-transform.js" } },
        "core-transform.js": "",
      });
      const tag = lookup("", translator).getTag("core-tag");
      assert.ok(tag.translator);
      assert.equal(tag.template, file("tags/core-tag.marko"));
      assert.equal(tag.transformers[0].path, file("core-transform.js"));
      assert.equal(
        lookup("", translator).getTag("core-rendered").renderer,
        "core-renderer",
      );
    });

    it("extends the tag found further away with a definition that has no template", () => {
      write({
        "marko.json": { "<div>": { transform: "./div-transform.js" } },
        "div-transform.js": "",
      });
      const tag = lookup().getTag("div");
      assert.equal(tag.html, true);
      assert.equal(tag.transformers[0].path, file("div-transform.js"));
    });

    it("extends a tag in a tags dir with a definition beside it that has no template", () => {
      write({
        "marko.json": { "<tag-a>": { transform: "./transform.js" } },
        "transform.js": "",
        "tags/tag-a.marko": "",
      });
      const tag = lookup().getTag("tag-a");
      assert.equal(tag.template, file("tags/tag-a.marko"));
      assert.equal(tag.transformers[0].path, file("transform.js"));
    });

    it("loads a nearer marko.json that reuses an ancestor's taglib-id, keeping the ancestor's tags", () => {
      write({
        "marko.json": {
          "taglib-id": "shared",
          "<tag-a>": { template: "./a.marko" },
        },
        "a.marko": "",
        "src/marko.json": {
          "taglib-id": "shared",
          "<tag-b>": { template: "./b.marko" },
        },
        "src/b.marko": "",
      });
      const src = lookup("src");
      assert.equal(src.getTag("tag-b").template, file("src/b.marko"));
      assert.equal(src.getTag("tag-a").template, file("a.marko"));
      assert.equal(src.getTag("tag-b").taglibId, "shared");
    });

    it("reads a taglib's blank taglib-id as its path, and resolves only a relative types path", () => {
      write({
        "marko.json": {
          "taglib-id": "",
          "<tag-a>": { template: "./a.marko", types: "./a.d.marko" },
          "<tag-b>": { template: "./a.marko", types: "some-pkg/b.d.marko" },
        },
        "a.marko": "",
      });
      const tags = lookup();
      assert.equal(tags.getTag("tag-a").taglibId, file("marko.json"));
      assert.equal(tags.getTag("tag-a").types, file("a.d.marko"));
      assert.equal(tags.getTag("tag-b").types, "some-pkg/b.d.marko");
    });

    it("finds a marko.json entry by the name it sets", () => {
      write({
        "marko.json": { "<tag-a>": { name: "renamed", template: "./a.marko" } },
        "a.marko": "",
      });
      assert.equal(template("renamed"), file("a.marko"));
      assert.equal(lookup().getTag("tag-a"), undefined);
    });

    it("searches the last of several tags dirs first, and runs every hook of an array in order", () => {
      write({
        "marko.json": {
          "tags-dir": ["./a", "./b"],
          transform: ["./t1.js", "./t2.js"],
          translate: "./translate.js",
        },
        "a/tag-a.marko": "",
        "b/tag-a.marko": "",
        "t1.js": "",
        "t2.js": "",
        "translate.js": "",
      });
      const tags = lookup();
      assert.equal(template("tag-a"), file("b/tag-a.marko"));
      assert.deepEqual(
        tags.transformers.map((hook) => hook.path),
        [file("t1.js"), file("t2.js")],
      );
      assert.deepEqual(
        tags.translators.map((hook) => hook.path),
        [file("translate.js")],
      );
    });

    it("finds a tag named with a colon, and a nested tag by its parent's name", () => {
      write({
        "marko.json": {
          "<fb:like>": { template: "./like.marko" },
          "<tabs>": { template: "./tabs.marko", "<tab>[]": {} },
        },
        "like.marko": "",
        "tabs.marko": "",
      });
      assert.equal(lookup().getTag("fb:like").template, file("like.marko"));
      assert.equal(
        lookup("", classTranslator).getTag("tabs:tab").isNestedTag,
        true,
      );
    });

    it("reads a marko.json's taglib-imports, whose tags win and hooks run after the importer's", () => {
      write({
        "marko.json": {
          "taglib-imports": ["./lib/marko.json"],
          transform: "./outer.js",
          "<shared>": { template: "./outer.marko" },
        },
        "outer.js": "",
        "outer.marko": "",
        "lib/marko.json": {
          "taglib-imports": ["./nested/marko.json"],
          transform: "./inner.js",
          "<shared>": { template: "./inner.marko" },
        },
        "lib/inner.js": "",
        "lib/inner.marko": "",
        "lib/nested/marko.json": { "tags-dir": "./tags" },
        "lib/nested/tags/deep.marko": "",
      });
      const tags = lookup();
      assert.equal(tags.getTag("shared").template, file("lib/inner.marko"));
      assert.equal(
        tags.getTag("deep").template,
        file("lib/nested/tags/deep.marko"),
      );
      assert.deepEqual(
        tags.transformers.map((hook) => hook.path),
        [file("outer.js"), file("lib/inner.js")],
      );
    });

    it("watches each marko.json it loads, with its imports", () => {
      write({
        "marko.json": { "taglib-imports": ["./lib/marko.json"] },
        "lib/marko.json": { "taglib-imports": ["./nested/marko.json"] },
        "lib/nested/marko.json": {},
        "src/marko.json": {},
      });
      assert.deepEqual(
        new Set(configFiles("src")),
        new Set([
          file("marko.json"),
          file("lib/marko.json"),
          file("lib/nested/marko.json"),
          file("src/marko.json"),
        ]),
      );
    });

    it("reports its discovery dir alone though an import has a tags-dir", () => {
      write({
        "marko.json": { "taglib-imports": ["./lib/marko.json"] },
        "lib/marko.json": { "tags-dir": "./tags" },
        "lib/tags/deep.marko": "",
        "tags/tag-a.marko": "",
      });
      const tags = lookup();
      assert.equal(tags.exclusiveTagDiscoveryDirs, "tags");
      assert.equal(tags.getTag("deep").template, file("lib/tags/deep.marko"));
    });

    it("names a tag entry by its key, whatever its marko-tag.json names it", () => {
      write({
        "marko.json": { "<tag-a>": "./a/marko-tag.json" },
        "a/marko-tag.json": { name: "other", template: "./index.marko" },
        "a/index.marko": "",
      });
      const tags = lookup();
      assert.equal(tags.getTag("tag-a").name, "tag-a");
      assert.equal(tags.getTag("tag-a").template, file("a/index.marko"));
      assert.equal(tags.getTag("other"), undefined);
    });

    it("rejects a package.json import, asking for its dependencies' marko.json files", () => {
      write({
        "marko.json": { "taglib-imports": ["./vendor/package.json"] },
        "vendor/package.json": { name: "vendor" },
      });
      assert.throws(
        () => lookup(),
        /taglib-imports no longer takes a package\.json/,
      );
    });

    it("loads an imported taglib once for templates in its own directory", () => {
      write({
        "marko.json": { "taglib-imports": ["./lib/marko.json"] },
        "lib/marko.json": { transform: "./transform.js" },
        "lib/transform.js": "",
      });
      assert.deepEqual(
        lookup("lib").transformers.map((hook) => hook.path),
        [file("lib/transform.js")],
      );
    });

    it("ends mutual taglib imports, skipping a non-string import", () => {
      write({
        "marko.json": { "taglib-imports": [1, "./a/marko.json"] },
        "a/marko.json": {
          "taglib-imports": ["../b/marko.json"],
          "<tag-a>": { template: "./a.marko" },
        },
        "a/a.marko": "",
        "b/marko.json": {
          "taglib-imports": ["../a/marko.json"],
          "<tag-b>": { template: "./b.marko" },
        },
        "b/b.marko": "",
      });
      const tags = lookup();
      assert.equal(tags.getTag("tag-a").template, file("a/a.marko"));
      assert.equal(tags.getTag("tag-b").template, file("b/b.marko"));
    });

    it("throws for a taglib import that does not resolve", () => {
      write({ "marko.json": { "taglib-imports": ["./missing.json"] } });
      assert.throws(lookup, /Import not found: \.\/missing\.json/);
    });

    it("lets a translator taglib's tags dir replace a native tag", () => {
      write({ "core/tags/button.marko": "" });
      const translator = {
        taglibs: [[file("core/marko.json"), { "tags-dir": "./tags" }]],
        tagDiscoveryDirs: ["tags"],
      };
      assert.equal(
        lookup("", translator).getTag("button").template,
        file("core/tags/button.marko"),
      );
    });

    it("finds tags in a marko.json's tags-dir instead of discovering them", () => {
      write({
        "marko.json": { "tags-dir": "./tags" },
        "tags/tag-a.marko": "",
        "src/tags/tag-b.marko": "",
      });
      const root = lookup();
      assert.equal(root.getTag("tag-a").taglibId, file("marko.json"));
      assert.deepEqual(root.manualTagsDirs, new Set([file("tags")]));
      assert.equal(root.exclusiveTagDiscoveryDirs, false);
      assert.equal(root.discoveryDirs, undefined);
      assert.deepEqual(configFiles(), [file("marko.json")]);

      const src = lookup("src");
      assert.deepEqual(src.discoveryDirs, [file("src/tags")]);
      assert.equal(src.exclusiveTagDiscoveryDirs, false);
    });

    it("reports a discovery dir found alone, or false for a mix", () => {
      write({ "tags/tag-a.marko": "", "src/components/tag-b.marko": "" });
      assert.equal(
        lookup("", classTranslator).exclusiveTagDiscoveryDirs,
        "tags",
      );
      const src = lookup("src", classTranslator);
      assert.equal(src.exclusiveTagDiscoveryDirs, false);
      assert.deepEqual(src.discoveryDirs, [
        file("src/components"),
        file("tags"),
      ]);
    });

    it("runs taglib hooks from the furthest taglib to the nearest", () => {
      write({
        "marko.json": { transform: "./outer.js" },
        "outer.js": "",
        "src/marko.json": { transform: "./inner.js" },
        "src/inner.js": "",
      });
      assert.deepEqual(
        lookup("src").transformers.map((hook) => hook.path),
        [file("outer.js"), file("src/inner.js")],
      );
    });
  });

  describe("installed taglibs", () => {
    beforeEach(() =>
      write({
        "package.json": { name: "app", dependencies: { lib: "*", other: "*" } },
        "node_modules/lib/package.json": { name: "lib" },
        "node_modules/lib/marko.json": { exports: "./dist/tags" },
        "node_modules/lib/dist/tags/lib-tag.marko": "",
        "node_modules/other/package.json": { name: "other" },
        "node_modules/other/marko.json": { "<other-tag>": { html: true } },
      }),
    );

    it("finds a scoped package's taglib in a further node_modules", () => {
      write({
        "node_modules/@scope/lib/package.json": { name: "@scope/lib" },
        "node_modules/@scope/lib/marko.json": {
          "<scoped-tag>": { template: "./t.marko" },
        },
        "node_modules/@scope/lib/t.marko": "",
        "app/package.json": {
          name: "nested-app",
          dependencies: { "@scope/lib": "*" },
        },
        "app/node_modules/other/package.json": { name: "other" },
      });
      const tag = lookup("app").getTag("scoped-tag");
      assert.equal(tag.template, file("node_modules/@scope/lib/t.marko"));
      assert.equal(tag.packageName, "@scope/lib");
    });

    it("finds a dependency's exported tags under the name it is installed as", () => {
      write({
        "package.json": { name: "app", dependencies: { alias: "*" } },
        "node_modules/alias/package.json": { name: "real-name" },
        "node_modules/alias/marko.json": { exports: "./dist/tags" },
        "node_modules/alias/dist/tags/alias-tag.marko": "",
      });
      const tag = lookup().getTag("alias-tag");
      assert.equal(
        tag.template,
        file("node_modules/alias/dist/tags/alias-tag.marko"),
      );
      assert.equal(tag.packageName, "alias");
      assert.equal(tag.packageRoot, file("node_modules/alias"));
      assert.deepEqual(configFiles(), []);
    });

    it("reads peer and dev dependencies too, each package once", () => {
      write({
        "package.json": {
          name: "app",
          dependencies: { both: "*", dep: "*" },
          peerDependencies: { peer: "*", both: "*" },
          devDependencies: { dev: "*", both: "*", dep: "*", peer: "*" },
        },
        "node_modules/peer/marko.json": { "<peer-tag>": { html: true } },
        "node_modules/dev/marko.json": { "<dev-tag>": { html: true } },
        "node_modules/both/marko.json": { transform: "./t.js" },
        "node_modules/both/t.js": "",
        "node_modules/dep/marko.json": {},
      });
      const reads = [];
      const tags = taglib.buildLookup(
        dir,
        tagsTranslator,
        undefined,
        recordingFS(reads),
      );
      assert.ok(tags.getTag("peer-tag"));
      assert.ok(tags.getTag("dev-tag"));
      assert.deepEqual(
        tags.transformers.map((hook) => hook.path),
        [file("node_modules/both/t.js")],
      );
      assert.deepEqual(
        reads
          .filter(([kind, p]) => kind === "read" && p.endsWith("marko.json"))
          .map(([, p]) => p)
          .sort(),
        ["both", "dep", "dev", "peer"].map((name) =>
          file(`node_modules/${name}/marko.json`),
        ),
      );
    });

    it("loads a dependency's taglib once when a marko.json also imports it", () => {
      write({
        "package.json": { name: "app", dependencies: { hooked: "*" } },
        "node_modules/hooked/package.json": { name: "hooked" },
        "node_modules/hooked/marko.json": {
          transform: "./t.js",
          "<hooked-tag>": { template: "./t.marko" },
        },
        "node_modules/hooked/t.js": "",
        "node_modules/hooked/t.marko": "",
        "marko.json": { "taglib-imports": ["hooked/marko.json"] },
      });
      const tags = lookup();
      assert.deepEqual(
        tags.transformers.map((hook) => hook.path),
        [file("node_modules/hooked/t.js")],
      );
      assert.equal(tags.getTag("hooked-tag").packageName, "hooked");
    });

    it("follows the exports of an installed taglib a marko.json imports", () => {
      write({
        "node_modules/unlisted/package.json": { name: "unlisted" },
        "node_modules/unlisted/marko.json": { exports: "./dist" },
        "node_modules/unlisted/dist/unlisted-tag.marko": "",
        "marko.json": { "taglib-imports": ["unlisted/marko.json"] },
      });
      assert.equal(
        template("unlisted-tag"),
        file("node_modules/unlisted/dist/unlisted-tag.marko"),
      );
    });

    it("reads an import inside an installed package as part of that package", () => {
      write({
        "package.json": { name: "app", dependencies: { outer: "*" } },
        "node_modules/outer/marko.json": {
          "taglib-imports": ["./inner/marko.json"],
        },
        "node_modules/outer/inner/marko.json": {
          "<inner-tag>": { template: "./t.marko" },
        },
        "node_modules/outer/inner/t.marko": "",
      });
      const tag = lookup().getTag("inner-tag");
      assert.equal(tag.packageName, "outer");
      assert.equal(tag.packageRoot, file("node_modules/outer"));
    });

    it("finds a taglib hoisted to an ancestor, or hidden by package exports, and skips a dependency not installed", () => {
      write({
        "package.json": {
          name: "app",
          dependencies: { lib: "*", missing: "*" },
        },
        "node_modules/lib/package.json": {
          name: "lib",
          exports: { ".": "./index.js" },
        },
        "nested/package.json": {
          name: "nested",
          dependencies: { lib: "*", other: "*" },
        },
      });
      assert.ok(lookup().getTag("lib-tag"));
      const nested = lookup("nested");
      assert.ok(nested.getTag("lib-tag"));
      assert.ok(nested.getTag("other-tag"));
    });

    it("reads a symlinked package from where its files are, as pnpm installs it", () => {
      write({
        "package.json": { name: "app", dependencies: { linked: "*" } },
        "store/linked/package.json": { name: "linked" },
        "store/linked/marko.json": {
          "<linked-tag>": { template: "./t.marko" },
        },
        "store/linked/t.marko": "",
      });
      fs.symlinkSync(file("store/linked"), file("node_modules/linked"), "dir");
      const tag = lookup().getTag("linked-tag");
      assert.equal(tag.template, file("store/linked/t.marko"));
      assert.equal(tag.packageName, "linked");
    });

    it("keeps a built-in taglib's tags-dir and watch file for its own directory", () => {
      const props = { "tags-dir": "./widgets" };
      write({
        "legacy/marko.json": props,
        "legacy/widgets/w-box.marko": "",
      });
      const translator = {
        taglibs: [[file("legacy/marko.json"), props]],
        tagDiscoveryDirs: ["tags"],
      };
      const tags = lookup("legacy/widgets", translator);
      assert.equal(tags.exclusiveTagDiscoveryDirs, false);
      assert.ok(
        configFiles("legacy/widgets", translator).includes(
          file("legacy/marko.json"),
        ),
      );
    });

    it("gives a built-in taglib's own directory its hooks once", () => {
      const props = { transform: "./transform.js" };
      write({
        "node_modules/lib/transform.js": "",
        "node_modules/lib/marko.json": props,
      });
      const translator = {
        taglibs: [[file("node_modules/lib/marko.json"), props]],
        tagDiscoveryDirs: ["tags"],
      };
      assert.deepEqual(
        lookup("node_modules/lib", translator).transformers.map(
          (hook) => hook.path,
        ),
        [file("node_modules/lib/transform.js")],
      );
    });

    it("loads a taglib built in from an installed package once, as installed", () => {
      write({
        "node_modules/lib/transform.js": "",
        "node_modules/lib/lib-tag.marko": "",
      });
      const props = {
        transform: "./transform.js",
        "<lib-builtin>": { template: "./lib-tag.marko" },
      };
      write({ "node_modules/lib/marko.json": props });
      const translator = {
        taglibs: [[file("node_modules/lib/marko.json"), props]],
        tagDiscoveryDirs: ["tags"],
      };
      const tags = lookup("", translator);
      assert.deepEqual(
        tags.transformers.map((hook) => hook.path),
        [file("node_modules/lib/transform.js")],
      );
      assert.equal(tags.getTag("lib-builtin").packageName, "lib");
    });

    it("only follows exports for an installed taglib", () => {
      write({
        "marko.json": { exports: "./dist" },
        "dist/tag-b.marko": "",
        "tags/tag-a.marko": "",
      });
      assert.equal(template("tag-a"), file("tags/tag-a.marko"));
      assert.equal(lookup().getTag("tag-b"), undefined);
    });

    it("leaves out an excluded package or directory", () => {
      // Exclusions last for the process, so this package is this test's own.
      write({
        "package.json": {
          name: "app",
          dependencies: { lib: "*", excluded: "*" },
        },
        "node_modules/excluded/marko.json": {
          "<excluded-tag>": { html: true },
        },
        "tags/tag-a.marko": "",
        "src/tags/tag-b.marko": "",
      });
      taglib.excludePackage("excluded");
      taglib.excludeDir(file("tags"));
      taglib.excludeDir(file("src"));
      const tags = lookup("src");
      assert.ok(tags.getTag("lib-tag"));
      assert.equal(tags.getTag("excluded-tag"), undefined);
      assert.equal(tags.getTag("tag-a"), undefined);
      assert.equal(tags.getTag("tag-b"), undefined);
    });
  });

  describe("class API taglibs", () => {
    it("reads attribute and nested tag declarations only for the class API", () => {
      write({
        "components/fancy/index.marko": "",
        "components/fancy/marko-tag.json": {
          "@size": { "default-value": "m", "target-property": "dimension" },
          "@data-*": { pattern: true, "preserve-name": true },
          "@*": { "target-property": "rest" },
          "@items <item>[]": {},
          "nested-tags": { header: { "target-property": "head" } },
        },
      });
      const fancy = lookup("", classTranslator).getTag("fancy");
      assert.equal(fancy.attributes.size.defaultValue, "m");
      assert.equal(fancy.attributes.size.targetProperty, "dimension");
      assert.equal(fancy.attributes["*"].dynamicAttribute, true);
      assert.ok(fancy.patternAttributes[0].pattern.test("data-x"));
      assert.equal(fancy.patternAttributes[0].preserveName, true);

      const item = lookup("", classTranslator).getTag("fancy:item");
      assert.equal(item.isNestedTag, true);
      assert.equal(item.isRepeated, true);
      assert.equal(item.targetProperty, "items");
      assert.equal(
        lookup("", classTranslator).getTag("fancy:header").targetProperty,
        "head",
      );
      // A nested tag's target property is an attribute too, unless repeated.
      assert.ok(fancy.attributes.head);
      assert.ok(fancy.attributes.items);
      assert.equal(fancy.attributes.item, undefined);

      write({
        "marko.json": {
          "<plain>": {
            "@size": "string",
            template: "./components/fancy/index.marko",
          },
        },
      });
      const plain = lookup().getTag("plain");
      assert.equal(plain.attributes, undefined);
    });

    it("finds a renderer, hook file or own-named template only where class API tags can live", () => {
      write({
        "components/tag-a/renderer.js": "",
        "components/tag-b/transformer.js": "",
        "components/tag-c/tag-c.marko": "",
        "components/tag-d/marko-tag.json": { "code-generator": "./gen.js" },
        "components/tag-d/gen.js": "",
        "tags/tag-e/renderer.js": "",
      });
      const tags = lookup("", classTranslator);
      assert.equal(
        tags.getTag("tag-a").renderer,
        file("components/tag-a/renderer.js"),
      );
      assert.equal(
        tags.getTag("tag-b").transformers[0].path,
        file("components/tag-b/transformer.js"),
      );
      assert.equal(
        tags.getTag("tag-c").template,
        file("components/tag-c/tag-c.marko"),
      );
      assert.equal(
        tags.getTag("tag-d").translator.path,
        file("components/tag-d/gen.js"),
      );
      assert.equal(tags.getTag("tag-e"), undefined);
    });

    it("takes a .marko renderer as the tag's template too", () => {
      write({
        "marko.json": { "<fancy>": { renderer: "./fancy.marko" } },
        "fancy.marko": "",
      });
      const tag = lookup("", classTranslator).getTag("fancy");
      assert.equal(tag.renderer, file("fancy.marko"));
      assert.equal(tag.template, file("fancy.marko"));
    });

    it("resolves an extensionless renderer, trying .marko after what require loads", () => {
      write({
        "marko.json": {
          "<fancy>": { renderer: "./fancy" },
          "<plain>": { renderer: "./plain" },
        },
        "fancy.marko": "",
        "plain.js": "",
        "plain.marko": "",
      });
      const tags = lookup("", classTranslator);
      assert.equal(tags.getTag("fancy").renderer, file("fancy.marko"));
      assert.equal(tags.getTag("plain").renderer, file("plain.js"));
      assert.equal(tags.getTag("plain").template, undefined);
    });

    it("declares a shorthand nested tag's target property, unless repeated", () => {
      write({
        "components/card/index.marko": "",
        "components/card/marko-tag.json": {
          "@*": { "target-property": "rest" },
          "<header>": {},
          "<item>[]": {},
        },
      });
      const card = lookup("", classTranslator).getTag("card");
      assert.ok(card.attributes.header);
      assert.equal(card.attributes.item, undefined);
    });

    it("names a tag from its marko-tag.json even without an entry", () => {
      write({ "components/tag-a/marko-tag.json": { "@x": "string" } });
      const tag = lookup("", classTranslator).getTag("tag-a");
      assert.equal(tag.template, undefined);
      assert.equal(tag.renderer, undefined);
    });
  });

  describe("caches", () => {
    it("shares a lookup with directories that add no taglibs", () => {
      write({ "tags/tag-a.marko": "", "src/pages/tags/tag-b.marko": "" });
      const root = lookup();
      assert.equal(lookup("src"), root);
      const pages = lookup("src/pages");
      assert.notEqual(pages, root);
      assert.equal(lookup("src/pages/home"), pages);
      assert.equal(pages.getTag("tag-a").template, file("tags/tag-a.marko"));
      assert.equal(
        template("src/pages/home/tag-b"),
        file("src/pages/tags/tag-b.marko"),
      );
    });

    it("sees added tags, tags dirs and marko.json changes once cleared", () => {
      write({ "tags/tag-a.marko": "", "src/page.marko": "" });
      const tags = lookup("src");
      assert.equal(tags.getTag("tag-b"), undefined);
      write({
        "tags/tag-b.marko": "",
        "src/tags/tag-c.marko": "",
        "marko.json": { "<tag-d>": { template: "./src/page.marko" } },
      });
      assert.equal(tags.getTag("tag-b"), undefined);

      taglib.clearCaches();
      assert.equal(template("src/tag-b"), file("tags/tag-b.marko"));
      assert.equal(template("src/tag-c"), file("src/tags/tag-c.marko"));
      assert.equal(template("src/tag-d"), file("src/page.marko"));
    });

    it("finds nothing in a tags dir removed before it was listed", () => {
      write({ "tags/tag-a.marko": "" });
      const tags = lookup();
      fs.rmSync(file("tags"), { recursive: true });
      assert.equal(tags.getTag("tag-a"), undefined);
    });
  });

  describe("file systems", () => {
    it("reads through the file system it is given, apart from the default", () => {
      write({ "tags/tag-a.marko": "" });
      const hidden = file("tags");
      const fileSystem = {
        readFileSync: fs.readFileSync,
        readdirSync: fs.readdirSync,
        statSync: (path) => (path === hidden ? undefined : fs.statSync(path)),
      };
      assert.equal(
        taglib
          .buildLookup(dir, tagsTranslator, undefined, fileSystem)
          .getTag("tag-a"),
        undefined,
      );
      assert.equal(template("tag-a"), file("tags/tag-a.marko"));
    });

    it("reads through a statSync patched over Node's fs that ignores throwIfNoEntry", () => {
      write({ "tags/tag-a.marko": "" });
      const { statSync } = fs;
      const hidden = file("tags");
      fs.statSync = (path) => (path === hidden ? undefined : statSync(path));
      try {
        assert.equal(lookup().getTag("tag-a"), undefined);
      } finally {
        fs.statSync = statSync;
      }
    });

    it("resolves a taglib import through the file system it is given", () => {
      write({ "marko.json": { "taglib-imports": ["./lib/marko.json"] } });
      const virtual = {
        [file("lib/marko.json")]: JSON.stringify({
          "<virtual-tag>": { template: "./virtual.marko" },
        }),
        [file("lib/virtual.marko")]: "",
      };
      const fileSystem = {
        readFileSync: (path, encoding) =>
          path in virtual ? virtual[path] : fs.readFileSync(path, encoding),
        readdirSync: fs.readdirSync,
        statSync: (path) =>
          path in virtual ? { isDirectory: () => false } : fs.statSync(path),
      };
      const tag = taglib
        .buildLookup(dir, tagsTranslator, undefined, fileSystem)
        .getTag("virtual-tag");
      assert.equal(tag.template, file("lib/virtual.marko"));
    });

    it("resolves a renderer through the file system it is given", () => {
      write({ "marko.json": { "<fancy>": { renderer: "./fancy" } } });
      const virtual = file("fancy.marko");
      const fileSystem = {
        readFileSync: fs.readFileSync,
        readdirSync: fs.readdirSync,
        statSync: (path) =>
          path === virtual ? { isDirectory: () => false } : fs.statSync(path),
      };
      const tag = taglib
        .buildLookup(dir, classTranslator, undefined, fileSystem)
        .getTag("fancy");
      assert.equal(tag.renderer, virtual);
      assert.equal(tag.template, virtual);
    });

    it("lists and stats without options, as file systems adding virtual files expect", () => {
      write({
        "marko.json": { "<tag-a>": { template: "./a.marko" } },
        "a.marko": "",
        "tags/real.marko": "",
        "tags/group/tag-b.marko": "",
      });
      const virtual = file("tags/virtual.marko");
      const fileSystem = {
        readFileSync: fs.readFileSync,
        readdirSync: (path, options) => {
          assert.equal(options, undefined);
          const names = fs.readdirSync(path);
          return path === file("tags") ? names.concat("virtual.marko") : names;
        },
        statSync: (path, options) => {
          assert.equal(options, undefined);
          return path === virtual
            ? { isDirectory: () => false }
            : fs.statSync(path);
        },
      };
      const tags = taglib.buildLookup(
        file("src"),
        tagsTranslator,
        undefined,
        fileSystem,
      );
      assert.equal(tags.getTag("tag-a").template, file("a.marko"));
      assert.equal(tags.getTag("virtual").template, virtual);
      assert.equal(tags.getTag("real").template, file("tags/real.marko"));
      assert.equal(
        tags.getTag("tag-b").template,
        file("tags/group/tag-b.marko"),
      );
    });
  });

  describe("released translators and tools", () => {
    it("reads class API taglibs for a translator that discovers components but sets no flag", () => {
      write({
        "components/tag-a/renderer.js": "",
        "components/tag-b/marko-tag.json": {
          "@size": { "default-value": "m" },
        },
        "components/tag-b/index.marko": "",
      });
      const translator = { taglibs: [], tagDiscoveryDirs: ["components"] };
      const tags = lookup("", translator);
      assert.equal(
        tags.getTag("tag-a").renderer,
        file("components/tag-a/renderer.js"),
      );
      assert.equal(tags.getTag("tag-b").attributes.size.defaultValue, "m");
    });

    it("gives tags getAttribute and forEachAttribute, allowing any attribute when none are declared", () => {
      write({
        "components/plain.marko": "",
        "components/fancy/index.marko": "",
        "components/fancy/marko-tag.json": {
          "@size": {},
          "@data-*": { pattern: true },
        },
      });
      const tags = lookup("", classTranslator);
      const plain = tags.getTag("plain");
      assert.equal(plain.getAttribute("anything").name, "*");
      const fancy = tags.getTag("fancy");
      assert.equal(fancy.getAttribute("size").name, "size");
      assert.equal(fancy.getAttribute("data-x").name, "data-*");
      assert.equal(fancy.getAttribute("other"), undefined);
      const names = [];
      fancy.forEachAttribute((attr) => names.push(attr.name));
      assert.deepEqual(names, ["size"]);
    });

    it("lists no attributes for a tag declaring only patterns", () => {
      write({
        "components/data/index.marko": "",
        "components/data/marko-tag.json": { "@data-*": { pattern: true } },
      });
      const tag = lookup("", classTranslator).getTag("data");
      const names = [];
      tag.forEachAttribute((attr) => names.push(attr.name));
      assert.deepEqual(names, []);
      assert.equal(tag.getAttribute("other"), undefined);
    });

    it("declares <meta>'s content attribute, which Marko 6.4 checks", () => {
      assert.ok(lookup().getTag("meta").attributes.content);
    });
  });

  describe("comments", () => {
    it("reads comments in marko.json and marko-tag.json, but not inside strings", () => {
      write({
        "marko.json": [
          "{",
          '  // a "quoted" note',
          '  "<tag-a>": { "template": "./a//tag-a.marko" }, /* a block',
          "  over two lines */",
          '  "<tag-b>": { "template": "./b/tag-b.marko" } // last\r',
          "}",
        ].join("\n"),
        "a/tag-a.marko": "",
        "b/tag-b.marko": "",
        "tags/tag-c/marko-tag.json": `{ /* ${"long ".repeat(40)}*/ "html": false } // eof`,
        "tags/tag-c/index.marko": "",
        "tags/tag-d/marko-tag.json": '{ "name": "q\\"//d", "html": false }',
        "tags/tag-d/index.marko": "",
      });
      assert.equal(template("tag-a"), file("a/tag-a.marko"));
      assert.equal(template("tag-b"), file("b/tag-b.marko"));
      assert.equal(template("tag-c"), file("tags/tag-c/index.marko"));
      assert.equal(
        lookup().getTag('q"//d').template,
        file("tags/tag-d/index.marko"),
      );
    });

    it("leaves an unclosed comment for the JSON parser to report", () => {
      write({ "marko.json": '{ "<tag-a>": {} /* unclosed' });
      assert.throws(lookup, /Unable to parse JSON file/);
    });

    it("reports a parse error at its line in the file as written", () => {
      write({
        "marko.json": '{\n  /* a\n     note */\n  "<tag-a>": {},,\n}',
      });
      assert.throws(lookup, /Unable to parse JSON file.*line 4 column/);
    });
  });

  describe("errors", () => {
    it("hands a broken marko.json to onError, and reads it again once told it is fixed", () => {
      write({ "marko.json": "{ BAD JSON", "tags/tag-a.marko": "" });
      const errors = [];
      const broken = taglib.buildLookup(dir, tagsTranslator, (err) =>
        errors.push(err.message),
      );
      assert.match(errors[0], /Unable to parse JSON file at path/);
      assert.ok(broken.getTag("div"));
      assert.equal(broken.getTag("tag-a"), undefined);

      // Failed until what it read changes, as a lookup that built is kept.
      write({ "marko.json": {} });
      assert.throws(lookup, /Unable to parse JSON file at path/);
      taglib.invalidate([file("marko.json")]);
      assert.equal(template("tag-a"), file("tags/tag-a.marko"));
    });

    it("throws for a tags-dir that does not exist", () => {
      write({ "marko.json": { "tags-dir": "./missing" } });
      assert.throws(lookup, /The tags directory ".*missing" does not exist/);
    });

    it("does not find a tag that fails to load, and keeps why for a compile that uses it", () => {
      write({
        "marko.json": {
          "<tag-a>": "./missing/marko-tag.json",
          "<tag-b>": "./tags/tag-b/marko-tag.json",
          "<tag-c>": { template: "./missing.marko" },
        },
        "tags/tag-b/marko-tag.json": "{ BAD JSON",
        "tags/tag-e/marko-tag.json": { template: "./missing.marko" },
        "tags/tag-f.marko": "",
        "src/tags/tag-g.marko": "",
      });
      const reasons = {
        "tag-a": /Tag at path ".*marko-tag\.json" does not exist/,
        "tag-b": /Unable to parse JSON file at path/,
        "tag-c": /Template at path ".*missing\.marko" does not exist/,
        "tag-e": /Template at path ".*missing\.marko" does not exist/,
      };
      for (const tags of [lookup(), lookup("src")]) {
        for (const name in reasons) {
          assert.equal(tags.getTag(name), undefined);
          assert.match(tags.getTagError(name).message, reasons[name]);
          assert.equal(tags.getTag(name + ":nested"), undefined);
          assert.equal(
            tags.getTagError(name + ":nested"),
            tags.getTagError(name),
          );
          assert.ok(tags.getTagsSorted().every((tag) => tag.name !== name));
        }
        assert.equal(tags.getTag("tag-f").template, file("tags/tag-f.marko"));
        assert.equal(tags.getTagError("tag-f"), undefined);
        assert.equal(tags.getTagError("tag-z"), undefined);
      }
    });

    it("fails a compile at each use of a tag that fails to load, and no other", () => {
      write({
        "marko.json": { "<tag-a>": { template: "./missing.marko" } },
        "tags/tag-b/marko-tag.json": "{ BAD JSON",
        "tags/tag-f.marko": "<div/>",
      });
      const compile = (code, errorRecovery) =>
        compileSync(code, file(errorRecovery ? "editor.marko" : "page.marko"), {
          translator: runtimeTagsTranslator,
          errorRecovery,
          babelConfig: {
            babelrc: false,
            configFile: false,
            browserslistConfigFile: false,
          },
        });
      const reasons = {
        "tag-a": /Template at path ".*missing\.marko" does not exist/,
        "tag-b": /Unable to parse JSON file at path/,
      };
      for (const name in reasons) {
        const code = `<tag-f/>\n<div>\n  <${name}/>\n</div>`;
        const [diagnostic] = compile(code, true).meta.diagnostics;
        assert.match(diagnostic.label, reasons[name]);
        assert.deepEqual(diagnostic.loc.start, { line: 3, column: 3 });
        assert.deepEqual(diagnostic.loc.end, { line: 3, column: 8 });
        assert.throws(() => compile(code, false), reasons[name]);
        assert.throws(() => compile(code, false), /page\.marko:3:4/);
      }
      assert.ok(compile("<tag-f/>", false).code);
    });

    it("keeps the tags above a directory whose taglibs fail to load, given an onError", () => {
      write({
        "tags/tag-a.marko": "",
        "src/marko.json": { "taglib-imports": ["./missing/marko.json"] },
        "src/tags/tag-b.marko": "",
        "src/pages/tags/tag-c.marko": "",
      });
      for (const rel of ["src", "src/pages"]) {
        const errors = [];
        const tags = taglib.buildLookup(file(rel), tagsTranslator, (err) =>
          errors.push(err.message),
        );
        assert.match(errors[0], /Import not found: \.\/missing\/marko\.json/);
        assert.equal(errors.length, 1);
        assert.equal(tags.getTag("tag-a").template, file("tags/tag-a.marko"));
        assert.equal(tags.getTag("tag-b"), undefined);
        assert.ok(tags.getTag("div"));
        assert.throws(() => lookup(rel), /Import not found/);
      }
    });

    it("throws for a tags-dir given as an object", () => {
      write({
        "marko.json": { "tags-dir": { path: "./tags", prefix: "ui-" } },
        "tags/tag-a.marko": "",
      });
      assert.throws(
        lookup,
        /the \{ path, prefix \} form is no longer supported/,
      );
    });

    it("reads a malformed package.json as naming no package", () => {
      write({
        "src/package.json": "{ BAD JSON",
        "src/tags/tag-a.marko": "",
        "tags/tag-b.marko": "",
      });
      assert.equal(template("src/tag-b"), file("tags/tag-b.marko"));
    });
  });

  describe("dependencies", () => {
    const compile = (rel, output = "html", inCache = cache) =>
      compileSync(fs.readFileSync(file(rel), "utf8"), file(rel), {
        translator: runtimeTagsTranslator,
        output,
        errorRecovery: true,
        writeVersionComment: false,
        cache: inCache,
        reportsChanges: true,
      });
    // As a bundler compiles, throwing for an error.
    const compileStrict = (rel, output = "html") =>
      compileSync(fs.readFileSync(file(rel), "utf8"), file(rel), {
        translator: runtimeTagsTranslator,
        output,
        writeVersionComment: false,
        cache,
        reportsChanges: true,
      });
    let cache;
    beforeEach(() => (cache = new Map()));

    it("gives integrations that predate dependencies the files and templates main did", () => {
      write({
        "marko.json": { "<tag-b>": { template: "./tag-b.marko" } },
        "tag-b.marko": "<return=1/>\n",
        "src/tags/tag-a.marko": "<return=1/>\n",
        "src/page.marko": "<tag-a/x/>\n<tag-b/y/>\n",
      });
      const { meta } = compile("src/page.marko");
      // Its lookups' `marko.json` files, not their tags dirs or tags.
      assert.deepEqual(meta.watchFiles, [file("marko.json")]);
      assert.deepEqual(meta.analyzedTags.sort(), [
        file("src/tags/tag-a.marko"),
        file("tag-b.marko"),
      ]);
    });

    it("lists what a compile read, and its lookups' shared", () => {
      write({
        "src/tags/tag-a/index.marko": "<return=1/>\n",
        // Names a file its directory's listing covers, so it is recorded once.
        "src/tags/tag-a/marko-tag.json": { template: "./index.marko" },
        "src/page.marko": "<tag-a/x/>\n",
      });
      const { meta } = compile("src/page.marko");
      // The output's, its template's, then the lookups of `src`, the root and
      // its package, each visited and added to `seen`.
      const seen = new Set();
      assert.deepEqual(listed(meta.dependencies, seen), {
        file: [
          file("src/tags/tag-a/index.marko"),
          file("src/tags/tag-a/marko-tag.json"),
          file("package.json"),
          file("package.json"),
        ],
        missing: [
          file("src/package.json"),
          file("src/marko.json"),
          file("marko.json"),
          file("tags"),
        ],
        // Looked in for its style file, then for tags.
        directory: [file("src"), file("src/tags"), file("src/tags/tag-a")],
      });
      assert.equal(seen.size, 5);
      // Another output visits only its own reads, those it builds on seen.
      assert.deepEqual(
        listed(compile("src/page.marko", "dom").meta.dependencies, seen),
        {
          file: [],
          missing: [],
          directory: [],
        },
      );
      assert.equal(seen.size, 6);
      // Nothing on any layer for a tool to read, or to serialize.
      for (const deps of seen) {
        const keys = Reflect.ownKeys(deps);
        for (
          let proto = Object.getPrototypeOf(deps);
          proto !== Object.prototype;
          proto = Object.getPrototypeOf(proto)
        ) {
          for (const key of Reflect.ownKeys(proto)) {
            if (key !== "constructor") keys.push(key);
          }
        }
        assert.deepEqual(keys, []);
      }
      assert.equal(JSON.stringify(meta.dependencies), "{}");
    });

    it("lists every directory and tag file a tags dir read", () => {
      write({
        "src/tags/group/tag-b.marko": "",
        "src/tags/group/empty/notes.txt": "",
        "src/tags/broken/marko-tag.json": "{ BAD JSON",
        "src/tags/tag-c/index.marko": "",
        "src/components/tag-d/renderer.js": "",
        "src/components/group/tag-e.marko": "",
      });
      for (const [translator, expected] of [
        [
          tagsTranslator,
          {
            files: ["src/tags/broken/marko-tag.json"],
            // A group, listed as a tag directory first.
            directories: [
              "src/tags",
              "src/tags/group",
              "src/tags/group",
              "src/tags/group/empty",
              "src/tags/broken",
              "src/tags/tag-c",
            ],
          },
        ],
        [
          classTranslator,
          {
            files: ["src/tags/broken/marko-tag.json"],
            directories: [
              "src/tags",
              "src/tags/group",
              "src/tags/group",
              "src/tags/group/empty",
              "src/tags/broken",
              "src/tags/tag-c",
              "src/components",
              "src/components/group",
              "src/components/group",
              "src/components/tag-d",
            ],
          },
        ],
      ]) {
        taglib.clearCaches();
        const { file: files, directory: directories } = listed(
          taglib.getDependencies([file("src")], translator),
        );
        assert.deepEqual(
          {
            files: files.filter((f) => f.startsWith(file("src/"))),
            directories: directories
              .filter((d) => d.startsWith(file("src/")))
              .map((d) => path.relative(dir, d))
              .sort(),
          },
          {
            files: expected.files.map(file),
            directories: expected.directories.sort(),
          },
        );
      }
    });

    it("marks stale only the templates a reported path changes, compared with what was read", () => {
      write({
        "src/pages/a.marko": "<new-tag/>\n",
        "src/pages/b.marko": "<div/>\n",
        "src/other/c.marko": "<div/>\n",
      });
      const compileAll = () => {
        for (const rel of [
          "src/pages/a.marko",
          "src/pages/b.marko",
          "src/other/c.marko",
        ]) {
          compile(rel);
        }
      };
      const report = (files, reported = Object.keys(files)) => {
        write(files);
        const stale = taglib.invalidate(reported.map(file), cache);
        compileAll();
        return stale
          .map((f) => path.basename(f, ".marko"))
          .sort()
          .join();
      };
      compileAll();

      assert.equal(report({ "src/tags/new-tag.marko": "<span/>\n" }), "a,b,c");
      assert.match(compile("src/pages/a.marko").code, /new-tag\.marko/);
      assert.equal(report({ "src/tags/new-tag.marko": "<em/>\n" }), "a");
      assert.equal(report({ "src/tags/helper.ts": "" }), "");
      assert.equal(report({}, ["src/tags"]), "");
      // Each template under the tags dir's directory, the tag's own included.
      assert.equal(
        report({ "src/tags/tag-b.marko": "" }, ["src/tags"]),
        "a,b,c,new-tag",
      );
      // Added, then removed, with only their directory reported.
      assert.equal(report({ "src/other/marko.json": {} }, ["src/other"]), "c");
      fs.rmSync(file("src/other/marko.json"));
      assert.equal(report({}, ["src/other"]), "c");
      fs.rmSync(file("src/tags/tag-b.marko"));
      assert.equal(report({}, ["src/tags"]), "a,b,c,new-tag");
      assert.equal(report({ "src/pages/b.style.css": "" }), "b");
      assert.match(compile("src/pages/b.marko", "dom").code, /b\.style\.css/);
      // Editing a file only found (its content unread) changes nothing.
      assert.equal(report({ "src/pages/b.style.css": "a {}" }), "");
      assert.equal(report({ "src/pages/a.style.css": "" }, ["src/pages"]), "a");
      assert.match(compile("src/pages/a.marko", "dom").code, /a\.style\.css/);
      fs.rmSync(file("src/pages/a.style.css"));
      assert.equal(report({}, ["src/pages"]), "a");
      // Another template's style file, where each looked for its own.
      assert.equal(report({ "src/pages/d.style.css": "" }), "");
      fs.rmSync(file("src/tags/new-tag.marko"));
      assert.equal(report({}, ["src/tags/new-tag.marko"]), "a,b,c,new-tag");
      // Every compile goes stale once the caches are cleared, unreported.
      write({ "src/tags/new-tag.marko": "" });
      taglib.clearCaches();
      assert.match(compile("src/pages/a.marko").code, /new-tag\.marko/);
    });

    it("takes a reported path alone, relative, not normalized, or ending in a separator", () => {
      write({
        "src/page.marko": "<tag-a/>\n",
        "src/tags/tag-a.marko": "<div/>\n",
      });
      const { sep } = path;
      const stale = (reported) => {
        compile("src/page.marko");
        return taglib
          .invalidate([reported], cache)
          .map((f) => path.relative(dir, f))
          .sort()
          .join();
      };
      for (const reported of [
        path.relative(process.cwd(), file("src/tags/tag-a.marko")),
        [dir, "src", ".", "tags", "tag-a.marko"].join(sep),
        [dir, "src", "", "tags", "tag-a.marko"].join(sep),
      ]) {
        assert.equal(stale(reported), "src/page.marko", reported);
      }
      // One path alone, not in a list.
      compile("src/page.marko");
      assert.deepEqual(
        taglib
          .invalidate(file("src/tags/tag-a.marko"), cache)
          .map((f) => path.relative(dir, f)),
        ["src/page.marko"],
      );
      // A directory a tag was added to, as a watcher may report it.
      write({ "src/tags/tag-b.marko": "" });
      assert.equal(
        stale(file("src/tags") + sep),
        "src/page.marko,src/tags/tag-a.marko",
      );
    });

    it("refreshes the same, told what changed or compared with disk", () => {
      const project = {
        "src/tags/tag-a.marko": "<tag-b/>\n",
        "src/tags/tag-b.marko": "<div/>\n",
        "src/tags/tag-c/marko-tag.json": { "parse-options": {} },
        "src/tags/tag-c/index.marko": "<div/>\n",
        "src/pages/page.marko":
          'import Foo from "../../lib/foo.marko"\n<tag-a/>\n<Foo/>\n',
        "src/pages/other.marko": "<tag-c/>\n",
        "src/lone/lone.marko": "<div/>\n",
      };
      const templates = [
        "src/pages/page.marko",
        "src/pages/other.marko",
        "src/lone/lone.marko",
      ];
      // Each change, the paths a watcher reports for it, and what goes stale.
      const changes = [
        [{}, [], ""],
        [{ "src/tags/tag-b.marko": "<span/>\n" }, null, "page,tag-a"],
        [
          { "src/tags/new-tag.marko": "" },
          null,
          "index,lone,other,page,tag-a,tag-b",
        ],
        [{ "src/pages/page.style.css": "" }, null, "page"],
        [{ "src/pages/page.style.css": "a {}" }, null, ""],
        [{ "src/pages/notes.md": "" }, null, ""],
        [
          { "src/tags/tag-c/marko-tag.json": {} },
          null,
          "index,lone,other,page,tag-a,tag-b",
        ],
        [{ "lib/foo.marko": "<div/>\n" }, null, "page"],
        [{ "src/lone/marko.json": {} }, null, "lone"],
      ];
      for (const told of [true, false]) {
        fs.rmSync(file("lib"), { recursive: true, force: true });
        fs.rmSync(file("src"), { recursive: true, force: true });
        write(project);
        tick();
        taglib.clearCaches();
        cache = new Map();
        for (const rel of templates) compile(rel);
        for (const [files, reported, expected] of changes) {
          writeChanged(files);
          const stale = told
            ? taglib.invalidate(
                (reported || Object.keys(files)).map(file),
                cache,
              )
            : taglib.revalidate(cache);
          assert.equal(
            stale
              .map((f) => path.basename(f, ".marko"))
              .sort()
              .join(),
            expected,
            `${told ? "told" : "not told"}: ${Object.keys(files)}`,
          );
          for (const rel of templates) compile(rel);
        }
      }
    });

    it("marks stale on a check a template that read other content than another did", () => {
      write({
        "src/a.marko": "<tag-c/>\n",
        "src/b.marko": "<tag-c/>\n",
        "src/tags/tag-c.marko": "<div/>\n",
      });
      tick();
      compile("src/a.marko");
      // Read changed, then changed back, and reported neither time.
      writeChanged({ "src/tags/tag-c.marko": "<span/>\n" });
      compile("src/b.marko");
      writeChanged({ "src/tags/tag-c.marko": "<div/>\n" });
      assert.deepEqual(taglib.revalidate(cache).sort(), [
        file("src/a.marko"),
        file("src/b.marko"),
      ]);
    });

    it("counts a file modified as it was read changed, once read again", () => {
      write({
        "src/a.marko": "<tag-c/>\n",
        "src/tags/tag-c.marko": "<div/>\n",
      });
      const { now } = Date;
      // Read at the very time the file was modified, as its time reads back,
      // which can be below the one it was stamped with.
      const at = new Date(Math.floor(now()) + 60_000);
      fs.utimesSync(file("src/tags/tag-c.marko"), at, at);
      const modified = fs.statSync(file("src/tags/tag-c.marko")).mtimeMs;
      try {
        Date.now = () => modified;
        compile("src/a.marko");
        assert.deepEqual(taglib.revalidate(cache), [file("src/a.marko")]);
        Date.now = () => modified + 1;
        compile("src/a.marko");
        assert.deepEqual(taglib.revalidate(cache), []);
      } finally {
        Date.now = now;
      }
    });

    it("counts a file changed after a lookup read it, though a compile read it later", () => {
      write({
        "src/marko.json": { transform: "./record.js" },
        "src/record.js":
          "module.exports = { Program() { globalThis.recordConfig(); } };\n",
        "src/page.marko": "<div/>\n",
      });
      globalThis.recordConfig = () =>
        taglib.addFileDependency(file("src/marko.json"));
      const { now } = Date;
      // Ahead of the clock, so only the modified time below can tell.
      const read = Math.floor(now()) + 60_000;
      try {
        Date.now = () => read;
        taglib.buildLookup(file("src"), runtimeTagsTranslator);
        Date.now = () => read + 2000;
        compile("src/page.marko");
      } finally {
        Date.now = now;
        delete globalThis.recordConfig;
      }
      const between = new Date(read + 1000);
      fs.utimesSync(file("src/marko.json"), between, between);
      assert.deepEqual(taglib.revalidate(cache), [file("src/page.marko")]);
    });

    it("counts a file written with an older modified time changed", () => {
      write({
        "src/a.marko": "<tag-c/>\n",
        "src/b.marko": "<div/>\n",
        "src/tags/tag-c.marko": "<div/>\n",
      });
      tick();
      // Builds the lookup at the real time, so only `a` reads in the past.
      compile("src/b.marko");
      const { now } = Date;
      const before = now() - 60_000;
      try {
        Date.now = () => before;
        compile("src/a.marko");
      } finally {
        Date.now = now;
      }
      // As a package extracts its files, with the times they were packed at.
      write({ "src/tags/tag-c.marko": "<span/>\n" });
      const packed = new Date(before - 60_000);
      fs.utimesSync(file("src/tags/tag-c.marko"), packed, packed);
      assert.deepEqual(taglib.revalidate(cache), [file("src/a.marko")]);
    });

    it("keeps no content of what a lookup read", () => {
      // A tag's `marko-tag.json`, mostly what no tag definition keeps.
      write({
        "src/tags/tag-a/marko-tag.json": JSON.stringify({
          html: true,
          description: "x".repeat(2 ** 24),
        }),
      });
      gc();
      const before = process.memoryUsage();
      const lookup = taglib.buildLookup(file("src"), runtimeTagsTranslator);
      assert.ok(lookup.getTag("tag-a"));
      gc();
      const after = process.memoryUsage();
      // A large file's content may be kept off the heap.
      assert.ok(after.heapUsed - before.heapUsed < 2 ** 23);
      assert.ok(after.external - before.external < 2 ** 23);
    });

    it("returns a template whatever cache compiled it, drops it from the one given, and others see it stale", () => {
      write({ "src/page.marko": "<tag-a/>\n" });
      const other = new Map();
      compile("src/page.marko", "html", other);
      compile("src/page.marko");
      const cached = cache.get(runtimeTagsTranslator);
      write({ "src/tags/tag-a.marko": "<div/>\n" });
      assert.deepEqual(
        taglib.invalidate([file("src/tags/tag-a.marko")], cache),
        [file("src/page.marko")],
      );
      assert.equal(cached.size, 0);
      // Still stale, so returned for another of its reads, to a cache without it.
      write({ "src/page.style.css": "" });
      assert.deepEqual(
        taglib.invalidate([file("src/page.style.css")], new Map()),
        [file("src/page.marko")],
      );
      assert.match(
        compile("src/page.marko", "html", other).code,
        /tag-a\.marko/,
      );
    });

    it("makes a page entry from the templates analysis read, reading none again until one is reported", () => {
      write({
        // Also looks for a template that is not there.
        "src/tags/tag-a.marko": 'import Gone from "./gone.marko";\n<tag-b/>\n',
        "src/tags/tag-b.marko": "<div/>\n",
        "src/page.marko": "<tag-a/>\n",
      });
      const reads = [];
      const fileSystem = recordingFS(reads);
      const pageEntry = () =>
        compileSync("<tag-a/>\n", file("src/page.marko"), {
          translator: runtimeTagsTranslator,
          output: "dom",
          entry: "page",
          linkAssets: { runtime: "asset-runtime", onAsset() {} },
          writeVersionComment: false,
          fileSystem,
          cache,
          reportsChanges: true,
        }).code;
      assert.doesNotMatch(pageEntry(), /tag-b/);
      // Unreported, so the analysis cached with the page stands.
      write({
        "src/tags/tag-b.marko":
          "<let/x=1/>\n<button onClick() { x++ }>${x}</button>\n",
      });
      reads.length = 0;
      assert.doesNotMatch(pageEntry(), /tag-b/);
      assert.deepEqual(reads, []);
      // Reported, it marks the page stale through tag-a, whose analysis read it.
      assert.deepEqual(
        taglib
          .invalidate([file("src/tags/tag-b.marko")], cache, fileSystem)
          .map((f) => path.relative(dir, f))
          .sort(),
        ["src/page.marko", "src/tags/tag-a.marko"],
      );
      assert.match(pageEntry(), /"\.\/tags\/tag-b\.marko"/);
    });

    it("checks what a cached template read against disk for a caller reporting no changes", () => {
      write({
        "src/tags/tag-a.marko": "<tag-b/>\n",
        "src/tags/tag-b.marko": "<div/>\n",
        "src/page.marko": "<tag-a/>\n",
      });
      const pageEntry = () =>
        compileSync("<tag-a/>\n", file("src/page.marko"), {
          translator: runtimeTagsTranslator,
          output: "dom",
          entry: "page",
          linkAssets: { runtime: "asset-runtime", onAsset() {} },
          writeVersionComment: false,
          cache,
        }).code;
      assert.doesNotMatch(pageEntry(), /tag-b/);
      // Read through tag-a, whose analysis loaded it.
      writeChanged({
        "src/tags/tag-b.marko":
          "<let/x=1/>\n<button onClick() { x++ }>${x}</button>\n",
      });
      assert.match(pageEntry(), /"\.\/tags\/tag-b\.marko"/);
    });

    it("returns a template whose compile failed, at any stage, once something it read changes", () => {
      // Each of the tag's hooks reads a file, and throws while it names its stage.
      const flag = file("stage.txt");
      globalThis.failAt = (stage) => {
        taglib.addFileDependency(flag);
        if (fs.readFileSync(flag, "utf8") === stage) throw new Error(stage);
      };
      const hook = (stage) =>
        `module.exports = (tag) => { globalThis.failAt("${stage}");${
          stage === "translate" ? " tag.remove();" : ""
        } };\n`;
      const stages = ["parse", "migrate", "transform", "analyze", "translate"];
      const files = {
        "stage.txt": "",
        "src/page.marko": "<hooked/>\n",
        "src/tags/hooked/marko-tag.json": {},
      };
      for (const stage of stages) {
        files["src/tags/hooked/marko-tag.json"][stage] = `./${stage}.js`;
        files[`src/tags/hooked/${stage}.js`] = hook(stage);
      }
      write(files);
      const report = (stage) => {
        write({ "stage.txt": stage });
        return taglib.invalidate([flag], cache);
      };
      try {
        compileStrict("src/page.marko");
        for (const stage of stages) {
          assert.deepEqual(report(stage), [file("src/page.marko")]);
          assert.throws(() => compileStrict("src/page.marko"), {
            message: new RegExp(stage),
          });
          assert.deepEqual(report(""), [file("src/page.marko")], stage);
          compileStrict("src/page.marko");
        }
        // A `migrate` output too, which no cache holds.
        report("parse");
        assert.throws(() => compileStrict("src/page.marko", "migrate"));
        assert.deepEqual(report(""), [file("src/page.marko")]);
      } finally {
        delete globalThis.failAt;
      }
    });

    it("returns a template whose compile failed for a tag it did not find once one is, with those whose analysis read it", () => {
      write({
        "src/page.marko": "<tag-a/>\n",
        "src/parent.marko": "<child/>\n",
        "src/tags/child.marko": "<tag-c/>\n",
      });
      const report = (files) => {
        write(files);
        return taglib
          .invalidate(Object.keys(files).map(file), cache)
          .map((f) => path.relative(file("src"), f).slice(0, -6))
          .sort()
          .join();
      };
      assert.throws(() => compileStrict("src/page.marko"));
      // Fails as the template it renders, loaded by its analysis, does.
      assert.throws(() => compileStrict("src/parent.marko"), /tag-c/);
      assert.equal(
        report({ "src/tags/tag-a.marko": "<div/>\n" }),
        "page,parent,tags/child",
      );
      assert.match(compileStrict("src/page.marko").code, /tag-a\.marko/);
      assert.throws(() => compileStrict("src/parent.marko"), /tag-c/);
      // A template's own source goes unreturned, as its caller reported it.
      assert.equal(report({ "src/tags/child.marko": "<div/>\n" }), "parent");
      compileStrict("src/parent.marko");
    });

    it("returns a template whose lookup failed to build once what it read or looked for changes", () => {
      // Each breaks the lookup of `src`, and the fix comes with the path reported.
      const cases = [
        // A tags-dir not made yet, reported by the directory made.
        [
          { "src/marko.json": { "tags-dir": "./components" } },
          { "src/components/tag-a.marko": "" },
          "src/components",
        ],
        // A marko.json malformed, that cannot be read, above, or imported.
        [
          { "src/marko.json": "{ BAD JSON" },
          { "src/marko.json": {} },
          "src/marko.json",
        ],
        [
          { "src/marko.json/notes.txt": "" },
          { "src/marko.json": {} },
          "src/marko.json",
        ],
        [{ "marko.json": "{ BAD JSON" }, { "marko.json": {} }, "marko.json"],
        [
          {
            "src/marko.json": { "taglib-imports": ["./lib/marko.json"] },
            "src/lib/marko.json": "{ BAD JSON",
          },
          { "src/lib/marko.json": {} },
          "src/lib/marko.json",
        ],
        // An import installed later, and an installed taglib fixed: installs, which
        // mark nothing until the caches are cleared.
        [
          { "src/marko.json": { "taglib-imports": ["dep/marko.json"] } },
          {
            "node_modules/dep/package.json": { name: "dep" },
            "node_modules/dep/marko.json": {},
          },
          "node_modules/dep/package.json",
        ],
        [
          {
            "package.json": { name: "app", dependencies: { pkg: "*" } },
            "node_modules/pkg/package.json": { name: "pkg" },
            "node_modules/pkg/marko.json": "{ BAD JSON",
          },
          { "node_modules/pkg/marko.json": {} },
          "node_modules/pkg/marko.json",
        ],
      ];
      for (const [broken, fixed, reported] of cases) {
        const isInstall = installed(file(reported));
        // Told the path, or finding it changed on disk.
        for (const told of [true, false]) {
          for (const entry of fs.readdirSync(dir)) {
            fs.rmSync(file(entry), { recursive: true });
          }
          write({ "package.json": { name: "app" } });
          write(broken);
          tick();
          // With no `node_modules` above the case's directory.
          const fileSystem = confinedFS();
          const compilePage = () =>
            compileSync("<div/>\n", file("src/page.marko"), {
              translator: runtimeTagsTranslator,
              writeVersionComment: false,
              cache,
              reportsChanges: true,
              fileSystem,
            });
          // Each its own error, as a caller may change the one it catches.
          assert.throws(compilePage, (err) => !!(err.message += " (seen)"));
          assert.throws(compilePage, (err) => !err.message.endsWith("(seen)"));
          const describe = (onError) =>
            taglib.getDependencies(
              [file("src")],
              runtimeTagsTranslator,
              onError,
              fileSystem,
            );
          assert.throws(() => describe());
          // What a tool watches for it, with the error once.
          const errors = [];
          const handle = describe((err) => errors.push(err));
          assert.equal(errors.length, 1);
          const { file: files, missing } = listed(handle);
          assert.equal(
            files.concat(missing).includes(file(reported)),
            !isInstall,
            reported,
          );
          fs.rmSync(file(reported), { recursive: true, force: true });
          if (told) write(fixed);
          else writeChanged(fixed);
          assert.deepEqual(
            told
              ? taglib.invalidate([file(reported)], cache, fileSystem)
              : taglib.revalidate(cache, fileSystem),
            isInstall ? [] : [file("src/page.marko")],
            reported,
          );
          if (isInstall) taglib.clearCaches();
          compilePage();
        }
      }
    });

    it("returns a template whose compile failed for a malformed marko-tag.json once it is fixed", () => {
      // Read when its tag first loads, by a lookup that built.
      write({
        "src/tags/tag-a/index.marko": "<div/>\n",
        "src/tags/tag-a/marko-tag.json": "{ BAD JSON",
        "src/page.marko": "<tag-a/>\n",
      });
      assert.throws(() => compileStrict("src/page.marko"), /Unable to parse/);
      write({ "src/tags/tag-a/marko-tag.json": {} });
      assert.deepEqual(
        taglib.invalidate([file("src/tags/tag-a/marko-tag.json")], cache),
        [file("src/page.marko")],
      );
      compileStrict("src/page.marko");
    });

    it("follows the templates its analysis read, through a cycle", () => {
      // The page renders tag-a, which renders tag-b (rendering tag-a back) and
      // tag-c (rendering tag-d).
      write({
        "src/tags/tag-a.marko": "<tag-b/>\n<tag-c/>\n",
        "src/tags/tag-b.marko": "<if=input.show><tag-a/></if>\n",
        "src/tags/tag-c.marko": "<tag-d/>\n",
        "src/tags/tag-d.marko": "<div/>\n",
        "src/page.marko": "<tag-a/>\n",
      });
      compile("src/page.marko");
      compile("src/tags/tag-b.marko");
      write({ "src/tags/tag-d.marko": "<span/>\n" });
      assert.deepEqual(
        taglib
          .invalidate([file("src/tags/tag-d.marko")], cache)
          .map((f) => path.relative(dir, f))
          .sort(),
        [
          "src/page.marko",
          "src/tags/tag-a.marko",
          "src/tags/tag-b.marko",
          "src/tags/tag-c.marko",
        ],
      );
    });

    it("makes a compile stale when a tags dir gone before its first use comes back", () => {
      write({ "src/tags/tag-a.marko": "", "src/page.marko": "<tag-b/>\n" });
      taglib.buildLookup(file("src"), runtimeTagsTranslator);
      fs.rmSync(file("src/tags"), { recursive: true });
      compile("src/page.marko");
      write({ "src/tags/tag-b.marko": "" });
      assert.deepEqual(
        taglib.invalidate([file("src/tags/tag-b.marko")], cache),
        [file("src/page.marko")],
      );
    });

    it("makes a compile stale when the file a tag entry names appears", () => {
      write({
        "src/marko.json": { "<tag-x>": "./tag-x.json" },
        "src/page.marko": "<tag-x/>\n",
      });
      compile("src/page.marko");
      write({ "src/tag-x.json": { html: true } });
      assert.deepEqual(taglib.invalidate([file("src/tag-x.json")], cache), [
        file("src/page.marko"),
      ]);
    });

    it("makes a compile stale when a template it looked for appears", () => {
      write({
        "src/page.marko":
          'import Foo from "../lib/foo.marko"\n<let/a=1/>\n<Foo a=a/>\n',
      });
      const { meta } = compile("src/page.marko", "dom");
      assert.ok(
        listed(meta.dependencies).missing.includes(file("lib/foo.marko")),
      );
      // Reported before it is there, it changes nothing.
      assert.deepEqual(taglib.invalidate([file("lib/foo.marko")], cache), []);
      write({ "lib/foo.marko": "<div>${input.a}</div>\n" });
      assert.deepEqual(taglib.invalidate([file("lib/foo.marko")], cache), [
        file("src/page.marko"),
      ]);
      assert.equal(
        compile("src/page.marko", "dom").code,
        compile("src/page.marko", "dom", new Map()).code,
      );
    });

    it("finds what a lookup looked for in a directory a compile listed through that listing", () => {
      // Each appears in the page's directory, which its lookup looked in.
      for (const [translator, appears, reported] of [
        [runtimeTagsTranslator, { "src/pages/marko.json": {} }, "src/pages"],
        [
          runtimeTagsTranslator,
          { "src/pages/package.json": { name: "pages" } },
          "src/pages/package.json",
        ],
        [
          runtimeTagsTranslator,
          { "src/pages/tags/tag-a.marko": "" },
          "src/pages/tags/tag-a.marko",
        ],
        [
          classAPITranslator,
          { "src/pages/components/tag-a.marko": "" },
          "src/pages/components",
        ],
      ]) {
        for (const told of [true, false]) {
          fs.rmSync(file("src"), { recursive: true, force: true });
          write({ "src/pages/page.marko": "<div/>\n" });
          tick();
          taglib.clearCaches();
          cache = new Map();
          const reads = [];
          const fileSystem = recordingFS(reads);
          const { meta } = compileSync(
            "<div/>\n",
            file("src/pages/page.marko"),
            {
              translator,
              writeVersionComment: false,
              cache,
              reportsChanges: true,
              fileSystem,
            },
          );
          reads.length = 0;
          assert.deepEqual(taglib.revalidate(cache, fileSystem), []);
          // The listed directory stat-ed for them, but one no compile listed has its own.
          const stats = reads
            .filter(([kind]) => kind === "stat")
            .map(([, p]) => p);
          assert.ok(stats.includes(file("src/pages")));
          assert.deepEqual(
            stats.filter((p) => path.dirname(p) === file("src/pages")),
            [],
          );
          assert.ok(stats.includes(file("src/marko.json")));
          if (told) write(appears);
          else writeChanged(appears);
          assert.deepEqual(
            told
              ? taglib.invalidate([file(reported)], cache, fileSystem)
              : taglib.revalidate(cache, fileSystem),
            [file("src/pages/page.marko")],
            `${told ? "told" : "not told"}: ${reported}`,
          );
        }
      }
    });

    it("keeps its own record of what a lookup looked for that a directory's listing still has", () => {
      // Listed with it by a compile, removed unreported, then looked for by another lookup.
      write({ "src/marko.json": {}, "src/page.marko": "<div/>\n" });
      compile("src/page.marko");
      fs.rmSync(file("src/marko.json"));
      const tags = lookup("src");
      write({ "src/marko.json": {} });
      taglib.invalidate([file("src/marko.json")], cache);
      assert.notEqual(lookup("src"), tags);
    });

    it("marks nothing for an entry named like what a lookup looked for", () => {
      write({ "src/pages/page.marko": "<div/>\n" });
      compile("src/pages/page.marko");
      taglib.invalidate([], cache);
      const near = ["tags.ts", "marko.json.bak", "package.json.orig"];
      for (const name of near) write({ [`src/pages/${name}`]: "" });
      assert.deepEqual(
        taglib.invalidate(
          near.map((name) => file(`src/pages/${name}`)),
          cache,
        ),
        [],
      );
    });

    it("marks a lookup through the listing of a directory listed after it looked there", () => {
      // Indexed before any compile listed `src`, then reported as `src` alone.
      write({ "src/page.marko": "<div/>\n" });
      const tags = lookup("src");
      taglib.invalidate([], cache);
      compile("src/page.marko");
      write({ "src/marko.json": {} });
      taglib.invalidate([file("src")], cache);
      assert.notEqual(lookup("src"), tags);
    });

    it("finds what a lookup looked for in a group of its tags dir beside every template and directory there", () => {
      // A renderer looked for in a group of the tags dir that names it, reported
      // as the file or as its directory.
      write({
        "src/components/tag-a/marko-tag.json": {
          renderer: "../group/renderer",
        },
        "src/components/group/tag-b.marko": "",
      });
      for (const reported of [
        "src/components/group/renderer.js",
        "src/components/group",
      ]) {
        fs.rmSync(file("src/components/group/renderer.js"), { force: true });
        taglib.clearCaches();
        const tags = lookup("src", classTranslator);
        tags.getTagsSorted();
        write({ "src/components/group/renderer.js": "" });
        taglib.invalidate([file(reported)], cache);
        assert.notEqual(lookup("src", classTranslator), tags, reported);
      }
    });

    it("finds a renderer a tag directory's marko-tag.json names once it appears", () => {
      // Looked for in the tag directory its lookup lists, whose files do not name it.
      write({
        "src/components/tag-a/marko-tag.json": { renderer: "./render" },
      });
      const tags = lookup("src", classTranslator);
      tags.getTagsSorted();
      write({ "src/components/tag-a/render.js": "" });
      taglib.invalidate([file("src/components/tag-a/render.js")], cache);
      assert.notEqual(lookup("src", classTranslator), tags);
    });

    it("keeps reading every template and directory of a group a lookup looks in later", () => {
      // The group read when the tags dir loads, then a renderer looked for in it when
      // the entry naming it loads.
      write({
        "src/marko.json": {
          "<tag-x>": { renderer: "./components/group/renderer" },
        },
        "src/components/group/tag-b.marko": "",
      });
      const tags = lookup("src", classTranslator);
      assert.ok(tags.getTag("tag-b"));
      taglib.invalidate([], cache);
      tags.getTag("tag-x");
      taglib.invalidate([], cache);
      write({ "src/components/group/tag-c.marko": "" });
      taglib.invalidate([file("src/components/group/tag-c.marko")], cache);
      assert.notEqual(lookup("src", classTranslator), tags);
    });

    it("lists the modules of the plugins it ran, with either translator", () => {
      const hook = "module.exports = () => {};\n";
      write({
        "marko.json": {
          migrate: "./root-migrate.js",
          transform: "./root-transform.js",
          translate: "./root-translate.js",
        },
        "root-migrate.js": "module.exports = {};\n",
        "root-transform.js": "module.exports = {};\n",
        "root-translate.js": "module.exports = {};\n",
        "src/tags/hooked/marko-tag.json": {
          parse: "./parse.js",
          migrate: "./migrate.js",
          transform: "./transform.js",
          analyze: "./analyze.js",
          translate: "./translate.js",
        },
        "src/tags/hooked/parse.js": hook,
        "src/tags/hooked/migrate.js": hook,
        "src/tags/hooked/transform.js": hook,
        "src/tags/hooked/analyze.js": hook,
        "src/tags/hooked/translate.js":
          "module.exports = (tag) => tag.remove();\n",
        "src/page.marko": "<hooked/>\n",
      });
      const modules = [
        "root-migrate.js",
        "root-transform.js",
        "src/tags/hooked/parse.js",
        "src/tags/hooked/migrate.js",
        "src/tags/hooked/transform.js",
        "src/tags/hooked/analyze.js",
        "src/tags/hooked/translate.js",
      ].map(file);
      for (const translator of [runtimeTagsTranslator, classAPITranslator]) {
        const reads = [];
        const cache = new Map();
        const fileSystem = recordingFS(reads);
        const compileAs = (output) =>
          compileSync("<hooked/>\n", file("src/page.marko"), {
            translator,
            output,
            writeVersionComment: false,
            cache,
            reportsChanges: true,
            fileSystem,
          }).meta.dependencies;
        const seen = new Set();
        const js = (deps) =>
          listed(deps, seen)
            .file.filter((f) => f.endsWith(".js"))
            .sort();
        // A root translate plugin runs for each output, the rest for its template.
        assert.deepEqual(
          js(compileAs("html")),
          modules.concat(file("root-translate.js")).sort(),
        );
        assert.deepEqual(js(compileAs("dom")), [file("root-translate.js")]);
        // Loaded as modules, and recorded without reading them again.
        assert.deepEqual(
          reads.filter(([kind, p]) => kind === "read" && p.endsWith(".js")),
          [],
        );
      }
    });

    it("stops at a reported path whose directory listed it, there still", () => {
      write({
        "src/tags/group/tag-b.marko": "<div/>\n",
        "src/page.marko": "<tag-b/>\n",
      });
      const reads = [];
      const fileSystem = recordingFS(reads);
      compileSync("<tag-b/>\n", file("src/page.marko"), {
        translator: runtimeTagsTranslator,
        writeVersionComment: false,
        cache,
        reportsChanges: true,
        fileSystem,
      });
      reads.length = 0;
      const changed = file("src/tags/group/tag-b.marko");
      taglib.invalidate([changed], cache, fileSystem);
      assert.deepEqual(reads, [["stat", changed]]);
    });

    it("keeps no reported path that nothing read", () => {
      write({ "src/page.marko": "<div/>\n" });
      compile("src/page.marko");
      gc();
      const before = process.memoryUsage().heapUsed;
      // As an editor's swap files come and go.
      for (let i = 0; i < 50_000; i++) {
        taglib.invalidate([file(`src/.page.marko.${i}.swp`)], cache);
      }
      gc();
      assert.ok(process.memoryUsage().heapUsed - before < 2 ** 21);
    });

    it("keeps no more for a template compiled again than for it once", () => {
      // A transform recording a directory's names, each built afresh, as a
      // translator does each time a template compiles.
      let named = 0;
      globalThis.recordNames = () => {
        const names = [];
        for (let i = 0; i < 100; i++) names.push(`${i}-`.padEnd(1024, "x"));
        named += taglib.addDirectoryDependency(file("src"), names).length;
      };
      write({
        "marko.json": { transform: "./record.js" },
        "record.js":
          "module.exports = { Program() { globalThis.recordNames(); } };\n",
      });
      const compileAgain = (i) =>
        compileSync(`<div/>\n<!-- ${i} -->\n`, file("src/page.marko"), {
          translator: runtimeTagsTranslator,
          writeVersionComment: false,
          cache,
          reportsChanges: true,
        });
      try {
        for (let i = 0; i < 10; i++) compileAgain(i);
        gc();
        const before = process.memoryUsage().heapUsed;
        for (let i = 10; i < 60; i++) compileAgain(i);
        gc();
        assert.ok(process.memoryUsage().heapUsed - before < 2 ** 21);
        // Nothing, as `src` does not exist.
        assert.equal(named, 0);
      } finally {
        delete globalThis.recordNames;
      }
    });

    it("forgets what a dropped lookup read, or one that failed to build", () => {
      write({ "src/marko.json": {}, "bad/marko.json": "{ BAD JSON" });
      const reads = [];
      const fileSystem = recordingFS(reads);
      const build = () => {
        taglib.buildLookup(
          file("src"),
          runtimeTagsTranslator,
          undefined,
          fileSystem,
        );
        taglib.buildLookup(
          file("bad"),
          runtimeTagsTranslator,
          () => {},
          fileSystem,
        );
      };
      const compileBad = () =>
        compileSync("<div/>\n", file("bad/page.marko"), {
          translator: runtimeTagsTranslator,
          cache,
          reportsChanges: true,
          fileSystem,
        });
      build();
      assert.throws(compileBad);
      // Lists `src`, so what its lookup looks for there is found through it.
      compileSync("<div/>\n", file("src/page.marko"), {
        translator: runtimeTagsTranslator,
        cache,
        reportsChanges: true,
        fileSystem,
      });
      // One that failed is kept as one that built is, reading nothing again.
      reads.length = 0;
      build();
      assert.throws(compileBad);
      assert.deepEqual(reads, []);
      gc();
      const before = process.memoryUsage().heapUsed;
      // Dropped and built again, as each edit to its `marko.json` does.
      for (let i = 0; i < 5_000; i++) {
        taglib.invalidate(
          [file("src/marko.json"), file("bad/marko.json")],
          cache,
          fileSystem,
        );
        build();
        reads.length = 0;
      }
      gc();
      assert.ok(process.memoryUsage().heapUsed - before < 2 ** 21);
    });

    it("drops a lookup for a reported path only by what that lookup read", () => {
      write({
        "lib/bar.marko": "<em/>\n",
        "src/tags/foo.marko": "<bar/>\n",
        "src/tags/child/child.marko": "<aside/>\n",
        "src/tags/json-tag/marko-tag.json": {},
        "src/tags/json-tag/index.marko": "",
        "src/page.marko": "<foo/>\n<child/>\n",
      });
      // Its analysis builds the lookups of the tags dir and of a tag directory.
      compile("src/page.marko");
      const build = (rel) =>
        taglib.buildLookup(file(rel), runtimeTagsTranslator);
      const src = build("src");
      const tags = build("src/tags");
      const child = build("src/tags/child");
      // A tags dir in a tag directory, read only by that directory's lookup.
      write({ "src/tags/child/tags/aside.marko": "<span/>\n" });
      assert.deepEqual(
        taglib.invalidate([file("src/tags/child/tags/aside.marko")], cache),
        [file("src/tags/child/child.marko"), file("src/page.marko")],
      );
      assert.equal(build("src"), src);
      assert.equal(build("src/tags"), tags);
      // Read only by the lookup just dropped.
      write({ "src/tags/child/tags/other.marko": "" });
      assert.deepEqual(
        taglib.invalidate([file("src/tags/child/tags/other.marko")], cache),
        [],
      );
      assert.notEqual(build("src/tags/child"), child);
      // The tags dir's own `marko.json`, which no tags dir reads.
      write({
        "src/tags/marko.json": {
          "<bar>": { template: "../../lib/bar.marko" },
        },
      });
      taglib.invalidate([file("src/tags/marko.json")], cache);
      assert.equal(build("src"), src);
      assert.ok(build("src/tags").getTag("bar"));
      // A tag directory's `marko-tag.json`, which the tags dir read.
      write({ "src/tags/json-tag/marko-tag.json": { html: true } });
      taglib.invalidate([file("src/tags/json-tag/marko-tag.json")], cache);
      assert.notEqual(build("src"), src);
    });

    it("drops a lookup when the template of an entry tag loaded since goes", () => {
      write({
        "marko.json": { "<entry-tag>": { template: "./entry.marko" } },
        "entry.marko": "<div/>\n",
        "src/a.marko": "<div/>\n",
        "src/b.marko": "<entry-tag/>\n",
      });
      compile("src/a.marko");
      compile("src/b.marko");
      const root = taglib.buildLookup(dir, runtimeTagsTranslator);
      // Its content is read by its compiles, not by the lookup.
      write({ "entry.marko": "<span/>\n" });
      taglib.invalidate([file("entry.marko")], cache);
      assert.equal(taglib.buildLookup(dir, runtimeTagsTranslator), root);
      fs.rmSync(file("entry.marko"));
      taglib.invalidate([file("entry.marko")], cache);
      assert.notEqual(taglib.buildLookup(dir, runtimeTagsTranslator), root);
    });

    it("drops a lookup when a group in its tags dir gains a tag, or what makes it one", () => {
      // Listed as a tag directory, then read as a group of the tags dir.
      for (const [translator, group, entry, tag] of [
        [tagsTranslator, "src/tags/group", "marko-tag.json", "group"],
        [classTranslator, "src/components/group", "index.js", "group"],
        [tagsTranslator, "src/tags/group", "tag-c.marko", "tag-c"],
      ]) {
        for (const told of [true, false]) {
          fs.rmSync(file("src"), { recursive: true, force: true });
          write({ [`${group}/tag-b.marko`]: "" });
          tick();
          taglib.clearCaches();
          const tags = lookup("src", translator);
          assert.equal(tags.getTag(tag), undefined);
          if (told) write({ [`${group}/${entry}`]: "{}" });
          else writeChanged({ [`${group}/${entry}`]: "{}" });
          if (told) taglib.invalidate([file(`${group}/${entry}`)], cache);
          else taglib.revalidate(cache);
          const after = lookup("src", translator);
          assert.notEqual(
            after,
            tags,
            `${entry}, ${told ? "told" : "not told"}`,
          );
          assert.ok(after.getTag(tag));
        }
      }
    });

    it("makes a class component stale when its component file appears", () => {
      write({ "src/page.marko": "<div/>\n" });
      const compileClass = () =>
        compileSync("<div/>\n", file("src/page.marko"), {
          translator: classAPITranslator,
          output: "dom",
          writeVersionComment: false,
          cache,
          reportsChanges: true,
        });
      compileClass();
      write({ "src/page.component.js": "export default {};\n" });
      assert.deepEqual(
        taglib.invalidate([file("src/page.component.js")], cache),
        [file("src/page.marko")],
      );
      assert.match(compileClass().code, /page\.component\.js/);
    });

    it("finds a template's own files in what its compile listed, with either translator", () => {
      // An entry template's own files, each kind by both its names.
      write({
        "src/index.marko": "<div/>\n",
        "src/style.css": "",
        "src/index.style.css": "",
        "src/browser.json": "{}",
        "src/index.browser.json": "{}",
        "src/component.js": "export default {};\n",
        "src/index.component.js": "export default {};\n",
        "src/component-browser.js": "export default {};\n",
        "src/index.component-browser.js": "export default {};\n",
      });
      const reads = [];
      const fileSystem = recordingFS(reads);
      const { readdirSync } = fileSystem;
      // Listed last to first, so the first of each in sorted order comes last.
      fileSystem.readdirSync = (p, o) => readdirSync(p, o).sort().reverse();
      const compileWith = (translator) =>
        compileSync("<div/>\n", file("src/index.marko"), {
          translator,
          output: "dom",
          writeVersionComment: false,
          cache: new Map(),
          reportsChanges: true,
          fileSystem,
        });
      assert.match(
        compileWith(runtimeTagsTranslator).code,
        /"\.\/index\.style\.css"/,
      );
      const { code, meta } = compileWith(classAPITranslator);
      assert.deepEqual(meta.deps, [
        "./index.style.css",
        "package: ./browser.json",
      ]);
      assert.match(code, /"\.\/component\.js"/);
      assert.equal(meta.component, "./component-browser.js");
      // Listed once, by the compiler, each translator reading what it listed.
      assert.deepEqual(
        reads.filter(([kind, p]) => kind === "list" && p === file("src")),
        [["list", file("src")]],
      );
    });

    it("gives a compile only the entries its names name, each time its own", () => {
      write({
        "marko.json": { transform: "./record.js" },
        "record.js":
          "module.exports = { Program() { globalThis.recordNames(); } };\n",
        "src/page.marko": "<div/>\n",
        "src/page.style": "",
        "src/page.style.css": "",
        "src/page.style.less": "",
        "src/page.styles.css": "",
        "src/page.style.module.css": "",
        "src/other.style.css": "",
      });
      const named = [];
      // Names that name one entry both, in either order, as scanned for and then
      // through an index.
      globalThis.recordNames = () => {
        named.push(
          taglib.addDirectoryDependency(file("src"), [
            "page.style",
            "page.style.css",
          ]),
        );
        named.push(
          taglib.addDirectoryDependency(file("src"), [
            "page.style.css",
            "page.style",
          ]),
        );
      };
      try {
        compile("src/page.marko");
        named[0].push("changed.css");
        compile("src/page.marko", "html", new Map());
      } finally {
        delete globalThis.recordNames;
      }
      named[0].pop();
      for (const entries of named) {
        assert.deepEqual(entries.sort(), [
          "page.style",
          "page.style.css",
          "page.style.less",
        ]);
      }
    });

    it("lists the templates a class hydrate entry visited", () => {
      write({
        "src/components/child.marko": "<span/>\n",
        "src/page.marko": "<child/>\n",
      });
      const { meta } = compileSync("<child/>\n", file("src/page.marko"), {
        translator: classAPITranslator,
        output: "hydrate",
        resolveVirtualDependency: () => "",
        cache,
        reportsChanges: true,
      });
      // Read by the template the entry was made from.
      assert.ok(
        listed(meta.dependencies).file.includes(
          file("src/components/child.marko"),
        ),
      );
    });

    it("records nothing read in node_modules, but a linked workspace package's own files", () => {
      write({
        "app/package.json": {
          name: "app",
          dependencies: {
            pkg: "*",
            linked: "*",
            stored: "*",
            plain: "*",
            absent: "*",
          },
        },
        "app/marko.json": { "taglib-imports": ["dep/marko.json"] },
        "app/src/page.marko": "<pkg-tag/>\n<linked-tag/>\n<dep-tag/>\n",
        // An installed taglib with a tags dir, its tag using a dependency's.
        "app/node_modules/pkg/package.json": {
          name: "pkg",
          dependencies: { dep: "*" },
        },
        "app/node_modules/pkg/marko.json": { exports: "./tags" },
        "app/node_modules/pkg/tags/pkg-tag/index.marko":
          'import Absent from "./absent.marko"\n<let/a=1/>\n<Absent a=a/>\n<dep-tag/>\n',
        "app/node_modules/pkg/tags/pkg-tag/marko-tag.json": {},
        "app/node_modules/dep/package.json": { name: "dep" },
        "app/node_modules/dep/marko.json": {
          "<dep-tag>": { template: "./dep-tag.marko" },
        },
        "app/node_modules/dep/dep-tag.marko": "<div/>\n",
        // One in a store inside `node_modules`, as pnpm installs it.
        "app/node_modules/.pnpm/stored@1.0.0/node_modules/stored/package.json":
          { name: "stored" },
        "app/node_modules/.pnpm/stored@1.0.0/node_modules/stored/marko.json": {
          "<stored-tag>": { html: true },
        },
        "app/node_modules/plain/package.json": { name: "plain" },
        // A workspace package, linked into `node_modules`.
        "store/linked/package.json": { name: "linked" },
        "store/linked/marko.json": {
          "<linked-tag>": { template: "./linked-tag.marko" },
        },
        "store/linked/linked-tag.marko": "<div/>\n",
      });
      fs.symlinkSync(
        file("store/linked"),
        file("app/node_modules/linked"),
        "dir",
      );
      fs.symlinkSync(
        file("app/node_modules/.pnpm/stored@1.0.0/node_modules/stored"),
        file("app/node_modules/stored"),
        "dir",
      );
      tick();
      const reads = [];
      // With no `node_modules` above the case's directory.
      const fileSystem = recordingFS(reads, confinedFS());
      const compileWith = (rel, output) =>
        compileSync(fs.readFileSync(file(rel), "utf8"), file(rel), {
          translator: runtimeTagsTranslator,
          output,
          errorRecovery: true,
          writeVersionComment: false,
          cache,
          reportsChanges: true,
          fileSystem,
        }).meta.dependencies;
      // The page, and the installed tag as a bundler compiles it.
      const handles = [
        compileWith("app/src/page.marko", "html"),
        compileWith("app/src/page.marko", "dom"),
        compileWith("app/node_modules/pkg/tags/pkg-tag/index.marko", "dom"),
        taglib.getDependencies(
          [file("app/src")],
          runtimeTagsTranslator,
          undefined,
          fileSystem,
        ),
      ];
      // Each directory listed once, installed or not.
      const lists = reads.filter(([kind]) => kind === "list");
      assert.equal(new Set(lists.map(([, p]) => p)).size, lists.length);
      // No link's spelling, probe of a dependency, package not installed, nor
      // `node_modules` looked for above.
      const recorded = [];
      const seen = new WeakSet();
      for (const deps of handles) {
        taglib.forEachDependency(deps, (p) => recorded.push(p), seen);
      }
      assert.deepEqual(recorded.filter(installed), []);
      assert.ok(recorded.includes(file("store/linked/marko.json")));
      assert.ok(recorded.includes(file("store/linked/linked-tag.marko")));
      reads.length = 0;
      assert.deepEqual(taglib.revalidate(cache, fileSystem), []);
      assert.deepEqual(
        reads.filter(([, p]) => installed(p)),
        [],
      );
      write({ "store/linked/linked-tag.marko": "<span/>\n" });
      assert.deepEqual(
        taglib.invalidate(
          [file("store/linked/linked-tag.marko")],
          cache,
          fileSystem,
        ),
        [file("app/src/page.marko")],
      );
      // An installed file's change is an install's, which clears the caches.
      write({ "app/node_modules/dep/dep-tag.marko": "<span/>\n" });
      assert.deepEqual(
        taglib.invalidate(
          [file("app/node_modules/dep/dep-tag.marko")],
          cache,
          fileSystem,
        ),
        [],
      );
    });

    it("sees what an install changes once the caches are cleared, and a dependency added at once", () => {
      const pkg = {
        "node_modules/pkg/package.json": { name: "pkg" },
        "node_modules/pkg/marko.json": {
          "<pkg-tag>": { template: "./pkg-tag.marko" },
        },
        "node_modules/pkg/pkg-tag.marko": "",
      };
      const dependent = { name: "app", dependencies: { pkg: "*" } };
      // With no `node_modules` above the case's directory.
      const fileSystem = confinedFS();
      const compilePage = () =>
        compileSync("<pkg-tag/>\n", file("src/page.marko"), {
          translator: runtimeTagsTranslator,
          errorRecovery: true,
          writeVersionComment: false,
          cache,
          reportsChanges: true,
          fileSystem,
        }).code;
      // Each change as reported, and what it marks: none for a dependency installed
      // where there was no `node_modules`, or into the only one, until the caches are cleared.
      for (const [before, after, reported, marked] of [
        [{ "package.json": dependent }, pkg, "node_modules/pkg/marko.json", []],
        [
          { "package.json": dependent, "node_modules/.package-lock.json": {} },
          pkg,
          "node_modules/pkg",
          [],
        ],
        [
          pkg,
          { "package.json": dependent },
          "package.json",
          ["src/page.marko"],
        ],
      ]) {
        fs.rmSync(file("node_modules"), { recursive: true, force: true });
        write({ "package.json": { name: "app" } });
        write(before);
        taglib.clearCaches();
        compilePage();
        write(after);
        assert.deepEqual(
          taglib.invalidate([file(reported)], cache, fileSystem),
          marked.map(file),
          reported,
        );
        if (!marked.length) taglib.clearCaches();
        assert.match(compilePage(), /pkg-tag\.marko/, reported);
      }
    });

    describe("every kind of read", () => {
      // Every kind of taglib read: tags dirs with groups and tag directories, a
      // tags-dir, imports, entries, installed and scoped packages, broken tags.
      const project = {
        "package.json": {
          name: "app",
          dependencies: { "dep-a": "*", "@scope/dep-b": "*", "dep-c": "*" },
        },
        "marko.json": {
          "tags-dir": "./custom-tags",
          "taglib-imports": ["./lib/marko.json", "dep-d/marko.json"],
          "<entry-tag>": { template: "./entry.marko" },
          "<json-tag>": "./json-tag.json",
          "<renderer-tag>": { renderer: "./renderer" },
        },
        "entry.marko": "",
        "renderer.js": "",
        "json-tag.json": { template: "./entry.marko" },
        "custom-tags/tag-a.marko": "",
        "custom-tags/group/tag-b.marko": "",
        "custom-tags/tag-c/index.marko": "",
        "custom-tags/tag-c/helper.marko": "",
        "custom-tags/tag-d/marko-tag.json": { "parse-options": {} },
        "custom-tags/broken/marko-tag.json": "{ BAD JSON",
        "custom-tags/empty/notes.txt": "",
        "custom-tags/group/no-tag/notes.txt": "",
        "lib/marko.json": { "<lib-tag>": { template: "./lib-tag.marko" } },
        "lib/lib-tag.marko": "",
        "src/tags/tag-e.marko": "",
        "src/components/tag-f/renderer.js": "",
        "src/components/tag-g/marko-tag.json": { renderer: "./render" },
        "src/components/tag-g/render.js": "",
        "src/pages/package.json": {},
        "src/pages/page.marko": "",
        "store/dep-a/package.json": { name: "dep-a" },
        "store/dep-a/marko.json": { "tags-dir": "./tags" },
        "store/dep-a/tags/tag-h.marko": "",
        "node_modules/@scope/dep-b/package.json": { name: "@scope/dep-b" },
        "node_modules/@scope/dep-b/marko.json": {
          "<tag-i>": { template: "./tag-i.marko" },
        },
        "node_modules/@scope/dep-b/tag-i.marko": "",
        "node_modules/dep-d/package.json": { name: "dep-d" },
        "node_modules/dep-d/marko.json": {
          "<tag-j>": { template: "./tag-j.marko" },
        },
        "node_modules/dep-d/tag-j.marko": "",
      };
      const dirs = () =>
        ["", "src", "src/pages", "src/components"].map((rel) => file(rel));
      // Installed as a link into a store.
      const writeProject = () => {
        write(project);
        fs.symlinkSync(file("store/dep-a"), file("node_modules/dep-a"), "dir");
      };

      it("covers every read a lookup makes, each once", () => {
        writeProject();
        for (const translator of [tagsTranslator, classTranslator]) {
          taglib.clearCaches();
          const reads = [];
          const deps = taglib.getDependencies(
            dirs(),
            translator,
            () => {},
            recordingFS(reads),
          );
          assert.deepEqual(uncovered(listed(deps), reads), []);
          // Each file read once: recording reads nothing more.
          const read = new Set();
          for (const [kind, p] of reads) {
            if (kind === "read") {
              assert.ok(!read.has(p), p);
              read.add(p);
            }
          }
        }
      });
    });
  });
});

// Node's file system, with nothing outside the case's directory, as where no
// directory above it has a `node_modules`.
function confinedFS() {
  const check = (p) => {
    if (p !== dir && !p.startsWith(dir + path.sep)) {
      throw Object.assign(new Error(`ENOENT: ${p}`), { code: "ENOENT" });
    }
  };
  return {
    statSync: (p, o) => (check(p), fs.statSync(p, o)),
    readdirSync: (p, o) => (check(p), fs.readdirSync(p, o)),
    readFileSync: (p, o) => (check(p), fs.readFileSync(p, o)),
    realpathSync: (p) => (check(p), fs.realpathSync(p)),
  };
}

// Node's file system, or `base`, recording each path it is asked about.
function recordingFS(reads, base = fs) {
  return {
    statSync: (p, o) => (reads.push(["stat", p]), base.statSync(p, o)),
    readdirSync: (p, o) => (reads.push(["list", p]), base.readdirSync(p, o)),
    readFileSync: (p, o) => (reads.push(["read", p]), base.readFileSync(p, o)),
    realpathSync: (p) => (reads.push(["stat", p]), base.realpathSync(p)),
  };
}

// The reads outside `node_modules` nothing in `deps` accounts for: a listing of a
// directory not read, a file whose content does not count, or a path in no directory read.
function uncovered(deps, reads) {
  const dirs = new Set(deps.directory);
  const files = new Set(deps.file);
  const paths = new Set(deps.file);
  for (const p of deps.missing) paths.add(p);
  // Whether something recorded is under `p`, which shows that it exists.
  const holds = (p) => {
    const prefix = p + path.sep;
    for (const recorded of paths) if (recorded.startsWith(prefix)) return true;
    for (const d of dirs) if (d.startsWith(prefix)) return true;
    return false;
  };
  const missed = new Set();
  for (const [kind, p] of reads) {
    if (installed(p)) continue;
    const covered =
      kind === "list"
        ? dirs.has(p)
        : kind === "read"
          ? files.has(p)
          : paths.has(p) ||
            dirs.has(p) ||
            dirs.has(path.dirname(p)) ||
            holds(p);
    if (!covered) missed.add(kind + " " + path.relative(dir, p));
  }
  return [...missed];
}
