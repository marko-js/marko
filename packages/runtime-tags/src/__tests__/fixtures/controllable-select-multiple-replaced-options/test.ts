import type { TestConfig } from "../../main.test";

const click = (sel: string) => (document: Document) =>
  document.querySelector<HTMLButtonElement>(sel)!.click();

export const config: TestConfig = {
  steps: [{}, click(".reload"), click(".drop")],
};
