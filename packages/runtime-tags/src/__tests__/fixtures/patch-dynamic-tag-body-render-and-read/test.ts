import type { TestConfig } from "../../main.test";

// A renderer renders the body in patched structure and only tests it in its
// stateful structure: the patch fills the hole, and no fill value should ship.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: true, note: "a" },
    { on: true, note: "b" },
    { on: true, note: "c" },
  ],
};
