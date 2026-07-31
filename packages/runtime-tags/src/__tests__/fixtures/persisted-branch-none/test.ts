import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  persisted: true,
  steps: [
    { after: "one" },
    { after: "two" },
    // No branch was rendered; selecting one now must fail the patch.
    { show: true, text: "shown", after: "three" },
  ],
};
