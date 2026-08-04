import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Serialized globals re-ship with every frame: an event-time `$global`
// read after a patch sees the patched value, not the hydrated one.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { $global: { brand: "Marko", serializedGlobals: ["brand"] } },
    click,
    { $global: { brand: "Runtime", serializedGlobals: ["brand"] } },
    click,
    // A global changing to undefined must overwrite, not be elided.
    { $global: { serializedGlobals: ["brand"] } },
    click,
  ],
};
