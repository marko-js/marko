import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// Async correctness audit, items 4 and 7 (designs/persisted-pages-roadmap.md
// "Correctness" -- "abort between frames only", previously unconfirmed
// against a fixture): nav A's stream is aborted between its fragment frame
// (frame 1, placeholder showing) and its boundary-body frame (frame 2,
// dropped -- the run router's per-frame `signal.aborted` check stops
// applying a superseded response). Every frame must be self-consistent on
// its own: after the truncation the page shows nav A's synchronous content
// with the placeholder still up, client interaction keeps working, and nav
// B (home) applies cleanly on top -- its fragment swap destroys the
// still-pending try branch (`removeAndDestroyBranch`), so nav A's never-
// arriving body has nothing left to target and its effects never ran
// (effect entries ride the frame that creates their scopes; the dropped
// frame's effects are dropped with it). A final full-stream navigation
// back to reports proves the truncated navigation left no residue in the
// applier or possession state: fragment + boundary body apply normally.
const topics = {
  persisted: true,
  persistedFragment: true,
};

export const config: TestConfig = {
  persisted: true,
  // The compute is server-only by design, so a plain client render of this
  // template is impossible.
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "home" } },
    clickCount,
    // Nav A: cross-route fragment; drop everything after frame 1 -- the
    // placeholder stays up, the body frame never applies.
    navigate(
      { $global: { ...topics, view: "reports", topic: "sales" } },
      undefined,
      1,
    ),
    clickCount,
    // Nav B supersedes: swap back home, destroying the pending try branch.
    navigate({ $global: { ...topics, view: "home" } }),
    clickCount,
    // Full-stream retry of the same route: no residue from the truncation.
    navigate({ $global: { ...topics, view: "reports", topic: "growth" } }),
    clickCount,
  ],
};
