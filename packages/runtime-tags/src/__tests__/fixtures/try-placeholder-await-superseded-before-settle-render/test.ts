import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const first = (document: Document) =>
  document.querySelector<HTMLButtonElement>("#first")!.click();

const third = (document: Document) =>
  document.querySelector<HTMLButtonElement>("#third")!.click();

// A pending or sync value that arrives after its predecessor settles, but
// before that settle renders, supersedes it through the count it took.
export const config: TestConfig = {
  steps: [{}, first, wait, third, wait],
};
