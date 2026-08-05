import type { TestConfig } from "../../main.test";

// An UNCONTROLLED input born in a CONSTRUCTED branch: the render-phase
// apply takes the helper's first-render path, so the live value
// initializes from the server (not just the default).
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", show: false, value: "first" },
    { title: "Store!", show: true, value: "second" },
  ],
};
