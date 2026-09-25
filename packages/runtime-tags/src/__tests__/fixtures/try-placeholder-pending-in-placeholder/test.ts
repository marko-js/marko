import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const click = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")!.click();

// Each placeholder goes pending itself, so every try up the chain resumes its own.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click, wait],
};
