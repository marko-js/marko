import type { TestConfig } from "../../main.test";

// A child's `<if>` calls a `<define>` declared outside it, beside content that ships the
// walk: nothing on the page renders that `<if>`, so the body's position shakes out unwalked.
export const config: TestConfig = {
  patches: true,
  steps: [
    { n: 1, x: "a", show: true },
    { n: 2, x: "a", show: true },
  ],
};
