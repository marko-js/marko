import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a", show: true }, { label: "b", show: true }],
};
