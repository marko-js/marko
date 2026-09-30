import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

const clickCounter = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".counter")!.click();
const clickToggle = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".toggle")!.click();

// An await that settles within a reordered body, around one still pending
// there: its content resumes and the branch after it still updates.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, clickCounter, clickToggle, clickToggle],
};
