import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// A client-created template whose script reads only a `$global` key runs it
// as it is created, and again when a patch changes the key.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [
    { $global: { brand: "acme", serializedGlobals: ["brand"] } },
    click,
    { $global: { brand: "bmce", serializedGlobals: ["brand"] } },
  ],
};
