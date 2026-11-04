import type { TestConfig } from "../../main.test";

// A <define> renders through a const as a dynamic tag with a server attribute:
// its renderer never changes, so a patch pairs it and writes its hole.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { x: 1, y: "y" },
    { x: 2, y: "y" },
    { x: 1, y: "z" },
  ],
};
