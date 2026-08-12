import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A ternary selecting between two server-bound arrows: the fill delivers
// whichever the frame selected, re-bound, with fresh captures.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "a", upper: false },
    click,
    { title: "b", upper: true },
    click,
    { title: "c", upper: false },
    click,
  ],
};
