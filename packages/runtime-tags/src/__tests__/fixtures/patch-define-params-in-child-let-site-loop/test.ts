import type { TestConfig } from "../../main.test";

const clear = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The child renders the `<define>` its `<let>` holds in each row of a loop, with the
// row's param: each row's copy follows the server value a patch writes.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }, clear, { label: "c" }],
};
