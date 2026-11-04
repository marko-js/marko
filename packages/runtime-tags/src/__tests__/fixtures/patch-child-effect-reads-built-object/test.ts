import type { TestConfig } from "../../main.test";
// A child's script reading an object its caller builds re-runs as the object's
// slot changes, which every patch writes anew, as a client update makes it anew.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
