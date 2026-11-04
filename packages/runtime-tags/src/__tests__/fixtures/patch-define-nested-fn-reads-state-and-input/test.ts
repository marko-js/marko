import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A function reading client state and server input, passed on through a `<define>` body:
// its group differs between a page and a patch render, so the nested call composes it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { step: 1, label: "a" },
    click,
    { step: 2, label: "b" },
    click,
    { step: 3, label: "c" },
    click,
  ],
};
