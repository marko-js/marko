import type { TestConfig } from "../../main.test";

// Attribute-tag content in a loop, rendered in a child's stateful branch.
export const config: TestConfig = {
  patches: true,
  steps: [
    { labels: ["a", "b"], note: "x" },
    { labels: ["a", "b", "c"], note: "y" },
    { labels: ["c"], note: "z" },
  ],
};
