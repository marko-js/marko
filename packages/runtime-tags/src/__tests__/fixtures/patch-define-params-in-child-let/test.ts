import type { TestConfig } from "../../main.test";

const clear = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<define>` with params is called in place and stored in a child's `<let>`: that
// copy's renderer registers, and its closure subscription updates it.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }, clear, { label: "c" }],
};
