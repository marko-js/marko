import type { TestConfig } from "../../main.test";

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// A child a patch creates initializes its `<let>` from the page's state, read
// only by what it renders: the client's group renders it, no patch seeds it.
export const config: TestConfig = {
  patches: true,
  steps: [{}, click, { show: true }],
};
