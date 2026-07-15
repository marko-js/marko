import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickClicks = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.clicks")!.click();

// Pairing-integrity failure matrix: a boundary-body entry re-sent AFTER its
// boundary settled must fail the apply loudly, not double-apply. The
// legitimate single application is consumed (`PENDING_BODY_KEY` is deleted
// from both the patch and live branch, so later frames' re-dispatches take
// the ordinary fills path -- pinned by
// persisted-update-pending-await-streamed's final navigation); a NEW stash
// for a boundary that is no longer pending can therefore only be a stale
// duplicate off the wire. Re-applying it would re-parse the body markup over
// the live subtree -- rebinding node refs to fresh DOM whose effects are
// generation-gated out (a dead, value-reset subtree). `_update_branch`
// instead throws (its `bodyPending` guard) and the router falls back to a
// full document navigation. Frames 1-2 (the real apply) land normally
// before the duplicate arrives, so the pinned failure entry shows the frame
// committing nothing, and the click proves client state ABOVE the boundary
// survives untouched. The boundary's own scopes are not re-exercised: the
// duplicate frame's fill stage re-merged patch data onto them before the
// dispatch threw (boundary scopes are adopted -- patch scope IS live scope
// -- so fills land directly), which is why the failure is TERMINAL for the
// page: the router abandons the update and loads the target document.
export const config: TestConfig = {
  persisted: true,
  // A csr navigation has no frame stream to corrupt.
  skip_csr: true,
  equivalent: false,
  steps: [
    { note: "first", tick: 4, $global: { persisted: true } },
    // Deliberately do NOT flush: the placeholder stays shown, so the
    // navigation's echo reports the boundary as still pending and the
    // resolved body arrives as a boundary-body entry in its own frame.
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
