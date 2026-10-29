import type { TestConfig } from "../../main.test";

// An effect reads the `<let>` naming the tag: plain writes it on every render,
// so the page holds it and the patch seeds it, as plain does.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
  ],
};
