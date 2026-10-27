import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An effect over a client join of a filled input and a marked write runs once per
// patch that changes both: its entry finds the join's render queued it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a", other: "x" },
    { label: "b", other: "y" },
    click,
    { label: "c", other: "z" },
    { label: "c", other: "z" },
  ],
};
