import assert from "assert";

import type { TestConfig } from "../../main.test";

const click = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")!.click();

// A tag var fed by a `<define>` body param the client owns beside a root
// param: the var wires by the body param's ownership, not the root's.
export const config: TestConfig = {
  patches: true,
  steps: [
    { suffix: "a" },
    click,
    (document: Document) => {
      assert.strictEqual(
        document.querySelector("span")!.textContent +
          "|" +
          document.querySelector("p")!.textContent,
        "1a|[1a]",
      );
    },
  ],
};
