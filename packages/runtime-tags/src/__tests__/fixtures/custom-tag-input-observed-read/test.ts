import type { TestConfig } from "../../main";

const inc = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".inc")!.click();

export const config: TestConfig = {
  steps: [{}, inc, inc],
};
