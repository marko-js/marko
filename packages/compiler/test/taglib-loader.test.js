import assert from "assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { taglib } from "@marko/compiler";

const {
  clearCache,
  createTaglib,
  loadTag,
  loadTaglibFromFile,
  loadTaglibFromProps,
} = taglib._loader;

// Loading is keyed by file path, so every case writes into a fresh directory.
let dir;

function write(rel, data) {
  const file = path.join(dir, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(
    file,
    typeof data === "string" ? data : JSON.stringify(data),
  );
  return file;
}

function fromProps(props) {
  const loaded = createTaglib(path.join(dir, "marko.json"));
  loadTaglibFromProps(loaded, props);
  return loaded;
}

const message = (fn) => {
  try {
    fn();
    assert.fail("expected a failure");
  } catch (err) {
    return err.message;
  }
};

describe("compiler/taglib-loader", () => {
  beforeEach(() => {
    dir = fs.mkdtempSync(path.join(os.tmpdir(), "marko-taglib-loader-"));
  });
  afterEach(() => {
    clearCache();
    fs.rmSync(dir, { force: true, recursive: true });
  });

  describe("tag properties", () => {
    it("renames the tag through the name property", () =>
      assert.equal(
        loadTag({ name: "renamed" }, "/x/marko.json").name,
        "renamed",
      ));

    it("reads a shorthand nested tag declared as a bare type", () => {
      const tag = loadTag({ "<item>": "string" }, "/x/marko.json");
      assert.equal(tag.nestedTags.item.type, "string");
      assert.equal(tag.attributes.item.type, "object");
    });

    it("names the target property after the first attribute of the shorthand", () => {
      const leading = loadTag({ "@a <item>": {} }, "/x/marko.json");
      assert.equal(leading.nestedTags.item.targetProperty, "a");
      const trailing = loadTag({ "<item> @a": {} }, "/x/marko.json");
      assert.equal(trailing.nestedTags.item.targetProperty, "item");
    });

    it("ignores a shorthand value that is neither an object nor a type", () =>
      assert.equal(
        loadTag({ "@a": 5 }, "/x/marko.json").attributes.a.type,
        null,
      ));

    it("rejects a property supported by neither the tag nor its attribute", () =>
      assert.match(
        message(() => loadTag({ "@a": { bogusProp: 1 } }, "/x/marko.json")),
        /Unsupported properties of \[bogusProp\]/,
      ));

    it("rejects a key that is not an attribute or a nested tag", () =>
      assert.match(
        message(() => loadTag({ "not-a-tag-or-attr": 1 }, "/x/marko.json")),
        /Invalid option: not-a-tag-or-attr/,
      ));

    it("ignores empty attribute groups", () =>
      assert.equal(
        loadTag({ attributeGroups: null }, "/x/marko.json").attributeGroups,
        undefined,
      ));

    it("takes a list of transforms", () =>
      assert.deepEqual(
        loadTag(
          { transform: ["./a", "./b"] },
          "/x/marko.json",
        ).transformers.map((hook) => hook.path),
        ["./a", "./b"],
      ));

    it("routes the deprecated hook spellings to their replacements", () => {
      const tag = loadTag(
        {
          migrator: "./m",
          codeGenerator: "./c",
          nodeFactory: "./n",
          transformer: "./t",
        },
        "/x/marko.json",
      );
      assert.deepEqual(
        tag.migrators.map((hook) => hook.path),
        ["./m"],
      );
      assert.deepEqual(
        tag.transformers.map((hook) => hook.path),
        ["./t"],
      );
      assert.equal(tag.translator.path, "./c");
      assert.equal(tag.parser.path, "./n");
    });

    it("reports a template that does not exist", () =>
      assert.match(
        message(() => loadTag({ template: "./nope.marko" }, "/x/marko.json")),
        /Template at path "[^"]*nope\.marko" does not exist/,
      ));

    it("resolves a relative types path and leaves a bare one alone", () => {
      assert.equal(
        loadTag({ types: "./types.d.marko" }, "/x/marko.json").types,
        path.resolve("/x/types.d.marko"),
      );
      assert.equal(
        loadTag({ types: "pkg/types.d.marko" }, "/x/marko.json").types,
        "pkg/types.d.marko",
      );
    });
  });

  describe("attribute properties", () => {
    const attr = (props) =>
      loadTag({ "@a": props }, "/x/marko.json").attributes.a;

    it("takes a declaration with no properties at all", () => {
      assert.equal(attr(null).name, "a");
      assert.equal(attr(null).type, null);
    });

    it("only builds a pattern when the property is exactly true", () => {
      const patterned = loadTag({ "@a-*": { pattern: true } }, "/x/marko.json");
      assert.equal(patterned.patternAttributes.length, 1);
      assert.equal(patterned.getAttribute("a-1").name, "a-*");
      assert.equal(attr({ pattern: "a-*" }).pattern, null);
    });

    it("only ignores an attribute when the property is exactly true", () => {
      assert.equal(attr({ ignore: true }).ignore, true);
      assert.equal(attr({ ignore: "yes" }).ignore, undefined);
    });

    it("carries the properties tooling reads off an attribute", () => {
      assert.equal(
        attr({ "set-context-flag": "myFlag" }).setContextFlag,
        "myFlag",
      );
      assert.equal(attr({ deprecated: "use b" }).deprecated, "use b");
    });
  });

  describe("taglib properties", () => {
    it("rejects a key that is neither a tag nor an attribute", () =>
      assert.match(
        message(() => fromProps({ bogus: 1 })),
        /Invalid option: bogus/,
      ));

    it("takes a translate hook", () =>
      assert.equal(fromProps({ translate: "./t" }).translator.path, "./t"));

    it("serializes the parts a lookup consumes", () =>
      assert.deepEqual(Object.keys(fromProps({ "<a>": {} }).toJSON()), [
        "path",
        "tags",
        "attributes",
        "patternAttributes",
        "imports",
      ]));

    it("keys a global attribute by its shorthand name", () => {
      const loaded = fromProps({ "@plain": "string" });
      assert.equal(loaded.attributes.plain.type, "string");
      assert.equal(loaded.attributes.plain.key, "plain");
    });

    it("requires a name on a tag", () =>
      assert.match(
        message(() => fromProps({}).addTag({})),
        /"tag\.name" is required/,
      ));

    it("requires a name or a pattern on a global attribute", () =>
      assert.match(
        message(() => fromProps({}).addAttribute({ key: "x" })),
        /Invalid attribute/,
      ));
  });

  describe("imports", () => {
    it("pulls in the tags of an imported taglib", () => {
      write("dep/marko.json", { "<dep-tag>": {} });
      const loaded = loadTaglibFromFile(
        write("marko.json", { "taglib-imports": ["./dep/marko.json"] }),
      );
      assert.deepEqual(Object.keys(loaded.imports[0].tags), ["dep-tag"]);
    });

    it("reports an import it cannot resolve", () => {
      const file = write("marko.json", {
        "taglib-imports": ["./nope/marko.json"],
      });
      assert.match(
        message(() => loadTaglibFromFile(file)),
        /Import not found: \.\/nope\/marko\.json/,
      );
    });

    it("skips an entry that is not a path", () =>
      assert.equal(
        loadTaglibFromFile(write("marko.json", { "taglib-imports": [123] }))
          .imports,
        null,
      ));

    it("imports every dependency taglib of a package.json", () => {
      write("node_modules/dep-a/marko.json", { "<dep-a-tag>": {} });
      write("node_modules/dep-a/package.json", { name: "dep-a" });
      write("node_modules/dep-b/package.json", { name: "dep-b" });
      write("package.json", {
        name: "root",
        dependencies: { "dep-a": "*", "dep-b": "*" },
      });
      const loaded = loadTaglibFromFile(
        write("marko.json", { "taglib-imports": ["./package.json"] }),
      );
      assert.equal(loaded.imports.length, 1);
      assert.deepEqual(Object.keys(loaded.imports[0].tags), ["dep-a-tag"]);
    });

    it("imports each taglib once, transitively", () => {
      write("a/marko.json", { "<a-tag>": {} });
      write("b/marko.json", {
        "<b-tag>": {},
        "taglib-imports": ["../a/marko.json"],
      });
      const loaded = loadTaglibFromFile(
        write("marko.json", {
          "taglib-imports": ["./a/marko.json", "./b/marko.json"],
        }),
      );
      assert.deepEqual(
        loaded.imports.map((imported) => Object.keys(imported.tags)[0]).sort(),
        ["a-tag", "b-tag"],
      );
    });

    it("gives a taglib imported from within the package the package's name", () => {
      write("inner/marko.json", { "<inner-tag>": {} });
      const file = write("marko.json", {
        "taglib-imports": ["./inner/marko.json"],
      });
      const loaded = loadTaglibFromFile(file, false, "outer-pkg");
      assert.equal(loaded.imports[0].packageName, "outer-pkg");
      assert.equal(
        loaded.imports[0].tags["inner-tag"].packageName,
        "outer-pkg",
      );
    });

    it("leaves a taglib imported from outside the package alone", () => {
      write("outside/marko.json", { "<outside-tag>": {} });
      const file = write("pkg/marko.json", {
        "taglib-imports": ["../outside/marko.json"],
      });
      const loaded = loadTaglibFromFile(file, false, "outer-pkg");
      assert.equal(loaded.imports[0].packageName, undefined);
    });
  });
});
