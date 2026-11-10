import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An unescaped hole beside an element in a branch: the element gives the
// branch a node to clone, so the hole needs no marker of its own.
export const config: TestConfig = {
  steps: [{ html: "<b>a</b>" }, click, click, click],
};
