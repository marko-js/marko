import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A page's content a child holds through its whole input in a `<let>` reads a
// value a patch changes: its fill registers on its own, so the flush reaches it.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }, click, { label: "c" }],
};
