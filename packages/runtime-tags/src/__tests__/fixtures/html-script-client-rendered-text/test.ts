import type { TestConfig } from "../../main.test";

const show = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".show")!.click();
};
const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
};

// A script whose text renders after it connects runs once that text lands;
// a later text update runs nothing, as for the document's script.
export const config: TestConfig = {
  steps: [{}, show, inc],
};
