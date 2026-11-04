import type { TestConfig } from "../../main.test";

// Controllable inputs over a server-fed `<let>` and one derived from it, created.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, text: "x" },
    { show: true, text: "y" },
  ],
};
