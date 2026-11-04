import type { TestConfig } from "../../main.test";

// The content's registration ships the walk, while nothing a page ships keeps the define
// body's position: the walk skips that scope, which a patch reaches by its entries.
export const config: TestConfig = {
  patches: true,
  steps: [
    { n: 1, x: "a" },
    { n: 2, x: "a" },
  ],
};
