import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A function alias invoked inside client-owned structure reads its
// captures from the live scope, which the patch keeps current.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a" }, click, { title: "b" }, click, click],
};
