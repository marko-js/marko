import type { TestConfig } from "../../main.test";

// Content client state chooses (`content=`, a spread's, a partial spread's) is
// the resumed page's: a patch update renders none of it, as the logged counts show.
export const config: TestConfig = {
  patches: true,
  steps: [{ b: "b1" }, { b: "b2" }, { b: "b3" }],
};
