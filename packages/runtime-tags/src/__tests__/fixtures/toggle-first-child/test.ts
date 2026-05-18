import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    {
      value: "Hello",
    },
    {
      value: false,
    },
    {
      value: "World",
    },
    {
      value: "!",
    },
  ],
};
