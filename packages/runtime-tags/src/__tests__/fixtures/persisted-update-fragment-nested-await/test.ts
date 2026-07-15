import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// Async fragment matrix: a pending `<await>` NESTED inside another pending
// boundary's body, inside a cross-route fragment. The three-frame shape
// composes recursively: frame 1 ships the fragment with the OUTER
// placeholder bracketed as its try's placeholder branch; frame 2's
// boundary-body entry swaps the outer body in WITH THE INNER PLACEHOLDER
// bracketed inside it (a boundary-body's markup carries the same "!"
// accessor grammar a fragment's does); frame 3's entry swaps the inner
// body in where that placeholder sits. Each frame leaves the page
// self-consistent (the intermediate snapshots ARE the streamed MPA
// progression), and the sibling-pending limit
// (persisted-update-fragment-two-awaits) does not apply to nesting: only
// one await is pending per boundary body at each level. Client state above
// the fragment survives throughout.
export const config: TestConfig = {
  persisted: true,
  // The computes are server-only by design, so a plain client render of
  // this template is impossible.
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "home" } },
    clickCount,
    navigate({
      $global: {
        persisted: true,
        persistedCrossRoute: true,
        view: "reports",
        topic: "sales",
      },
    }),
    clickCount,
  ],
};
