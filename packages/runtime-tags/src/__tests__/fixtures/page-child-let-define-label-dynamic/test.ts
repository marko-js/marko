import type { TestConfig } from "../../main.test";

// patch-page-child-let-define-label-dynamic without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { more: false, label: "a", wrap: true },
    { more: true, label: "b", wrap: true },
    { more: true, label: "c", wrap: true },
  ],
};
