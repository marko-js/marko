import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a", show: false },
    { label: "b", show: true },
    { label: "c", show: true },
  ],
};
