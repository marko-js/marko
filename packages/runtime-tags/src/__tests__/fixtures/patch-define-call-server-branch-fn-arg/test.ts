import type { TestConfig } from "../../main.test";

// A function a `<define>` body passes, whose readers' params form no group a patch
// build analyzed: it may be written, so it registers as in plain.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a", show: true },
    { label: "b", show: true },
  ],
};
