import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `$global` read joined with an input in a branch the client creates: the
// global never arrives as a signal, so the join waits on the input alone.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "a0", $global: { g: "g0", serializedGlobals: ["g"] } },
    click,
    { a: "a1", $global: { g: "g1", serializedGlobals: ["g"] } },
    click,
    click,
  ],
};
