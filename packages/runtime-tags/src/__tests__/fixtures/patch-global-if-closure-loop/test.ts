import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `$global` read in a stateful `<if>` beside a nested `<for>`.
export const config: TestConfig = {
  patches: true,
  steps: [
    { $global: { brand: "acme", serializedGlobals: ["brand"] } },
    { $global: { brand: "bmce", serializedGlobals: ["brand"] } },
    toggle,
    toggle,
    { $global: { brand: "cmce", serializedGlobals: ["brand"] } },
  ],
};
