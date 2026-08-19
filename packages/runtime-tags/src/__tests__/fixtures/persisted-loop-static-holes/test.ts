import type { TestConfig } from "../../main.test";

// Static lists whose items hold holes link their items: root loops patch,
// and a loop inside a constructed branch renders its items.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: false, note: "a" },
    { show: true, note: "b" },
    { show: true, note: "c" },
    { show: false, note: "d" },
    { show: true, note: "e" },
  ],
};
