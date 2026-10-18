import type { TestConfig } from "../../main.test";

// A body a dynamic tag renders natively or hands to a template: what it reads
// fills only where the template holds it, which the server decides at render.
export const config: TestConfig = {
  patches: true,
  steps: [
    { native: false, x: "a" },
    { native: true, x: "b" },
    { native: true, x: "c" },
    { native: false, x: "d" },
  ],
};
