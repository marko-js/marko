import type { TestConfig } from "../../main.test";

const type = (document: Document) => {
  for (const el of document.querySelectorAll("input")) {
    el.value = "x";
    el.dispatchEvent(
      new document.defaultView!.Event("input", { bubbles: true }),
    );
  }
};
const click = (document: Document) => document.querySelector("button")!.click();

// Beside the input of patch-controllable-handler-reads-input, a control whose value
// is client state, with a handler reading the same server input: client code sets
// that handler with its value, so a patch writes no bind for it.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, type, { label: "b" }, click, { label: "c" }, type],
};
