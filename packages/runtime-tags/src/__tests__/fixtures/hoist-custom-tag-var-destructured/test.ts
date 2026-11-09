import type { TestConfig } from "../../main.test";

const hoisted = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".hoisted")!.click();

export const config: TestConfig = {
  steps: [{}, hoisted],
};
