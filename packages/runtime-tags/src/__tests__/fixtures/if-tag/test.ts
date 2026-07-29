import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  persisted: true,
  steps: [{ a: 1, b: 2, x: false, y: true }],
};
