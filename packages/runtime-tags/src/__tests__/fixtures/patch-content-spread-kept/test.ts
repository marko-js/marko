import type { TestConfig } from "../../main.test";

// Spread content a constant input selects keeps the live branch, as a dynamic
// tag's does: a patch fills its server-owned holes and seeds no creation.
export const config: TestConfig = {
  patches: true,
  steps: [{ b: "b1" }, { b: "b2" }],
};
