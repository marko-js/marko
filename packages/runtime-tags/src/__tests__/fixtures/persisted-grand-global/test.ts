import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A grandchild reading `$global` inside client-owned structure re-renders
// from the re-shipped bag at any depth.
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
