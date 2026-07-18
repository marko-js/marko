import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [{ cents: 250 }, { cents: 3000 }],
};
