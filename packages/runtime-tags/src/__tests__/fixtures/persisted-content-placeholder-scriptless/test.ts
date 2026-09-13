import type { TestConfig } from "../../main.test";

// Boundary content on a scriptless page: the patch walks the resumed branch
// links, constructs the pending UI, and repaints the settled body.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { promise: Promise.resolve(), note: "x" },
    { promise: Promise.resolve(), note: "y" },
  ],
};
