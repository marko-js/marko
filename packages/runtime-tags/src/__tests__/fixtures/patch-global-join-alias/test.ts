import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// `$global` joins on a value with a closure and aliases, on an alias with no
// other work, and on a closure read through an alias.
export const config: TestConfig = {
  patches: true,
  steps: [
    { $global: { suffix: "a", serializedGlobals: ["suffix"] } },
    click,
    { $global: { suffix: "b", serializedGlobals: ["suffix"] } },
    click,
  ],
};
