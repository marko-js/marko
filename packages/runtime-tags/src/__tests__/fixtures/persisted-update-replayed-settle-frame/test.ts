import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickClicks = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.clicks")!.click();

// A settle frame replayed after its boundary already applied is a no-op:
// fills frames are idempotent, so client state and DOM stay intact.
export const config: TestConfig = {
  persisted: true,
  // A csr navigation has no frame stream to duplicate.
  skip_csr: true,
  equivalent: false,
  steps: [
    { note: "first", tick: 4, $global: { persisted: true } },
    // Deliberately not flushed: the placeholder stays shown, so the resolved
    // body arrives as a settle frame of its own.
    navigate(
      { note: "second", tick: 7, $global: { persisted: true } },
      {
        // Re-send the settle frame after it already applied.
        mutateFrames: (frames) => [...frames, frames[frames.length - 1]],
      },
    ),
    clickClicks,
  ],
};
