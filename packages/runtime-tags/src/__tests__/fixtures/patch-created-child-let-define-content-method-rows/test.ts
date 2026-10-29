import type { TestConfig } from "../../main.test";

// patch-created-child-let-define-content, from a method, in rows a patch creates.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
  ],
};
