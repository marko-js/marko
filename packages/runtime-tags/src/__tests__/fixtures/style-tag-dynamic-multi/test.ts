import type { TestConfig } from "../../main";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { color: "green", width: "10px" },
    { color: "blue", width: "20px" },
  ],
};
