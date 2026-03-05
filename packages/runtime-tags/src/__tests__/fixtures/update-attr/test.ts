import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    {
      value: 1,
    },
    {
      value: "1",
    },
    {
      value: "2",
    },
    {
      value: null,
    },
    {
      value: "1",
    },
    {
      value: false,
    },
  ],
};
