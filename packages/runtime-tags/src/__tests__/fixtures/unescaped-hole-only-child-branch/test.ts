import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An unescaped hole as a branch's whole content: the branch's edges follow
// the html it inserts, so a later hide and re-show move the right nodes.
export const config: TestConfig = {
  steps: [{ html: "<b>a</b>" }, click, click, click],
};
