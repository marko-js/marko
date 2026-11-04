import type { TestConfig } from "../../main.test";

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// A child a patch creates initializes its `<let>` from the page's state, which
// the branch's init delivers: the patch seeds no stale server value for it.
export const config: TestConfig = {
  patches: true,
  steps: [{}, click, { show: true }],
};
