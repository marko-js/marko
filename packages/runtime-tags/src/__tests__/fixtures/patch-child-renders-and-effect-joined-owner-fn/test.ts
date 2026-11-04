import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A child rendering and logging a function with written captures among its joined inputs re-runs
// both by its captures.
export const config: TestConfig = {
  patches: true,
  steps: [
    { title: "a" },
    { title: "b" },
    click,
    { title: "c" },
    click,
    { title: "d" },
  ],
};
