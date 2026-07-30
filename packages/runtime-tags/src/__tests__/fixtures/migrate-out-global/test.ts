import type { TestConfig } from "../../main";

export const config: TestConfig = {
  steps: [{ $global: { x: 1 } }],
};
