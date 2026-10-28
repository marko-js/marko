import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<define>` body a state-selected dynamic tag also renders is client-rendered
// structure: the direct call's input refreshes through a fill only its key reaches.
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
