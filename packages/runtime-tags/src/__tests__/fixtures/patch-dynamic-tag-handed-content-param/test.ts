import type { TestConfig } from "../../main.test";

// The handed content renders the param the child passes it: a patch pairs it
// and writes the param's hole.
export const config: TestConfig = {
  patches: true,
  steps: [
    { x: 1, y: "y" },
    { x: 2, y: "y" },
    { x: 1, y: "z" },
  ],
};
