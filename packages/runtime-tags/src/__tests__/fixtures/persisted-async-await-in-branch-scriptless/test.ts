import type { TestConfig } from "../../main.test";

// A scriptless page constructs the await body from its shipped record; the
// dom module never loads.
export const config: TestConfig = {
  persisted: true,
  steps: () => [
    { show: false, promise: Promise.resolve("one") },
    { show: true, promise: Promise.resolve("one") },
  ],
};
