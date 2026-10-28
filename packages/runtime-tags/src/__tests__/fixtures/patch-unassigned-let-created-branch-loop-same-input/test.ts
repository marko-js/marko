import type { TestConfig } from "../../main.test";

// An unassigned `<let>` read through rows it gives in a branch a patch creates, its
// input unchanged: a fresh render shows the client's value.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, items: [1] },
    { show: true, items: [1] },
    { show: false, items: [1] },
    { show: true, items: [1] },
  ],
};
