import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelectorAll<HTMLButtonElement>("button")[1]?.click();

// Rows a patch adds hold a handler reading a page's unassigned `<let>`: a resumed
// row keeps its marker for the handler, and an added row's handler reads it too.
export const config: TestConfig = {
  patches: true,
  steps: [
    { v: "a", items: [1, 2] },
    click,
    { v: "a", items: [1, 2, 3] },
    click,
  ],
};
