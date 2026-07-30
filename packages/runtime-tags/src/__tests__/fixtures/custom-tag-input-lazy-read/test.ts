import type { TestConfig } from "../../main";

const inc = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".inc")!.click();
const act = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".act")!.click();

export const config: TestConfig = {
  steps: [{}, inc, inc, act],
};
