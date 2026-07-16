import type { TestConfig } from "../../main.test";
import { flush, navigate } from "../../utils/resolve";

const clickButton = (container: Element) =>
  container.querySelector("button")!.click();

// A client mutation between frames must render immediately, stay unclobbered,
// and be what the later frame's merge reads back when filling a mixed hole.
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
