import type { TestConfig } from "../../main.test";

// A `<define>` rendering itself, with a whole-input read pruning removes after
// the call, updates the call's input by the tree analysis shaped.
export const config: TestConfig = {
  steps: [
    {},
    (document: Document) => document.querySelector("button")!.click(),
  ],
};
