import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<define>` body a state-selected dynamic tag also renders: the server writes
// the direct call's holes, and a fill refreshes the dynamic tag's join.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a" },
    { label: "b" },
    click,
    { label: "c" },
    click,
    { label: "d" },
  ],
};
