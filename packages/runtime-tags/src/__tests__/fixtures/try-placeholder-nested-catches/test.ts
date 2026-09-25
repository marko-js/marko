import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

const click = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")!.click();

// The inner placeholder always shows for the await, so only it resumes.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, click, wait],
};
