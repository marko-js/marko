import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The plain twin of patch-child-own-state-written-created: an input change creates
// the child, whose param the caller feeds its own state.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, $global: { flag: "!", serializedGlobals: ["flag"] } },
    click,
    { show: true, $global: { flag: "!", serializedGlobals: ["flag"] } },
    click,
  ],
};
