import type { TestConfig } from "../../main";

const inc = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".inc")!.click();
const show = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".show")!.click();

export const config: TestConfig = {
  steps: [{}, inc, inc, show],
};
