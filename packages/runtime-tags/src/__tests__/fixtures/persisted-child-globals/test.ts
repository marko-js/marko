import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A child inside client-owned structure reading `$global` renders from the
// live bag: a patched key re-runs its signal, and a re-shown branch
// renders the latest value.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { $global: { brand: "acme", serializedGlobals: ["brand"] } },
    { $global: { brand: "bmce", serializedGlobals: ["brand"] } },
    click,
    { $global: { brand: "cmce", serializedGlobals: ["brand"] } },
    click,
  ],
};
