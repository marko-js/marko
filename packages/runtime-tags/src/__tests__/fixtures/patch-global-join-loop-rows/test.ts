import type { TestConfig } from "../../main.test";

const click = (selector: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(selector)!.click();
};

// A `$global` key a loop's rows read in stateful structure, the rows all
// the client's: a patch changing it reaches each, with no row on the server.
export const config: TestConfig = {
  patches: true,
  steps: [
    { $global: { x: "a", serializedGlobals: ["x"] } },
    click("button.inc"),
    click("button.inc"),
    { $global: { x: "b", serializedGlobals: ["x"] } },
    click("button.dec"),
    { $global: { x: "c", serializedGlobals: ["x"] } },
  ],
};
