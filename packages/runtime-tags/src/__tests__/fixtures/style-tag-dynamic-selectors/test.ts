import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { color: "red", pad: 4, hover: "darkred", wide: "crimson" },
    { color: "blue", pad: 8, hover: "navy", wide: "teal" },
  ],
};
