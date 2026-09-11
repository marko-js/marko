import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `$global` read in a child a state-selected dynamic tag renders: no
// patch pairs the site, so the page render must join the read.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { $global: { brand: "a", serializedGlobals: ["brand"] } },
    { $global: { brand: "b", serializedGlobals: ["brand"] } },
    click,
    click,
    { $global: { brand: "c", serializedGlobals: ["brand"] } },
  ],
};
