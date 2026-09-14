import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The child is fed nothing but the body (an all-constant ownership mask):
// the page still renders and serializes its stateful branch.
export const config: TestConfig = {
  persisted: true,
  steps: [{ note: "x" }, { note: "y" }, click, { note: "z" }, click],
};
