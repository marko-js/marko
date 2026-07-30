import type { TestConfig } from "../../main";

export const config: TestConfig = {
  equivalent: false,
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
