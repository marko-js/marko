import type { TestConfig } from "../../main.test";

// A chain whose test has no sources (a constant pick per loop item) still
// pairs as a patch branch: a constructed body needs its branch entry to
// build the nested chain inside it.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: false, down: false },
    { show: true, down: false },
    { show: true, down: true },
  ],
};
