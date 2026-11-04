import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};
// A child whose root renders a `$global` key, in a branch the client opens:
// a patch keeps the key current for that client render.
export const config: TestConfig = {
  patches: true,
  steps: [
    { $global: { brand: "a", serializedGlobals: ["brand"] } },
    { $global: { brand: "b", serializedGlobals: ["brand"] } },
    toggle,
  ],
};
