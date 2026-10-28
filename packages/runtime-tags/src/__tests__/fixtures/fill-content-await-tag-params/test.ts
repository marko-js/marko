import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The plain twin: a resumed page takes no new input, so its client render
// alone shows each step.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { first: "a1", second: "a2" },
    click,
    { first: "b1", second: "b2" },
    click,
  ],
};
