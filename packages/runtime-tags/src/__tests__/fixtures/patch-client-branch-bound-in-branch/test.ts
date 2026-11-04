import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, inner: true, label: "a", tag: "span" },
    { show: true, inner: true, label: "b", tag: "span" },
    { show: true, inner: true, label: "c", tag: "i" },
  ],
};
