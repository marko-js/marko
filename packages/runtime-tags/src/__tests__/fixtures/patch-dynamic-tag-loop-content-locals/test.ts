import type { TestConfig } from "../../main.test";

const items = ["a", "b", "c"];

// Attribute tag content from a `<for>` reads its loop value; a patch switching
// the tab a dynamic tag renders ships that value with the owner-bound content.
export const config: TestConfig = {
  patches: true,
  steps: [
    { items, selected: 0 },
    { items, selected: 1 },
    { items, selected: 2 },
  ],
};
