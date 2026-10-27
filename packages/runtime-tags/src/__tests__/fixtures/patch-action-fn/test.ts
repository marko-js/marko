import type { TestConfig } from "../../main.test";

// A patch changes a value an action's function captures: the callable runs the patched function.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [
    { x: 1 },
    { x: 2 },
    (document: Document) => {
      document.querySelector("button")!.click();
      if (document.title !== "2") throw new Error("stale action fn");
    },
  ],
};
