import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<define>` body hole mixing a param its call feeds from state with
// `$global` recomputes client-side from the live bag, as a child's does.
export const config: TestConfig = {
  patches: true,
  steps: [
    { $global: { flag: "!", serializedGlobals: ["flag"] } },
    { $global: { flag: "?", serializedGlobals: ["flag"] } },
    click,
    { $global: { flag: "#", serializedGlobals: ["flag"] } },
    click,
  ],
};
