import type { TestConfig } from "../../main";

export const config: TestConfig = {
  equivalent: false,
  steps: [{ cond: true }, { cond: false }, { cond: true }],
};
