import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")!.click();

// Content a patch creates reads the page's `<let>` through an alias in a script:
// its shell runs the closure's setup, so the script runs, and again as the `<let>` changes.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [{ show: false, text: "a" }, { show: true, text: "b" }, click],
};
