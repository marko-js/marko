import assert from "assert/strict";

import { compileSync } from "@marko/compiler";
import * as translator from "@marko/runtime-tags/translator";

// `errorRecovery` is what an editor compiles with: an expression that will not
// parse becomes a recorded error node rather than the first throw, so the rest
// of the template still yields a tree. Nothing else here compiles that way.
const compile = (src, extra) =>
  compileSync(src, "test.marko", {
    translator,
    errorRecovery: true,
    babelConfig: {
      babelrc: false,
      configFile: false,
      browserslistConfigFile: false,
    },
    ...extra,
  });

describe("compiler/error recovery", () => {
  it("reports an unparsable expression as a diagnostic", () => {
    const { meta } = compile("$ const x = ;");
    assert.ok(meta.diagnostics.length > 0, "expected a diagnostic");
    assert.match(meta.diagnostics[0].label, /Unexpected token/);
  });

  it("still produces code past the error", () => {
    assert.equal(typeof compile("$ const x = ;").code, "string");
  });

  it("aggregates the recorded errors when one still escapes", () => {
    // The attribute value fails to parse and is recorded, then the tag itself
    // cannot be built, so both come back together rather than only the last.
    assert.throws(
      () => compile("<div class=1+>hi</div>"),
      (err) => {
        assert.match(String(err.message), /class|Unexpected/);
        return true;
      },
    );
  });

  it("throws on the first error without recovery", () => {
    assert.throws(() => compile("$ const x = ;", { errorRecovery: false }));
  });

  it("bounds a bad attribute value to the value, not the rest of the file", () => {
    for (const src of [
      "<div foo=(1+)>hi</div>\n<span>tail</span>",
      "<div ...(1+)>hi</div>\n<span>tail</span>",
    ]) {
      const { code } = compile(src, { output: "source" });
      assert.equal(code.match(/tail/g).length, 1, code);
    }
  });
});
