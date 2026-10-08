import type { TestConfig } from "../../main.test";

const items = ["a", "b", "c"];
const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Loop content one child defines and a sibling renders creates from its shell:
// its attribute tag `<for>` value arrives as a seed, so the handler reads it.
export const config: TestConfig = {
  patches: true,
  steps: [{ items, selected: 0 }, { items, selected: 1 }, click],
};
