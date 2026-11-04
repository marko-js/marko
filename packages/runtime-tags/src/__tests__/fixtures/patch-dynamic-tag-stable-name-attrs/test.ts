import type { TestConfig } from "../../main.test";

// A <define> renders as a dynamic tag, through a const and by its own name, with a
// server attribute: its renderer never changes, so a patch pairs it and writes its hole.
export const config: TestConfig = {
  patches: true,
  steps: [
    { x: 1, y: "y" },
    { x: 2, y: "y" },
    { x: 1, y: "z" },
  ],
};
