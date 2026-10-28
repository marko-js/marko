import type { TestConfig } from "../../main.test";

// A created child's never-assigned `<let>` holds an object whose function no
// render reads: its seed is `{ label }`, so the function needs no registration.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
  ],
};
