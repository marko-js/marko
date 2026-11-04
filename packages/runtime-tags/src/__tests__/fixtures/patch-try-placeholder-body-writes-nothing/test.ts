import type { TestConfig } from "../../main.test";

// A placeholder try whose body a patch leaves as it was: the flush ships no
// placeholder shell, since nothing it sends leaves the body pending.
export const config: TestConfig = {
  patches: true,
  steps: [{ n: 1 }, { n: 2 }],
};
