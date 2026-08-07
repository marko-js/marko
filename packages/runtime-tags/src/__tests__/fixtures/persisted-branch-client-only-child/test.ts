import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A client-owned chain as an element's only child, followed by a sibling
// server capture: skipping the chain on patch renders must leave the
// sibling's entry (and the frame shape) intact.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "a", label: "l1" },
    click,
    { title: "b", label: "l2" },
    click,
  ],
};
