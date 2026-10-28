import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-effect-reads-state-join-and-write without patches: the script runs once per
// change of what it reads.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { label: "a", other: "x" },
    { label: "b", other: "y" },
    click,
    { label: "c", other: "z" },
    { label: "c", other: "z" },
  ],
};
