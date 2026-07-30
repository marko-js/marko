import type { TestConfig } from "../../main";

export const config: TestConfig = {
  equivalent: false,
  steps: [{ x: true }, { x: false }, { x: true }],
};
