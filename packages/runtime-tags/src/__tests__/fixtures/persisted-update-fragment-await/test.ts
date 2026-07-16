import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();
const clickToggle = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.toggle")!.click();
const clickWidget = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.widget")!.click();

// Async content inside a fragment frame: the fragment ships the placeholder
// in its markup and the awaited body arrives as its own boundary-body frame.
export const config: TestConfig = {
  // Fragment-first (the run router's contract): async boundary bodies arrive
  // through the reorder channel either way.
  persisted: true,
  // The computes are server-only by design, so a plain client render of
  // this template is impossible.
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "home" } },
    clickCount,
    // Cross-route fragment: frame 1 = sync markup + placeholder; frame 2 =
    // the resolved report body swapped in for the placeholder.
    navigate({
      $global: {
        persisted: true,
        persistedCrossRoute: true,
        view: "reports",
        user: "ada",
        range: "day",
        focus: "views",
        stamp: "today",
      },
    }),
    clickWidget,
    clickToggle,
    // Same-route update, no fragment: the await re-renders server-side and its
    // body arrives as ordinary fills while the widget's click count survives.
    navigate({
      $global: {
        persisted: true,
        view: "reports",
        user: "grace",
        range: "week",
        focus: "clicks",
        stamp: "tomorrow",
      },
    }),
    clickWidget,
    // Cross-route back: the fragment swap destroys the try/body subtree.
    navigate({
      $global: {
        persisted: true,
        persistedCrossRoute: true,
        view: "home",
      },
    }),
    clickCount,
    clickToggle,
  ],
};
