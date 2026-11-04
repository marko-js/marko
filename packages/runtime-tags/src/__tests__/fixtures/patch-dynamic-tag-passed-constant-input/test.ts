import type { TestConfig } from "../../main.test";

// A passed template rendered with constant input: its holes never change, so
// the page leaves them unmarked and a patch writes none of them.
export const config: TestConfig = {
  patches: true,
  steps: [{ n: 1 }, { n: 2 }, { n: 3 }],
};
