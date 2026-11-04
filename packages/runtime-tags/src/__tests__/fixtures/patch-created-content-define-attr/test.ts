import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a", tag: "span" },
    { show: true, label: "b", tag: "span" },
    { show: true, label: "c", tag: "i" },
  ],
};
