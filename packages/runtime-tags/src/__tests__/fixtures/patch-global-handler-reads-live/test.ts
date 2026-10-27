import type { TestConfig } from "../../main.test";

const read = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};
// A handler reads `$global` as it runs: a patch keeps the key current though
// no other client code reads it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { $global: { brand: "a", serializedGlobals: ["brand"] } },
    { $global: { brand: "b", serializedGlobals: ["brand"] } },
    read,
  ],
};
