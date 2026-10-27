import type { TestConfig } from "../../main.test";

const type = (document: Document) => {
  const el = document.querySelector("input")!;
  el.value = "x";
  el.dispatchEvent(new document.defaultView!.Event("input", { bubbles: true }));
};
const click = (document: Document) => document.querySelector("button")!.click();

// Plain twin of patch-controllable-handler-reads-input: a control's inline
// change handler reads an input beside a read client state renders.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ label: "a" }, type, { label: "b" }, click, { label: "c" }, type],
};
