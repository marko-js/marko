import type { TestConfig } from "../../main.test";

const clear = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A child's `<let>` holds a `<define>` another body returns: its owner is no scope
// above the content site, and the client's copy reads its closures from it.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }, clear, { label: "c" }],
};
