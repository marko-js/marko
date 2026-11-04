import type { TestConfig } from "../../main.test";

// A template importing itself without `load` renders itself as a recursive tag.
export const config: TestConfig = {
  steps: [{ depth: 2 }],
};
