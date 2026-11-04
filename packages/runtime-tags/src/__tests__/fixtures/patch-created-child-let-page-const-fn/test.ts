import type { TestConfig } from "../../main.test";

// A page `<const>`'s function a created child's `<let>` seed carries registers,
// and the page's module loads so the seed's id resolves.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
  ],
};
