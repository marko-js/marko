import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

const click = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")!.click();

// Past 54 reorders an id takes a second character; the last `@catch`, whose
// reorder has one, still swaps in and resumes.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, click],
};
