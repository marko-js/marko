import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A child inside client-owned structure fed a `$global`-derived value: the
// derivation delivers as a fill, so the re-shown child renders the latest
// patch's brand.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { $global: { brand: "acme", serializedGlobals: ["brand"] } },
    { $global: { brand: "bmce", serializedGlobals: ["brand"] } },
    toggle,
    toggle,
  ],
};
