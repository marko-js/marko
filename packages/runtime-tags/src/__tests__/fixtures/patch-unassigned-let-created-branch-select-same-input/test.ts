import type { TestConfig } from "../../main.test";

// An unassigned `<let>` read through an `<if>` it selects in a branch a patch creates,
// its input unchanged: a fresh render shows the client's value.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, v: "a" },
    { show: true, v: "a" },
    { show: false, v: "a" },
    { show: true, v: "a" },
  ],
};
