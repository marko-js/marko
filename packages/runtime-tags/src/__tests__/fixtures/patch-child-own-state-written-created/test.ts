import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A patch creates a child whose written param the caller feeds its own state:
// the write rides the created scope's setup, and the caller links its patcher.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, $global: { flag: "!", serializedGlobals: ["flag"] } },
    click,
    { show: true, $global: { flag: "!", serializedGlobals: ["flag"] } },
    click,
  ],
};
