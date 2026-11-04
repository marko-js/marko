import type { TestConfig } from "../../main.test";

const read = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};
// A handler a child only spreads onto an element reads `$global` as it runs:
// a patch subscribes nothing for it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { $global: { brand: "a", serializedGlobals: ["brand"] } },
    { $global: { brand: "b", serializedGlobals: ["brand"] } },
    read,
  ],
};
