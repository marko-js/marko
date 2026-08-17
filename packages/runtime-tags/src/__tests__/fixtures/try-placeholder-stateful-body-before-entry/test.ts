import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

const click = (document: Document) =>
  document.querySelector<HTMLAnchorElement>("a")!.click();

// The streamed body lands before the entry runs, so the reorder runtime has
// already parked the stateful placeholder when resume walks: it mounts and
// is torn down within the same effects run, and the body's run normally.
export const config: TestConfig = {
  equivalent: false,
  entry_delay: 1,
  steps: [{}, wait, flush, click],
};
