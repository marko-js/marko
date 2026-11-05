import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{ $global: { x: "$global.x" }, global: { x: "input.global.x" } }],
};
