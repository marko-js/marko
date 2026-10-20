import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A direct call spreads a server object into a body a state-selected dynamic tag also
// renders: the instance the client derives takes the spread's push from the fill run.
export const config: TestConfig = {
  patches: true,
  steps: [
    { attrs: { label: "a" } },
    { attrs: { label: "b" } },
    click,
    { attrs: { label: "c" } },
  ],
};
