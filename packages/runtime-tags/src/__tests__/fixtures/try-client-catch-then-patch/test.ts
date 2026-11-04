import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The plain twin of `patch-try-client-catch-then-patch`: the document main
// renders, caught by a client error.
export const config: TestConfig = {
  steps: [{ message: "a" }, click],
};
