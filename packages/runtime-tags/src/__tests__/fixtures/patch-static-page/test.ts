import type { TestConfig } from "../../main.test";

// A patch page with nothing to resume still exposes `patch`: the
// router asks every patch page for one.
export const config: TestConfig = {
  patches: true,
  steps: [{}, {}],
};
