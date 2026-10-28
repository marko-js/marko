import type { TestConfig } from "../../main.test";

// A body a flush creates from its registered renderer takes the flush's seeds
// in place of its params, which it never runs on input the flush never sends.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, item: { name: "x" } },
    { show: true, item: { name: "y" } },
    { show: true, item: { name: "z" } },
    { show: false, item: { name: "w" } },
    { show: true, item: { name: "v" } },
  ],
};
