import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A patch that creates rows and changes the `$global` key they read, in one
// run: the new rows render the key once, the kept ones re-render it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { items: ["a"], $global: { x: "1", serializedGlobals: ["x"] } },
    click,
    { items: ["a", "b", "c"], $global: { x: "2", serializedGlobals: ["x"] } },
    click,
    { items: ["c"], $global: { x: "3", serializedGlobals: ["x"] } },
  ],
};
