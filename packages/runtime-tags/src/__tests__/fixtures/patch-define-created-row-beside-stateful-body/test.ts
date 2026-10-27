import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A patch creates loop rows calling a `<define>` body another consumer renders
// stateful: each created row passes what it reads, as a client render does.
export const config: TestConfig = {
  patches: true,
  steps: [
    { rows: [1], open: true, label: "a" },
    { rows: [1, 2], open: true, label: "b" },
    click,
    { rows: [2, 3], open: true, label: "c" },
  ],
};
