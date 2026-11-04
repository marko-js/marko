import type { TestConfig } from "../../main.test";

// patch-effect-reads-built-object-cond-static without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { flag: true, title: "a" },
    { flag: true, title: "b" },
    { flag: true, title: "b" },
  ],
};
