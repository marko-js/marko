import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A capture in a function a child re-reads fills its owner, whose closure
// re-creates the function for the child to render.
// patch-created-child-const-fn with `g` stored for a script: its fill run re-runs
// the stored value past its skip.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
    click,
    { show: true, label: "d" },
  ],
};
