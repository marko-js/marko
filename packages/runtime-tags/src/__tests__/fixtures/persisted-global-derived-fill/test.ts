import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `$global`-derived value read inside client-owned structure delivers as
// a fill: each frame re-ships it (globals can change per response), so the
// revealed branch re-renders with the current derivation.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { name: "amy", $global: { prefix: "hi", serializedGlobals: ["prefix"] } },
    click,
    { name: "amy", $global: { prefix: "yo", serializedGlobals: ["prefix"] } },
    click,
    { name: "bob", $global: { prefix: "yo", serializedGlobals: ["prefix"] } },
  ],
};
