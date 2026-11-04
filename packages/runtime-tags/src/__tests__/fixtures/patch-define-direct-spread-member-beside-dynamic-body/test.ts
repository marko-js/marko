import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A direct call spreads a server object into a body a state-selected dynamic tag
// also renders: the server writes its holes, and a fill refreshes the tag's join.
export const config: TestConfig = {
  patches: true,
  steps: [
    { attrs: { label: "a" } },
    { attrs: { label: "b" } },
    click,
    { attrs: { label: "c" } },
  ],
};
