import type { TestConfig } from "../../main.test";

// A persisted page with nothing to resume still exposes `patch`: the
// router asks every persisted page for one.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, {}],
};
