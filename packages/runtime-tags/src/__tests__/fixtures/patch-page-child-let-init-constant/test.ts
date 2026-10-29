import type { TestConfig } from "../../main.test";

// `<let>`s whose call passes constants, called with patched input.
export const config: TestConfig = {
  patches: true,
  steps: [
    { more: false, label: "a" },
    { more: true, label: "b" },
    { more: false, label: "c" },
    { more: true, label: "d" },
  ],
};
