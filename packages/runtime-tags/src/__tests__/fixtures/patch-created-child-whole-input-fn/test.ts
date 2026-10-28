import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A child a flush creates renders a function from its whole input: a patch
// rewrites the input as the function's captures change.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    click,
    click,
    { show: true, label: "c" },
  ],
};
