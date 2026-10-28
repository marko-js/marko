import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};
// A dynamic tag renders a template the patch can't name, so every key ships.
export const config: TestConfig = {
  patches: true,
  steps: [
    { plain: false, $global: { brand: "a", serializedGlobals: ["brand"] } },
    { plain: false, $global: { brand: "b", serializedGlobals: ["brand"] } },
    toggle,
  ],
};
