import type { TestConfig } from "../../main.test";

// patch-page-child-let-init-constant without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { more: false, label: "a" },
    { more: true, label: "b" },
    { more: false, label: "c" },
    { more: true, label: "d" },
  ],
};
