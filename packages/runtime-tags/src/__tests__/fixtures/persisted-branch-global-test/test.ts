import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// `$global` in a stateful test: the client re-selects when either the
// state or the re-shipped global changes.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { $global: { enabled: true, serializedGlobals: ["enabled"] } },
    click,
    click,
    { $global: { enabled: false, serializedGlobals: ["enabled"] } },
    { $global: { enabled: true, serializedGlobals: ["enabled"] } },
  ],
};
