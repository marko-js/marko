import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A child hole mixing a client-fed param with `$global` recomputes
// client-side from the live bag.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { $global: { flag: "!", serializedGlobals: ["flag"] } },
    click,
    { $global: { flag: "?", serializedGlobals: ["flag"] } },
    click,
  ],
};
