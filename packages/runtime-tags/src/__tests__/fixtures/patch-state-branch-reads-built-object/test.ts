import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A branch state selects reads an object built from server input: the entry re-running
// its closure waits on what the object is built from, which the patch writes.
export const config: TestConfig = {
  patches: true,
  steps: [{ x: "a" }, { x: "b" }, click, click, { x: "c" }],
};
