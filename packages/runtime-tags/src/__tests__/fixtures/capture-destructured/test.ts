import type { TestConfig } from "../../main.test";

// patch-capture-destructured without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ v: { title: "a" } }, { v: { title: "b" } }, { v: { title: "b" } }],
};
