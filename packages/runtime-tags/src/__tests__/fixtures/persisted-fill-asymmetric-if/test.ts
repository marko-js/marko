import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Asymmetric branch indices (else = 1, inner then = 0): the dispatch args
// carry per-hop indices, so a transposition would deliver to no branch.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: false, inner: true, title: "Store" },
    click,
    { show: false, inner: true, title: "Fresh" },
    click,
    { show: true, inner: true, title: "Fresh" },
  ],
};
