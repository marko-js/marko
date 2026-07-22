import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickClicks = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.clicks")!.click();

// Pins that a static-count loop whose branches have no resume-time serialize
// reason (server-only hole values, no client state) still constructs each
// item from the body's wire shell under a constructed boundary: patch
// renders track its branches (`_patch_reason`-guarded), so fills pair items.
export const config: TestConfig = {
  persisted: true,
  // The compute is server-only by design, so a plain client render of this
  // template is impossible.
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "home" } },
    clickClicks,
    navigate({
      $global: {
        persisted: true,
        persistedCrossRoute: true,
        view: "ratings",
        topic: "gadgets",
      },
    }),
  ],
};
