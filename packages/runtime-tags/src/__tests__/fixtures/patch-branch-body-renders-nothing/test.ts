import type { TestConfig } from "../../main.test";

// Bodies that render nothing keep the branch ids their markers and a patch name.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { n: 2, p: Promise.resolve("p") },
    { n: 1, p: Promise.resolve("p") },
  ],
};
