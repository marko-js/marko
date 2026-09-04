import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A fill-fed leaf child per loop item: every live instance re-applies
// the fill, including instances the client creates between patches.
export const config: TestConfig = {
  persisted: true,
  steps: [{ note: "n1" }, click, { note: "n2" }, click, { note: "n3" }],
};
