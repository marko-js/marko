import type { TestConfig } from "../../main.test";

// A created `<let>` holds an object literal whose function no render reads:
// its seed is `{ label }`, so the function needs no registration.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
  ],
};
