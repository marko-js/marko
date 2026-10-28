import type { TestConfig } from "../../main.test";

// The handed content renders a server value: a patch pairs it and writes the
// hole, though the attribute changes too.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { x: 1, y: "y" },
    { x: 2, y: "y" },
    { x: 1, y: "z" },
  ],
};
