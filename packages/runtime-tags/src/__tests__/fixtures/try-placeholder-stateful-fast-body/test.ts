import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const click = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")!.click();

// The body streams in before the entry module has run (a slow bundle, or a
// promise that settles right after the placeholder flushed): the reorder
// runtime has already swapped the stateful placeholder out when resume
// first walks, so its markers are detached.
export const config: TestConfig = {
  equivalent: false,
  entry_delay: 1,
  steps: [{}, wait, click],
};
