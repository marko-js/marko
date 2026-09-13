import type { TestConfig } from "../../main.test";

// A shell's markup keeps raw newlines; each frame still rides one line.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, { show: 1, note: "a" }, { show: 1, note: "b" }, {}],
};
