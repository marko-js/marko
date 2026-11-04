import type { TestConfig } from "../../main.test";

const click = (selector: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(selector)!.click();
};

// A client-created template passing body content that reads a `$global` key
// subscribes as it is created, so a patch changing the key updates the body.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [
    { $global: { brand: "acme", serializedGlobals: ["brand"] } },
    click(".a"),
    { $global: { brand: "bmce", serializedGlobals: ["brand"] } },
  ],
};
