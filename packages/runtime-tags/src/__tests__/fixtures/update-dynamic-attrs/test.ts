import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    {
      value: { a: 1, b: 2 },
    },
    {
      value: { b: 2, c: 3 },
    },
    {
      value: {},
    },
    {
      value: null,
    },
    {
      value: { a: 1 },
    },
  ],
};
