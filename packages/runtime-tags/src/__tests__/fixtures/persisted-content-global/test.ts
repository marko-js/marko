import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A content body reading `$global` at a server-owned site on a page with
// client state: the body pairs each patch while its hole patch-writes.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { $global: { brand: "Acme", serializedGlobals: ["brand"] } },
    click,
    { $global: { brand: "Zed", serializedGlobals: ["brand"] } },
    click,
  ],
};
