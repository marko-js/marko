import type { TestConfig } from "../../main.test";

// SSR/CSR should be equivalent here (no async). `equivalent: false` is set
// only to capture both snapshots: resume mistakes the `<!--hi-->` comment for
// `b`'s text node placeholder, so the click writes into the comment's data.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    {},
    (container) => {
      container.querySelector("button")!.click();
    },
  ],
};
