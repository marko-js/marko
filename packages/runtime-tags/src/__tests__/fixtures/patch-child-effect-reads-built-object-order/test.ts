import type { TestConfig } from "../../main.test";
export const config: TestConfig = {
  patches: true,
  steps: [
    { x: "a", y: "b" },
    { x: "c", y: "b" },
    { x: "c", y: "d" },
  ],
};
