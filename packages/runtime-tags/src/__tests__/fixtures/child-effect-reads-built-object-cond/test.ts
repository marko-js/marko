import type { TestConfig } from "../../main.test";
// patch-child-effect-reads-built-object-cond without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { flag: true, title: "a" },
    { flag: true, title: "b" },
    { flag: true, title: "b" },
  ],
};
