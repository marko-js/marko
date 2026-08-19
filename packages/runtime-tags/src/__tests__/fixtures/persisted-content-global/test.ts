import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `content=` renderer fed to a content-consuming child at a server-owned
// site: the selection entry pairs the unchanged template each patch while
// its `$global` hole patch-writes.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { $global: { brand: "Acme", serializedGlobals: ["brand"] } },
    click,
    { $global: { brand: "Zed", serializedGlobals: ["brand"] } },
    click,
  ],
};
