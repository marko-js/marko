import type { TestConfig } from "../../main.test";

// A function whose reader's reason names params no guard groups together: it
// registers wherever that reason may write.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: true, inner: false, v: "a", w: "1" },
    { show: true, inner: true, v: "a", w: "1" },
    { show: true, inner: true, v: "a", w: "2" },
  ],
};
