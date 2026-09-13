import type { TestConfig } from "../../main.test";

// A CONTROLLED select: the patch's value entry re-selects the server's
// option through the controlled helper.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", choice: "a" },
    { title: "Store!", choice: "b" },
  ],
};
