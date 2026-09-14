import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Statics after a spread render separately: the partial entry names them
// so the client leaves them alone while re-applying the spread's set.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { attrs: { title: "A", "data-x": "1" }, box: { id: "b1" }, label: "l1" },
    click,
    { attrs: { title: "B" }, box: { id: "b2", title: "t" }, label: "l2" },
    click,
  ],
};
