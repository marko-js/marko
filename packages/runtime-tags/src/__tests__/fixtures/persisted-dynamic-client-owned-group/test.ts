import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A child's dynamic tag whose renderer a client-owned param group selects:
// the resumed page renders the site, a patch skips it.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { label: "one", $global: { brand: "a", serializedGlobals: ["brand"] } },
    { label: "two", $global: { brand: "b", serializedGlobals: ["brand"] } },
    click,
    { label: "three", $global: { brand: "c", serializedGlobals: ["brand"] } },
    click,
    { label: "four", $global: { brand: "d", serializedGlobals: ["brand"] } },
  ],
};
