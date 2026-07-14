import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();
const clickCopy = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.copy")!.click();

// The `<if>` branch's `<const/details=getDetails(...)>` stands in for a
// `server import`ed computation: callable during server renders only. A
// persisted navigation that freshly creates the branch client-side must
// not evaluate it -- the value is the patch's payload -- while event
// handlers inside the fresh branch still read the patched value.
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
