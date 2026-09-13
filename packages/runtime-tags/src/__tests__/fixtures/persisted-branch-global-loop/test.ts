import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A keyed loop of children selected by a `$global` read inside a server
// branch: the branch declares no reason, so the guard reads the root's.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { $global: { search: [{ q: "a" }], serializedGlobals: ["search"] } },
    click,
    { $global: { search: [{ q: "b" }], serializedGlobals: ["search"] } },
    { $global: { search: [null, true], serializedGlobals: ["search"] } },
    { $global: { search: [{ q: "c" }], serializedGlobals: ["search"] } },
  ],
};
