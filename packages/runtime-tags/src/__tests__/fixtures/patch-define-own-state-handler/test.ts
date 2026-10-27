import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A handler setting a `<define>` body's own state from its param shows the
// param of the page it was patched to.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }, click, { label: "c" }, click],
};
