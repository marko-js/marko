import assert from "assert/strict";

import { compileSync } from "@marko/compiler";
import * as translator from "@marko/runtime-tags/translator";

// Analyze-phase mistakes are recorded as diagnostics rather than thrown, so one
// compile can report several; two or more come back as a single CompileErrors.
const compile = (src) =>
  compileSync(src, "test.marko", {
    translator,
    code: false,
    babelConfig: {
      babelrc: false,
      configFile: false,
      browserslistConfigFile: false,
    },
  });

const failing = (src) => {
  try {
    compile(src);
  } catch (err) {
    return err;
  }
  assert.fail("expected a compile error");
};

describe("compiler/aggregate errors", () => {
  it("throws the error itself when there is only one", () => {
    const err = failing("<if>a</if>");
    assert.equal(err.name, "CompileError");
    assert.equal(err.errors, undefined);
  });

  it("collects several into one CompileErrors", () => {
    const err = failing("<if>a</if>\n<if>b</if>");
    assert.equal(err.name, "CompileErrors");
    assert.equal(err.errors.length, 2);
    assert.ok(err instanceof Error);
  });

  it("names itself and strips ansi when stringified", () => {
    const err = failing("<if>a</if>\n<if>b</if>");
    const text = String(err);
    assert.ok(text.startsWith("CompileErrors: "), text);
    assert.doesNotMatch(text, /\u001b\[/, "expected no ansi escapes");
    assert.match(text, /test\.marko:1/);
    assert.match(text, /test\.marko:2/);
  });

  it("serializes to the same text a bundler would log", () => {
    const err = failing("<if>a</if>\n<if>b</if>");
    assert.equal(err.toJSON(), String(err));
    assert.equal(JSON.parse(JSON.stringify({ err })).err, String(err));
  });
});
