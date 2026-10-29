import type { TestConfig } from "../../main.test";

// A function made of the function a `<let>` holds, called with patched input:
// the page ships both, and the client calls them.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }, { label: "c" }],
};
