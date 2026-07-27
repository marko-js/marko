import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { block: "1px", inline: "2px" },
    { block: "3px", inline: "4px" },
  ],
};
