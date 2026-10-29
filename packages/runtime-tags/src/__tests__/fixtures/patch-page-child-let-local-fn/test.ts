import type { TestConfig } from "../../main.test";

// A function its own template defines: the page loads its code, so the client
// renders its calls.
export const config: TestConfig = {
  patches: true,
  steps: [
    { more: false, label: "a" },
    { more: true, label: "b" },
    { more: true, label: "c" },
  ],
};
