import type { TestConfig } from "../../main.test";
// patch-define-let-keeps-first-fn without patches: the client render keeps the
// root card's first value.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
  ],
};
