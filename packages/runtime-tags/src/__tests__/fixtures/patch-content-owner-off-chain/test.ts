import type { TestConfig } from "../../main.test";

const items = ["a", "b", "c"];
const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Content one child defines and a sibling renders: its owner is off the
// rendering tag's owner chain, so the entry names it by hops from the page root.
export const config: TestConfig = {
  patches: true,
  steps: [{ items, selected: 0 }, { items, selected: 1 }, click],
};
