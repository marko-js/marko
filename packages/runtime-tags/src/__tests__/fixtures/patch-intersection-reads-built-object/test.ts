import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An intersection with client state reads an object built from server input: its render
// entry waits on the object's slot, which the patch writes.
export const config: TestConfig = {
  patches: true,
  steps: [{ x: "a" }, click, { x: "b" }, click, { x: "c" }],
};
