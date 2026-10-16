import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// A client-rendered script runs in place once it connects, as the document's
// does, carrying the page's nonce; each new branch runs it again.
export const config: TestConfig = {
  steps: [
    { $global: { cspNonce: "n1", serializedGlobals: { cspNonce: true } } },
    click,
    click,
    click,
  ],
};
