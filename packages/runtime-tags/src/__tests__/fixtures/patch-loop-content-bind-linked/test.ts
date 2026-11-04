import type { TestConfig } from "../../main.test";

// Loop content bound by id holds its loop value.
export const config: TestConfig = {
  patches: true,
  steps: [
    { labels: ["a", "b"], note: "x" },
    { labels: ["a", "b", "c"], note: "y" },
    { labels: ["c"], note: "z" },
  ],
};
