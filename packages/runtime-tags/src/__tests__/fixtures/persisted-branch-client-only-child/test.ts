import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A client-owned chain as an element's only child: skipping it on patch
// renders must leave the sibling capture (and frame shape) intact.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "a", label: "l1" },
    click,
    { title: "b", label: "l2" },
    click,
  ],
};
