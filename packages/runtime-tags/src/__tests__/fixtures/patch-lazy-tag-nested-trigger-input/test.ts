import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// A flush writing into a lazy tag whose trigger never fired loads the tag's
// input itself rather than waiting for the trigger, then applies.
export const config: TestConfig = {
  patches: true,
  // Its lazy child loads on a document click trigger, which a client
  // render (loading on render) does not have.
  skip_csr: true,
  equivalent: false,
  steps: [{ label: "a" }, { label: "b" }, click],
};
