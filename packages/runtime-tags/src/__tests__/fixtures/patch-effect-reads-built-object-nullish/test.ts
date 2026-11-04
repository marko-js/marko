import type { TestConfig } from "../../main.test";

// An object built behind `??`: its script depends on its sources, not on the object
// a patch writes anew.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
