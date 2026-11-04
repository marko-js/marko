import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `$global` read in a stateful `<if>` beside a child reading it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { $global: { brand: "acme", serializedGlobals: ["brand"] } },
    toggle,
    toggle,
    { $global: { brand: "bmce", serializedGlobals: ["brand"] } },
  ],
};
