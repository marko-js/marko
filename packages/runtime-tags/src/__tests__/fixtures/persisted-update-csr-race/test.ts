import type { TestConfig } from "../../main.test";
import { flush, navigate } from "../../utils/resolve";

const clickButton = (container: Element) =>
  container.querySelector("button")!.click();

// Async correctness audit, item 1+2 (designs/persisted-pages-roadmap.md
// "Correctness"): a client mutation lands between a navigation's first
// (synchronous) frame and its second (awaited boundary-body) frame -- and
// the mutated state is read INSIDE the pending region itself (a client
// `<let>` mixed with the await's request-derived value in one text hole).
// The click happens while `updating` is unset (each frame's apply is its
// own synchronous window; the gap between frames runs as an ordinary
// client render), so it must both (a) render immediately, unclobbered by
// the later frame, and (b) be the value the later frame's merge reads back
// when it fills the mixed hole -- the merge re-invokes the hole's compute
// against live state, it never carries a stale captured value.
export const config: TestConfig = {
  persisted: true,
  // Persisted SSR output carries resume-marker comment nodes that a client
  // render never produces, so the DOM trees are intentionally inequivalent.
  equivalent: false,
  steps: [
    { title: "First", note: "Ships tomorrow", $global: { persisted: true } },
    // Settle the initial page's await before navigating.
    flush,
    clickButton, // count: 0 -> 1
    navigate(
      { title: "Second", note: "Backordered", $global: { persisted: true } },
      // Runs between frame 1 (title/button fills) and frame 2 (the await's
      // resolved body) -- exactly the click-mid-stream scenario.
      clickButton, // count: 1 -> 2, while frame 2 is still in flight
    ),
    clickButton, // count: 2 -> 3, after the navigation settles
  ],
};
