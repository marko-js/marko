import type { TestConfig } from "../../main.test";

// `<let>`s whose call passes constants: their init never changes, so the page writes
// nothing for them and every patch applies.
export const config: TestConfig = {
  patches: true,
  steps: [
    { more: false, label: "a" },
    { more: true, label: "b" },
    { more: false, label: "c" },
    { more: true, label: "d" },
  ],
};
