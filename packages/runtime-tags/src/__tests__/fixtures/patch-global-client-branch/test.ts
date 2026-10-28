import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A keyed `$global` read in a branch the client creates.
export const config: TestConfig = {
  patches: true,
  steps: [
    { name: "n", $global: { brand: "Marko", serializedGlobals: ["brand"] } },
    click,
  ],
};
