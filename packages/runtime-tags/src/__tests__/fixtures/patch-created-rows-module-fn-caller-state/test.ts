import type { TestConfig } from "../../main.test";

const clickLabel = (d: Document) =>
  (d.querySelector(".l") as HTMLElement).click();

// A bare module function can't be serialized: a patch creating the scope that holds it
// fails as main's document does.
export const config: TestConfig = {
  patches: true,
  error_html: true,
  // Optimized, the rows derive the function, never serialized: unlike main's,
  // `derivesConstantParam` counts calls in param-selected structure.
  skip_optimize: true,
  steps: [
    { show: false, open: true, items: [1, 2] },
    { show: true, open: true, items: [1, 2] },
    clickLabel,
  ],
};
