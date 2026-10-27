import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A script calling a function client state chooses among two live functions re-runs
// once the chosen one's capture changes, by the choice's init.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, click, { title: "b" }, click, { title: "c" }],
};
