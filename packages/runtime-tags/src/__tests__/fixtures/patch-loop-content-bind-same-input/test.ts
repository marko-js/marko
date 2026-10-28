import type { TestConfig } from "../../main.test";

// Loop content bound by id, navigated with unchanged input.
export const config: TestConfig = {
  patches: true,
  steps: [
    { labels: ["a", "b"], note: "x" },
    { labels: ["a", "b"], note: "x" },
  ],
};
