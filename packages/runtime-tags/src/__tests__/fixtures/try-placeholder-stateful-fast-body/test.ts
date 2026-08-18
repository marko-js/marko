import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const click = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")!.click();

// The body streams in before the entry runs: the placeholder was already
// swapped out when resume first walks.
export const config: TestConfig = {
  equivalent: false,
  entry_delay: 1,
  steps: [{}, wait, click],
};
