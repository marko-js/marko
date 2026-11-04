import type { TestConfig } from "../../main.test";

const items = ["a", "b", "c"];

// Attribute tag `<for>` content reads its loop value in a dynamic tag's body too: a
// patch creating the tab a dynamic tag renders, or changing its value, ships that value.
export const config: TestConfig = {
  patches: true,
  steps: [
    { items, selected: 0, wrap: "em" },
    { items, selected: 1, wrap: "em" },
    { items, selected: 2, wrap: "em" },
    { items: ["a", "b", "d"], selected: 2, wrap: "em" },
  ],
};
