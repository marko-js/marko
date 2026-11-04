import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A child's `<if>` calls a `<define>` declared outside it: where a caller hands the client
// that `<if>`, the client creates the body, and the walk re-runs its subscriber.
export const config: TestConfig = {
  patches: true,
  steps: [
    { n: 1, x: "a", show: true },
    { n: 2, x: "a", show: true },
    toggle,
    toggle,
    { n: 3, x: "a", show: true },
  ],
};
