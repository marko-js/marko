import type { TestConfig } from "../../main.test";

const type = (document: Document) => {
  const el = document.querySelector("input")!;
  el.value = "x";
  el.dispatchEvent(new document.defaultView!.Event("input", { bubbles: true }));
};
const click = (document: Document) => document.querySelector("button")!.click();

// A control's inline change handler reads an input the server changes, beside
// a read client state renders: it registers once and logs the new value.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, type, { label: "b" }, click, { label: "c" }, type],
};
