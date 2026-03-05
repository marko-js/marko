import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: () => [
    {
      value: require("./template.marko").v,
    },
  ],
};
