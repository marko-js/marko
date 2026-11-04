import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
function check(document: Document) {
  const ids = new Set<string>();
  for (const input of document.querySelectorAll("input")) {
    assert(!ids.has(input.id), "duplicate id: " + input.id);
    ids.add(input.id);
    assert(!/\s/.test(input.id), "IDREF whitespace: " + input.id);
    assert.equal(input.labels?.length, 1);
    assert.equal(document.getElementById(input.id), input);
  }
}
export const config: TestConfig = {
  patches: false,
  skip_fresh_render: true,
  equivalent: false,
  steps: [
    {
      keys: [
        "",
        ".",
        ":",
        "=",
        "+",
        "*",
        "!",
        "~",
        "~0020",
        "a_x0020b",
        "_",
        "__",
        "_D",
        "a b",
        "a\tb",
        "a\nb",
        "a\u0000b",
        "🙂",
        "\ud800",
        1,
        "1",
        -1,
        1.5,
        9007199254740991,
        9007199254740992,
        9007199254740994,
      ],
    },
    check,
    { keys: [9007199254740994, "1", 1, "~0020", "a b", "~", ".", "new!key"] },
    check,
  ],
};
