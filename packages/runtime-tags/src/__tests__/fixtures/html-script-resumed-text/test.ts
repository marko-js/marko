import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// A server-rendered script that did not start (empty, or not a script type)
// starts once the client inserts its text, as in a browser.
export const config: TestConfig = {
  steps: [{}, click],
};
