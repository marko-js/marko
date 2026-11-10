import type { TestConfig } from "../../main.test";
// A child's script reading an object literal its call passes re-runs as the child's
// slot changes, which every patch writes anew, as a client update makes it anew.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
