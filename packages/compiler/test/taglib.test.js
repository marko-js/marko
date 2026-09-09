import assert from "assert/strict";
import { execFileSync } from "node:child_process";
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
        "probe-badge",
        "probe-bare",
        "probe-pattern",
        "probe-tag",
      ]);
    });
  });

  it("exposes a dependency's custom elements manifest as generated tags", () =>
    assert.deepEqual(run({ CASE: "custom-elements-manifest" }), {
      types: path.join(
        "node_modules",
        "probe-elements",
        "custom-elements.json.probe-badge.d.marko",
      ),
      native: true,
      template: null,
      description: "A badge.",
      onDisk: false,
      source: `export interface Input extends Omit<Marko.HTMLAttributes<HTMLElement>, "content" | "label" | "pinned" | "count" | "items" | "model" | "size"> {
  /** Badge label. */
  "label"?: string;
  "pinned"?: boolean;
  "count"?: number;
  "items"?: unknown;
  "model"?: unknown;
  "size"?: 'small' | 'large';
  content?: Marko.Body;
}
`,
    }));

  it("keeps custom elements native and registration browser-only", () => {
    const results = run({ CASE: "custom-elements-compile" });
    for (const [mode, code] of Object.entries(results)) {
      if (mode.endsWith(":html")) {
        assert.doesNotMatch(
          code,
          /import .*define\/probe-badge|require\(.*define\/probe-badge/,
        );
        if (!mode.includes("-page:")) assert.match(code, /probe-badge/);
      } else {
        assert.match(code, /define\/probe-badge\.js/);
        assert.ok(
          code.includes(
            path.join(
              fixture,
              "node_modules/probe-elements/define/probe-badge.js",
            ),
          ),
        );
      }
      assert.doesNotMatch(code, /\.d\.marko|\.marko-custom-elements/);
    }
  });

  it("renders custom elements on the server without DOM globals", () => {
    const results = run({ CASE: "custom-elements-render" });
    for (const html of results) {
      assert.match(
        html,
        /<probe-badge data-label="?hello"?><span>child<\/span><\/probe-badge>/,
      );
    }
  });

  it("upgrades static custom elements from the page browser graph", () => {
    assert.deepEqual(run({ CASE: "custom-elements-browser" }), {
      upgraded: true,
      content: "child",
    });
  });

  it("scopes custom elements aliases and clears generated declarations", () => {
    assert.deepEqual(run({ CASE: "custom-elements-cache" }), {
      aliases: ["alias-a", "alias-b"],
      sameDeclaration: true,
      sameRegistration: true,
      cleared: true,
      rebuilt: true,
      origin: true,
      rejectsRuntimeFiles: true,
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
