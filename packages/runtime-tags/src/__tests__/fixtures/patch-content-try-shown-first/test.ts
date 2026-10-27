import type { TestConfig } from "../../main.test";

// Content under a page input that the first document renders: later patches
// pair it, remove it and create it again.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, id: "a" },
    { show: true, id: "b" },
    { show: false, id: "c" },
    { show: true, id: "d" },
  ],
};
