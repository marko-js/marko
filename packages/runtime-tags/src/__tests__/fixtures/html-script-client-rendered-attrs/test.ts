import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

// A script runs once the attributes it renders after insertion are set, or not
// at all for a type that is not script; a `src`, even a spread's, lands last.
const ran = (document: Document) => [
  ...(document.defaultView as Window & { ran?: string[] }).ran!,
];
const show = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".show")!.click();
};
const add = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".add")!.click();
};

export const config: TestConfig = {
  steps: [
    {
      root: "r",
      rootAttrs: { src: "/never.js" },
      src: "/never.js",
      a: "x",
      attrs: { type: "text/plain" },
      external: { src: "/never.js", type: "text/plain" },
    },
    (document: Document) => {
      assert.deepEqual(ran(document), ["root r", "row a"]);
    },
    show,
    add,
    (document: Document) => {
      assert.deepEqual(ran(document), [
        "root r",
        "row a",
        "text/plain x",
        "both x",
        "row b",
      ]);
    },
  ],
};
