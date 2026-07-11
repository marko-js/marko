import * as compiler from "@marko/compiler";
import assert from "assert";

// Warning diagnostics are not part of the fixture snapshot format, so the
// never-assigned `<let>` warning is asserted directly against compile
// metadata here: it must fire on a derived-but-never-assigned `<let>` and
// stay silent for every legitimate `<let>` shape.

const cases: [name: string, source: string, expectWarning: boolean][] = [
  [
    "derived never-assigned let warns",
    `<let/q="">\n<input value:=q>\n<let/filtered=input.items.filter((x) => x.includes(q))>\n<div>\${filtered.length}</div>`,
    true,
  ],
  [
    "assigned let does not warn",
    `<let/count=0>\n<button onClick() { count++ }>\${count}</button>`,
    false,
  ],
  [
    "bound attribute assignment does not warn",
    `<let/q="">\n<input value:=q>\n<div>\${q}</div>`,
    false,
  ],
  [
    "input snapshot assigned in handler does not warn",
    `<let/current=input.value ?? 0>\n<button onClick() { current = 1 }>\${current}</button>`,
    false,
  ],
  [
    "static never-assigned let does not warn",
    `<let/x=5>\n<div>\${x}</div>`,
    false,
  ],
  [
    "controllable let does not warn",
    `<let/open=input.open valueChange=input.openChange>\n<div>\${open}</div>`,
    false,
  ],
];

describe("runtime-tags/translator diagnostics", () => {
  describe("unassigned derived <let> warning", () => {
    for (const [name, source, expectWarning] of cases) {
      it(name, async () => {
        const { meta } = await compiler.compile(
          source,
          `${__dirname}/${name.replace(/[^a-z]+/g, "-")}.marko`,
          {
            translator: "@marko/runtime-tags/translator",
            output: "html",
            optimize: false,
            babelConfig: { babelrc: false, configFile: false },
            writeVersionComment: false,
          },
        );
        const warnings = meta.diagnostics.filter(
          (diag) => diag.type === "warning",
        );
        if (expectWarning) {
          assert.strictEqual(warnings.length, 1, "expected exactly 1 warning");
          assert.ok(
            /never assigned/.test(warnings[0].label) &&
              /<const\//.test(warnings[0].label),
            `unexpected label: ${warnings[0].label}`,
          );
        } else {
          assert.deepStrictEqual(
            warnings.map((w) => w.label),
            [],
            "expected no warnings",
          );
        }
      });
    }
  });
});
