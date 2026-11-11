import assert from "assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { taglib } from "@marko/compiler";

// Every case writes its own project in a fresh directory.
let dir;

const tagsTranslator = { taglibs: [], tagDiscoveryDirs: ["tags"] };
const classTranslator = {
  taglibs: [],
  tagDiscoveryDirs: ["tags", "components"],
  classTaglibs: true,
};

function write(files) {
  for (const rel in files) {
    const file = path.join(dir, rel);
    const data = files[rel];
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(
      file,
      typeof data === "string" ? data : JSON.stringify(data),
    );
  }
}

const lookup = (rel = "", translator = tagsTranslator) =>
  taglib.buildLookup(path.join(dir, rel), translator);
const template = (rel) =>
  lookup(path.dirname(rel)).getTag(path.basename(rel))?.template;
const file = (rel) => path.join(dir, rel);

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
      assert.throws(() => tags.getTag("broken"), /Unable to parse JSON file/);
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
        new Set(lookup("src").watchFiles),
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
      assert.deepEqual(root.watchFiles, [file("marko.json")]);

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
      assert.deepEqual(lookup().watchFiles, []);
    });

    it("reads peer and dev dependencies too, each package once", () => {
      write({
        "package.json": {
          name: "app",
          dependencies: { both: "*" },
          peerDependencies: { peer: "*", both: "*" },
          devDependencies: { dev: "*", both: "*" },
        },
        "node_modules/peer/marko.json": { "<peer-tag>": { html: true } },
        "node_modules/dev/marko.json": { "<dev-tag>": { html: true } },
        "node_modules/both/marko.json": { transform: "./t.js" },
        "node_modules/both/t.js": "",
      });
      const tags = lookup();
      assert.ok(tags.getTag("peer-tag"));
      assert.ok(tags.getTag("dev-tag"));
      assert.deepEqual(
        tags.transformers.map((hook) => hook.path),
        [file("node_modules/both/t.js")],
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
      assert.ok(tags.watchFiles.includes(file("legacy/marko.json")));
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
    it("hands a broken marko.json to onError, and reads it again once fixed", () => {
      write({ "marko.json": "{ BAD JSON", "tags/tag-a.marko": "" });
      const errors = [];
      const broken = taglib.buildLookup(dir, tagsTranslator, (err) =>
        errors.push(err.message),
      );
      assert.match(errors[0], /Unable to parse JSON file at path/);
      assert.ok(broken.getTag("div"));
      assert.equal(broken.getTag("tag-a"), undefined);

      write({ "marko.json": {} });
      assert.equal(template("tag-a"), file("tags/tag-a.marko"));
    });

    it("throws for a tags-dir that does not exist", () => {
      write({ "marko.json": { "tags-dir": "./missing" } });
      assert.throws(lookup, /The tags directory ".*missing" does not exist/);
    });

    it("throws for a tag entry naming a file that does not exist, only where it is used", () => {
      write({ "marko.json": { "<tag-a>": "./missing/marko-tag.json" } });
      const tags = lookup();
      assert.ok(tags.getTagsSorted().every((tag) => tag.name !== "tag-a"));
      assert.throws(
        () => tags.getTag("tag-a"),
        /Tag at path ".*marko-tag\.json" does not exist/,
      );
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

    it("throws for a template that does not exist", () => {
      write({ "marko.json": { "<tag-a>": { template: "./missing.marko" } } });
      assert.throws(
        () => lookup().getTag("tag-a"),
        /Template at path ".*missing\.marko" does not exist/,
      );
    });
  });
});
