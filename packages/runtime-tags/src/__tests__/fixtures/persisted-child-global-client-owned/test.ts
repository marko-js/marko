import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `$global` read in body content a child renders inside a branch the
// call site selects from state: no patch fills it, so the page render must
// join it (the child's instance mask says the branch is the client's).
export const config: TestConfig = {
  persisted: true,
  steps: [
    { $global: { brand: "a", serializedGlobals: ["brand"] } },
    { $global: { brand: "b", serializedGlobals: ["brand"] } },
    click,
    click,
    { $global: { brand: "c", serializedGlobals: ["brand"] } },
  ],
};
