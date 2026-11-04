import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An effect reads a template input a state join fills together with another
// input: only the inputs' own declarations re-run it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a", other: "x" },
    { label: "b", other: "x" },
    click,
    { label: "c", other: "y" },
    { label: "d", other: "y" },
  ],
};
