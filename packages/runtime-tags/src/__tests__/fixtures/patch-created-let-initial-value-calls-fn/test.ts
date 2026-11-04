import type { TestConfig } from "../../main.test";

// A `<let>` whose initial value calls a local function, in a branch a patch
// creates: the patch seeds the `<let>`, and the intersection runs no setup.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, v: "a", w: "1" },
    { show: true, v: "a", w: "2" },
    { show: true, v: "a", w: "3" },
  ],
};
