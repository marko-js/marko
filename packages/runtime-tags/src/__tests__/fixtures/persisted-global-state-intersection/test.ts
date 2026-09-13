import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// `$global` mixed with state recomputes client-side: a changed key or a
// state change both re-render the hole.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { $global: { brand: "Marko", serializedGlobals: ["brand"] } },
    click,
    { $global: { brand: "Runtime", serializedGlobals: ["brand"] } },
    click,
  ],
};
