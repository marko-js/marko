import type { TestConfig } from "../../main.test";

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// patch-unassigned-let-created-child-state-init without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click, { show: true }],
};
