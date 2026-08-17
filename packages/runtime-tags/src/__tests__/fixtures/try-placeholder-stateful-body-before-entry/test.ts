import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

const click = (document: Document) =>
  document.querySelector<HTMLAnchorElement>("a")!.click();

// The streamed body lands before the entry runs, so the reorder runtime has
// already parked the stateful placeholder when resume walks: its effects
// are dropped (never mounted), the body's run normally.
export const config: TestConfig = {
  equivalent: false,
  entry_delay: 1,
  steps: [{}, wait, flush, click],
};
