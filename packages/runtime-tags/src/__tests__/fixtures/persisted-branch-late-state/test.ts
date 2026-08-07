import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// State reaching the chain through comment-separated later branches: the
// merged test sources still classify the WHOLE chain client-owned, and
// the middle arm's server value fills fresh when the client cycles to it.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a" }, click, { title: "b" }, click, { title: "c" }, click],
};
