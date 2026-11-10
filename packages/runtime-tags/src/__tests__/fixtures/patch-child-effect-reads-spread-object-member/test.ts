import type { TestConfig } from "../../main.test";

// A child's script reading an object a call spreads from a `<const>` it builds
// re-runs by what that `<const>` is built from.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
