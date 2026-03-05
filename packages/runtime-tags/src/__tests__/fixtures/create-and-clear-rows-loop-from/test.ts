import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    {
      to: 3,
    },
    {
      from: 4,
      to: 6,
    },
    {
      from: 7,
      to: 16,
      step: 3,
    },
    {
      from: 0,
      to: -1,
      step: -0.3,
    },
    {
      from: 0,
      to: 3,
      step: 0.5,
    },
  ],
};
