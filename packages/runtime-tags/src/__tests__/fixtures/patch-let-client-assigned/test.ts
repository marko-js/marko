import type { TestConfig } from "../../main.test";

// A `<let>` a click assigns: its join with changing input follows the client.
export const config: TestConfig = {
  patches: true,
  steps: [
    { v: "a", w: "1" },
    { v: "a", w: "2" },
  ],
};
