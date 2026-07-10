import type { TestConfig } from "../../main.test";

// SSR/CSR should be equivalent (no async). `equivalent: false` only captures
// both snapshots: the comment rendered empty on the server (`<!---->`), so
// resume's empty-comment fallback creates a new Text node in its place and
// the update renders the comment body as visible text.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    {},
    (container) => {
      container.querySelector("button")!.click();
    },
  ],
};
