import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A scope-capturing change handler (it assigns a root let) rides the
// fresh seed as a scope-bound reference: after a construct it must reach
// the LIVE scopes, not the wire stash it arrived on.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", show: true },
    { title: "Store!", show: false },
    { title: "Store!", show: true },
    click,
    click,
  ],
};
