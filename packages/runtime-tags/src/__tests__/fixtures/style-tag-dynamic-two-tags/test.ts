import type { TestConfig } from "../../main";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { a: "red", b: "blue" },
    { a: "green", b: "purple" },
  ],
};
