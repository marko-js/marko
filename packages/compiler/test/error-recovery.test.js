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

  // The guide rides the thrown error everywhere else; recovery mode returns
  // instead of throwing, which is how an editor or LSP compiles.
  const withGuideEnv = (value, fn) => {
    const prev = process.env.MARKO_AGENT_FIX_GUIDE;
    process.env.MARKO_AGENT_FIX_GUIDE = value;
    try {
      return fn();
    } finally {
      if (prev === undefined) delete process.env.MARKO_AGENT_FIX_GUIDE;
      else process.env.MARKO_AGENT_FIX_GUIDE = prev;
    }
  };
  const recoveryLabels = (value) =>
    withGuideEnv(value, () =>
      compile("$ const x = ;", {
        translator: "@marko/runtime-tags/translator",
      }).meta.diagnostics.map((d) => d.label),
    );

  it("appends the agent fix guide to the first recovered error", () => {
    const labels = recoveryLabels("1");
    assert.match(labels[0], /Fix guide: READ .*cheatsheet\.md/);
    assert.equal(labels.filter((l) => l.includes("Fix guide")).length, 1);
  });

  it("appends the guide once when a cached compile is repeated", () => {
    // The compile cache shares diagnostic objects, so appending in place would
    // stack another guide onto the same label on every later hit.
    const cache = new Map();
    const labels = withGuideEnv("1", () =>
      [1, 2].map(
        () =>
          compile("$ const x = ;", {
            translator: "@marko/runtime-tags/translator",
            cache,
          }).meta.diagnostics[0].label,
      ),
    );
    assert.equal(labels[1].split("Fix guide").length - 1, 1);
  });

  it("leaves recovered diagnostics alone outside an agent", () => {
    assert.ok(!recoveryLabels("0").some((l) => l.includes("Fix guide")));
  });

  it("still produces code past the error", () => {
    assert.equal(typeof compile("$ const x = ;").code, "string");
  });

  it("aggregates expression errors with an unclosed tag error", () => {
    // The unclosed tag error is recorded against the open tag but must not
    // preempt diagnostics for expressions later in its body.
    assert.throws(
      () => compile("<div>${x..y}"),
      (err) => {
        assert.match(String(err.message), /Unexpected token/);
        assert.match(String(err.message), /Missing ending "div" tag/);
        return true;
      },
    );
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
