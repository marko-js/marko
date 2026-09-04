import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A static `<try>` renders client-side like any CSR boundary; nothing in
// it depends on the patch stream.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, click, {}, click, {}],
};
