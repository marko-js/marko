import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();
const clickCopy = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.copy")!.click();

// A server-only computation in a freshly created branch must not evaluate
// client-side; handlers inside the fresh branch read the patched value.
export const config: TestConfig = {
  persisted: true,
  dom_bundle_excludes: [
    "getDetails",
    "server-only",
    "Part ",
    "costs ",
    "use price",
  ],
  // The compute genuinely cannot run in the browser, so a plain client
  // render of this template is impossible by design.
  skip_csr: true,
  equivalent: false,
  steps: [
    { detailId: 0, $global: { persisted: true } },
    clickCount,
    navigate({ detailId: 7, $global: { persisted: true } }),
    clickCopy,
    navigate({ detailId: 0, $global: { persisted: true } }),
    clickCount,
  ],
};
