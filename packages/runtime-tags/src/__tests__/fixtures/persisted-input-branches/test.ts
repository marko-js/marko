import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  persisted: true,
  steps: [{ name: "world", show: true, items: [1, 2] }],
};
