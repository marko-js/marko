import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// A child template's script and spread style, created by a client render,
// carry the page's nonce from creation; the script runs once.
export const config: TestConfig = {
  steps: [
    { $global: { cspNonce: "n1", serializedGlobals: { cspNonce: true } } },
    click,
  ],
};
