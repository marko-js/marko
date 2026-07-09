import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();
const clickToggle = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.toggle")!.click();
const clickWidget = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.widget")!.click();

// Async content inside a fragment frame (the two-frame model, see
// designs/persisted-pages-architecture.md, "Fragment frames"): the cross-route fragment ships the
// `<try>`'s placeholder in its markup, bracketed as the try branch's
// placeholder branch, while the awaited body stays server-side; when the
// promise resolves, the body's resumable HTML arrives as a boundary-body
// entry the applier swaps in where the placeholder sits. The intermediate
// frame snapshot shows the placeholder state -- exactly a streamed MPA
// render's progression, minus the shell.
export const config: TestConfig = {
  // Fragment-first (the run router's contract) -- async boundary bodies
  // arrive through the reorder channel either way; the persisted entry
  // just stops shipping the construction material fills-path swaps needed.
  persisted: "fragments",
  // The computes are server-only by design, so a plain client render of
  // this template is impossible.
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "home" } },
    clickCount,
    // Cross-route fragment: frame 1 = sync markup + placeholder; frame 2 =
    // the resolved report body (interactive widget + keyed loop) swapped
    // in for the placeholder.
    navigate({
      $global: {
        persisted: true,
        persistedSeed: true,
        persistedFragment: true,
        view: "reports",
        user: "ada",
        range: "day",
        focus: "views",
        stamp: "today",
      },
    }),
    clickWidget,
    clickToggle,
    // Same-route update, no fragment: the await re-renders server-side and
    // its body arrives as ordinary fills dispatched into the walker-built
    // body scopes (values, keyed-loop growth, active class) while the
    // widget's ephemeral click count survives.
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
        persistedSeed: true,
        persistedFragment: true,
        view: "home",
      },
    }),
    clickCount,
    clickToggle,
  ],
};
