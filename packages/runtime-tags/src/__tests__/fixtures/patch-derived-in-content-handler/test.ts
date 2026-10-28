import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A handler reads a value derived in content no patch writes: after a
// patch it reads the new value.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, click, { label: "b" }, click],
};
