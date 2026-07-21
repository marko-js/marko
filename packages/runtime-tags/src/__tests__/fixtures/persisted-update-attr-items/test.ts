import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();

// An item-split class attr mixing a promoted `$global` read with a loop param
// over server-only data: the update entry must place the captured whole value.
export const config: TestConfig = {
  persisted: true,
  dom_bundle_excludes: ["getCategories is server-only"],
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
