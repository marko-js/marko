import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// A branch the client creates reads a `$global` key in a hole and in a script: a patch
// changing the key re-renders the hole and runs the script once.
export const config: TestConfig = {
  patches: true,
  steps: [
    { $global: { brand: "acme", serializedGlobals: ["brand"] } },
    click,
    { $global: { brand: "bmce", serializedGlobals: ["brand"] } },
  ],
};
