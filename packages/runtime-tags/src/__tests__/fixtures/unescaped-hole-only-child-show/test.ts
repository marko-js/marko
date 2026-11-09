import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An unescaped hole as a `<show>` body that is a branch's whole content: the
// `<show>` range markers around it are its parent's other children.
export const config: TestConfig = {
  steps: [{ html: "<b>a</b><i>b</i>" }, click, click],
};
