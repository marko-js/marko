import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The direct call's body derives what its effect reads from the fill of the
// input it passes: a patch sends only that fill, and the effect re-runs.
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
