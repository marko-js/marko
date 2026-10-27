import type { TestConfig } from "../../main.test";

const clickB = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.b")!.click();
};
const clickS = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button:not(.b)")!.click();
};

// The caller passes client state for `b` to a row a patch creates: its branch
// subscribes per instance, as the document decides.
export const config: TestConfig = {
  patches: true,
  steps: [
    { obj: { p: 1, q: 2 }, sel: "p" },
    { obj: { p: 3, q: 4 }, sel: "q" },
    clickB,
    clickS,
    clickB,
  ],
};
