import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    {
      value: "Hello <strong>World</strong>",
    },
    {
      value: "Some content",
    },
    {
      value: "<div/>",
    },
  ],
};
