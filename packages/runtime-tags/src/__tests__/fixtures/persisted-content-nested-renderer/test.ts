import type { TestConfig } from "../../main.test";

// Content body that itself contains a fed renderer; outer constructs and
// inner re-renders from its selection entry.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: false, note: "x", inner: "div" },
    { show: true, note: "x", inner: "div" },
    { show: true, note: "y", inner: "div" },
    { show: true, note: "y", inner: "span" },
    { show: true, note: "z", inner: "em" },
    { show: true, note: "z", inner: undefined },
  ],
};
