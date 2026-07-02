import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { color: "red} :root { display: none } </style><script>alert(1)</script>" },
    shellRule(
      "{--x:red\\} :root \\7B  display: none \\} \\3C /style\\>\\3C script\\>alert(1)\\3C /script\\>;}",
    ),
    { color: "red/* (" },
    shellRule("{--x:red\\/* ();}"),
    { color: "red; background: blue" },
    shellRule("{--x:red\\3B  background: blue;}"),
    { color: "green\\" },
    shellRule("{--x:green\\\\;}"),
    { color: "green" },
    shellRule("{--x:green;}"),
  ],
};

// Asserts the current declarations of the dynamic style shell rule, with the
// selector prefix and generated custom property name normalized away.
function shellRule(expected: string) {
  return (container: Element) => {
    const text = container.querySelector("style")!.textContent!;
    assert.equal(
      text.slice(text.indexOf("{")).replace(/--[^:]+:/, "--x:"),
      expected,
    );
  };
}
