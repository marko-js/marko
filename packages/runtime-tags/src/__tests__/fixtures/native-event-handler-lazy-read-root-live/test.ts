import type { TestConfig } from "../../main.test";

const show = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".show")!.click();

export const config: TestConfig = {
  steps: [{}, show],
};
