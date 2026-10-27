import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// A whole-`$global` read in client-created structure joins every key, so a
// patch changing any serialized global re-renders it.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [
    { $global: { brand: "acme", serializedGlobals: ["brand"] } },
    click,
    { $global: { brand: "bmce", serializedGlobals: ["brand"] } },
  ],
};
