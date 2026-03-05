import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    {
      show: false,
      value1: "Hello",
      value2: "World",
    },
    {
      show: true,
      value1: "Hello",
      value2: "World",
    },
    {
      show: true,
      value1: false,
      value2: "World",
    },
    {
      show: true,
      value1: "Goodbye",
      value2: "World",
    },
    {
      show: false,
      value1: "Goodbye",
      value2: "World",
    },
  ],
};
