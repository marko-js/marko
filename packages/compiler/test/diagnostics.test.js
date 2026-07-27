import assert from "assert/strict";

import {
  diagnosticDeprecate,
  diagnosticError,
  diagnosticSuggest,
  diagnosticWarn,
} from "@marko/compiler/babel-utils";

// These take a path only to reach the file behind it, so a stand-in with the
// fields they read is enough to exercise the bookkeeping.
const stubPath = ({ stage = "parse", applyFixes } = {}) => {
  const diagnostics = [];
  return {
    diagnostics,
    node: { loc: { start: { line: 1, column: 0 } } },
    hub: {
      file: {
        metadata: { marko: { diagnostics } },
        markoOpts: { applyFixes },
        ___compileStage: stage,
      },
    },
  };
};

describe("compiler/diagnostics", () => {
  it("records each type", () => {
    const path = stubPath();
    diagnosticError(path, { label: "e" });
    diagnosticWarn(path, { label: "w" });
    diagnosticDeprecate(path, { label: "d" });
    diagnosticSuggest(path, { label: "s" });
    assert.deepEqual(
      path.diagnostics.map((d) => d.type),
      ["error", "warning", "deprecation", "suggestion"],
    );
  });

  it("defaults the location to the path's node", () => {
    const path = stubPath();
    diagnosticError(path, { label: "e" });
    assert.deepEqual(path.diagnostics[0].loc, path.node.loc);
  });

  describe("fixes", () => {
    it("applies a function fix immediately when nothing is selecting", () => {
      const path = stubPath();
      let applied = "not called";
      diagnosticError(path, {
        label: "e",
        fix: (arg) => {
          applied = arg;
        },
      });
      assert.equal(applied, undefined);
      assert.equal(path.diagnostics[0].fix, true);
    });

    it("keeps the rest of an object fix and drops its apply", () => {
      const path = stubPath();
      diagnosticError(path, {
        label: "e",
        fix: { title: "Do the thing", apply() {} },
      });
      assert.deepEqual(path.diagnostics[0].fix, { title: "Do the thing" });
    });

    it("applies only the fix that was selected, by index", () => {
      const path = stubPath({ applyFixes: new Map([[1, "chosen"]]) });
      const applied = [];
      diagnosticError(path, {
        label: "first",
        fix: (arg) => applied.push(["first", arg]),
      });
      diagnosticError(path, {
        label: "second",
        fix: (arg) => applied.push(["second", arg]),
      });
      assert.deepEqual(applied, [["second", "chosen"]]);
    });

    it("refuses a fix registered after the migrate stage", () => {
      const path = stubPath({ stage: "translate" });
      assert.throws(
        () => diagnosticError(path, { label: "e", fix: () => {} }),
        /only be registered up to and including the migrate stage/,
      );
    });
  });
});
