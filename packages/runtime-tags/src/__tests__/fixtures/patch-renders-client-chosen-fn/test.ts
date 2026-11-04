import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A text rendering the client-chosen function's result re-renders once a capture
// changes, by the choice's init.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, click, { title: "b" }, click, { title: "c" }],
};
