import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An initially empty only-child loop: patches leave it alone and the
// first client growth mounts into the (possibly elided) marker cleanly.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, {}, click, {}, click],
};
