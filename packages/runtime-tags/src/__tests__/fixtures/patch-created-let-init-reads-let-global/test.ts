import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")!.click();

// A `<let>` whose init reads a filled `<let>` and a `$global` key: the client runs
// the init, so the created scope takes no fill for it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, $global: { n: 5, serializedGlobals: ["n"] } },
    { show: true, $global: { n: 5, serializedGlobals: ["n"] } },
    click,
  ],
};
