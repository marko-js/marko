import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The client-chosen function rendered and called by a script: its stored value's
// init re-runs both.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, click, { title: "b" }, click, { title: "c" }],
};
