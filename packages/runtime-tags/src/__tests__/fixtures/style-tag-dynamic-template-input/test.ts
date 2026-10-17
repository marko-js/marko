import type { TestConfig } from "../../main.test";

// A template created by a new row or a dynamic tag gets its input after its
// setup writes the shell.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { colors: [], show: false, color: "red" },
    { colors: ["red"], show: true, color: "red" },
    { colors: ["blue"], show: true, color: "blue" },
  ],
};
