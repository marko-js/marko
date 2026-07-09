import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// The search-filter-chips shape: an item-split class attr (static class +
// keyed dynamic item) whose condition mixes a promoted `$global` read with
// a loop param over server-only data. The server captures the computed
// whole-value class; the update entry must place it -- nothing client-side
// can re-render it (the loop data is server-only, the global never fires).
export const config: TestConfig = {
  persisted: true,
  // The computes genuinely cannot run in the browser, so a plain client
  // render of this template is impossible by design.
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, search: [{ category: "beta" }] } },
    clickCount,
    navigate({ $global: { persisted: true, search: [{ category: "gamma" }] } }),
    clickCount,
  ],
};
