import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    {
      items: [
        { key: "a", on: true },
        { key: "b", on: false },
      ],
    },
  ],
};
