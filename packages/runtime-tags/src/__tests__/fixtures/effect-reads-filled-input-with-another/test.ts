import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-effect-reads-filled-input-with-another without patches: the client runs
// the script once per change of either input.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { label: "a", other: "x" },
    { label: "b", other: "x" },
    click,
    { label: "c", other: "y" },
    { label: "d", other: "y" },
  ],
};
