import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [{ active: false }, { active: true }, { active: false }],
};
