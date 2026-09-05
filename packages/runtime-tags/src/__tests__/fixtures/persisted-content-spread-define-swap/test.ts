import type { TestConfig } from "../../main.test";

// A spread `content` selecting between two defines swaps the body.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { which: true, title: "t1" },
    { which: false, title: "t2" },
    { which: true, title: "t3" },
  ],
};
