import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `$global`-reading child renders during the patch under an all-client
// mask: globals refresh while the client-fed param keeps its live value.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { $global: { flag: "on", serializedGlobals: ["flag"] } },
    click,
    { $global: { flag: "off", serializedGlobals: ["flag"] } },
    click,
  ],
};
