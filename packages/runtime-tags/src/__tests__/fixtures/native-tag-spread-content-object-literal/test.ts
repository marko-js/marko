import type { TestConfig } from "../../main.test";

// An object literal spread is its attributes, so `content` selects as `content=` does.
export const config: TestConfig = {
  steps: [
    {
      which: true,
      title: "a",
      key: "data-key",
    },
  ],
};
