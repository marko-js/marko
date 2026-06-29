import assert from "assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const fixture = path.join(import.meta.dirname, "fixtures", "taglib");
const script = path.join(fixture, "run.mjs");

// `register` appends to a module-level list and taglib ids resolve from the
// package nearest the working directory, so each case needs its own process.
const run = (env) =>
  JSON.parse(
    execFileSync(process.execPath, ["-r", "~ts", script], {
      cwd: fixture,
      encoding: "utf8",
      env: { ...process.env, ...env },
    }),
  );

describe("compiler/taglib", () => {
  // Compilable native tags and `Marko.NativeTags` are kept by hand; this pins
  // where they differ on purpose, so a tag added to only one of them fails.
  it("types the native tags it compiles", () => {
    const taglibDir = path.join(import.meta.dirname, "../src/taglib");
    const tagsOf = (name) =>
      Object.keys(
        JSON.parse(
          fs.readFileSync(path.join(taglibDir, `marko-${name}.json`), "utf8"),
        ),
      )
        .filter((key) => key[0] === "<")
        .map((key) => key.slice(1, -1));
    const mathTags = new Set(tagsOf("math"));
    const compiled = new Set([
      ...tagsOf("html"),
      ...tagsOf("svg"),
      ...mathTags,
    ]);
    const typed = new Set(
      fs
        .readFileSync(
          path.join(import.meta.dirname, "../../runtime-tags/tags-html.d.ts"),
          "utf8",
        )
        .matchAll(/^\s+"?([\w-]+)"?: NativeTag</gm)
        .map(([, tag]) => tag),
    );
    const only = (a, b) => [...a].filter((tag) => !b.has(tag)).sort();

    // `slot` compiles to a hint pointing at dynamic tags instead.
    assert.deepEqual(only(typed, compiled), [
      "discard",
      "feDropShadow",
      "slot",
    ]);
    // MathML is compiled but not yet typed.
    assert.deepEqual(
      only(compiled, typed).filter((tag) => !mathTags.has(tag)),
      ["animateColor", "param"],
    );
  });

  it("refuses a translator that brings no taglibs", () =>
    assert.match(run({ CASE: "invalid-translator" }), /Invalid translator/));

  it('keeps the @-half\'s attribute props through an "@x <x>" shorthand', () =>
    assert.deepEqual(run({ CASE: "shorthand-attr-merge" }), {
      type: "string",
      defaultValue: "L",
      required: true,
      autocomplete: true,
      target: "label",
    }));

  describe("register", () => {
    it("takes a taglib by relative path", () =>
      assert.equal(run({ CASE: "register-by-path" }), true));

    it("takes a taglib by module id", () =>
      assert.equal(run({ CASE: "register-by-module" }), true));
  });

  it("re-reads a taglib whose JSON was fixed in the same process", () => {
    const { firstError, tags } = run({ CASE: "reload-after-parse-error" });
    assert.match(firstError, /Unable to parse JSON file at path/);
    assert.deepEqual(tags, ["legacy-panel"]);
  });

  describe("lookup", () => {
    it("resolves tags and attributes across a merged taglib", () => {
      const result = run({ CASE: "lookup" });
      assert.deepEqual(result.attrs, ["a", "aria-label"]);
      assert.deepEqual(result.patternAttrs, ["data-*"]);
      assert.deepEqual(result.missingTagAttrs, []);
      assert.equal(result.tagByName, true);
      assert.equal(result.tagByElement, true);
      assert.equal(result.missingTag, null);
      assert.equal(result.attrByObjects, "a");
      assert.equal(result.groupAttr, "aria-label");
      assert.equal(result.patternAttr, "data-*");
      assert.equal(result.missingAttr, null);
      assert.equal(result.sortedIsCached, true);
      assert.deepEqual(result.sortedNames, [
        "probe-bare",
        "probe-pattern",
        "probe-tag",
      ]);
    });
  });

  describe("optional taglibs", () => {
    it("skips one the root package does not depend on", () =>
      assert.deepEqual(run({ CASE: "optional-undeclared" }), []));

    it("throws when a declared one cannot be resolved", () =>
      assert.match(
        run({ CASE: "optional-throws" }),
        /Cannot find module 'marko-missing-taglib\/marko\.json'/,
      ));

    it("hands that failure to onError instead, and keeps going", () => {
      const { resolved, errors } = run({ CASE: "optional-onerror" });
      assert.deepEqual(resolved, []);
      assert.match(errors[0], /Cannot find module 'marko-missing-taglib/);
    });
  });
});
