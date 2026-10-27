import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// A lazy child's loop rows read a `$global` key from a nested closure: they
// resume into the key's join on the globals object, and the child's other
// resume data (its click handler) still applies.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [
    { $global: { brand: "acme", serializedGlobals: ["brand"] } },
    click,
    { $global: { brand: "bmce", serializedGlobals: ["brand"] } },
  ],
};
