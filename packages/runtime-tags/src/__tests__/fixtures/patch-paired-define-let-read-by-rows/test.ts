import type { TestConfig } from "../../main.test";

const pickLast = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button:last-of-type")!.click();
};

// A `<let>` only a loop's rows read, in a `<define>` body the page's root calls: no flush
// creates its scope, so it compiles no fill.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, pickLast, { label: "b" }],
};
