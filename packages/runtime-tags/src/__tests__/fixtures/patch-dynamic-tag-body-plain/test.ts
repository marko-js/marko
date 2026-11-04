import type { TestConfig } from "../../main.test";

// A template renders the body it is handed in patched structure: the patch
// fills the hole, and nothing else ships.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: true, note: "a" },
    { on: true, note: "b" },
    { on: true, note: "c" },
  ],
};
