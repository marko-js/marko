import type { TestConfig } from "../../main.test";
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { x: "a", y: "b" },
    { x: "c", y: "b" },
    { x: "c", y: "d" },
  ],
};
