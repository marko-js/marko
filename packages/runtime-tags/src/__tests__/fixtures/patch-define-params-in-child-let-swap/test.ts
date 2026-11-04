import type { TestConfig } from "../../main.test";

const swap = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The child swaps the `<define>` its `<let>` holds for its own: a patch writing the
// page's server value leaves the child's alone.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }, swap, { label: "c" }],
};
