import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The direct call's body derives what its effect reads: a patch writes it and its
// hole, re-runs the effect by its entry, and fills the dynamic tag's join.
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
