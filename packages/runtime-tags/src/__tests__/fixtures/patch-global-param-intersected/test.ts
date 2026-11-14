import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.inc")!.click();
};

// A `$global` read mixed with a client-fed param subscribes by its caller
// group, even where an intersection of the param has the patch write it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { $global: { a: "a", serializedGlobals: ["a"] } },
    { $global: { a: "A", serializedGlobals: ["a"] } },
    click,
  ],
};
