import type { TestConfig } from "../../main.test";

// A new row's param reaches its declaration after the row's setup writes the shell.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { colors: ["red"] },
    { colors: ["red", "blue"] },
    { colors: ["red", "green"] },
  ],
};
