import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    {
      children: {
        "1": "a",
        "2": "b",
        "3": "c",
      },
    },
    {
      children: {},
    },
    {
      children: {
        "1": "a",
        "2": "b",
        "3": "c",
      },
    },
  ],
};
