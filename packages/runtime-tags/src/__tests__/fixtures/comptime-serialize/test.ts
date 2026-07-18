import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [{ version: "v2.1" }, { version: "next" }],
};
