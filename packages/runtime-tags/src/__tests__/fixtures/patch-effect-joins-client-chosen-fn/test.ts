import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A script reading the client-chosen function with other client state re-runs by
// the choice's init.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, click, { title: "b" }, click, { title: "c" }],
};
