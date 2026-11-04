import type { TestConfig } from "../../main.test";

// A wrapper spreads rest attrs before a complete controllable.
export const config: TestConfig = {
  patches: true,
  steps: [
    { hint: "a", v: "x" },
    { hint: "b", v: "y" },
  ],
};
