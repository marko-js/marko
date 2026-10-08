import type { TestConfig } from "../../main.test";

// A child created under client state that has moved on joins it with a
// server value.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, x: 5 },
    (d: Document) => d.querySelector<HTMLElement>("button")!.click(),
    { show: true, x: 5 },
  ],
};
