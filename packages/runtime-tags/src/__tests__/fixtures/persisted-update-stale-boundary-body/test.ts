import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickClicks = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.clicks")!.click();

// A boundary-body entry re-sent after its boundary settled can only be a
// stale duplicate: the apply must fail loudly into the document fallback.
export const config: TestConfig = {
  persisted: true,
  // A csr navigation has no frame stream to corrupt.
  skip_csr: true,
  equivalent: false,
  steps: [
    { note: "first", tick: 4, $global: { persisted: true } },
    // Deliberately not flushed: the placeholder stays shown, so the resolved
    // body arrives as a boundary-body entry in its own frame.
    navigate(
      { note: "second", tick: 7, $global: { persisted: true } },
      {
        // Re-send the boundary-body frame after it already applied.
        mutateFrames: (frames) => [...frames, frames[frames.length - 1]],
        expectError: true,
      },
    ),
    clickClicks,
  ],
};
