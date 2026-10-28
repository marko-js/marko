import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A stateful branch reads a value derived twice in content no patch writes.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, click, { label: "b" }],
};
