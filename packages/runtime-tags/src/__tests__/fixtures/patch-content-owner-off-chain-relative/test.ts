import type { TestConfig } from "../../main.test";

const items = ["a", "b", "c"];
const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The same content deep in a page: the hops start from the nearest scope on
// the rendering tag's owner chain (`^`s), shorter than the page root's path.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, items, selected: 0 },
    { show: true, items, selected: 1 },
    click,
  ],
};
