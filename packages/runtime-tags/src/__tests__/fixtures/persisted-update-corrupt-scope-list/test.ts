import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// Rewrites the boundary-body entry's serialized scope-id list (the trailing
// `[8,7]` -- 8 is the dom-less mounter scope, 7 the body branch; see
// designs/persisted-pages-wire-format.md, "Fragment entries" / scopeIds)
// into `[80,7]`: the real dom-less id is DROPPED and a nonexistent id is
// stamped in its place. Throws if the list is not found so a drifted id
// allocation cannot turn the corruption into a silent no-op.
const corruptScopeIds = (frames: string[]) => {
  const out = frames.map((frame) => frame.replace(",[8,7]]", ",[80,7]]"));
  if (out.join("\n") === frames.join("\n")) {
    throw new Error("mutateFrames: scope-id list [8,7] not found");
  }
  return out;
};

// Pairing-integrity matrix: a malformed fragment/boundary scope-id list is
// NOT detectable -- pinned as DEGRADED, NOT LOUD (see agent-feedback/
// bugs.md). Marker-reachable scopes are stamped by the fragment walker
// itself, so corruption only reaches dom-less scopes (state/wiring only),
// whose absence from the list is indistinguishable from a capture that
// serialized fewer scopes: the markup still applies and the page stays
// interactive, but the orphaned scope's effects are generation-gated out
// (here the mounter's `onReady` never fires, so `.status` sticks at
// "waiting"), while the nonexistent id stamps an empty garbage scope
// nothing reads -- no throw either way. This sits inside the wire format's
// trust boundary (frames are trusted application output; value-level
// corruption is out of protocol scope), and a loud check is not possible
// without breaking the superseded-subtree skip, which legitimately leaves
// entry scopes unstamped (see persisted-update-superseded-frame).
export const config: TestConfig = {
  persisted: true,
  // The compute is server-only by design, so a plain client render of this
  // template is impossible.
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "home", range: "day" } },
    clickCount,
    // Corrupted list: the fragment + boundary body apply fine, but the
    // mounter scope never stamps and `.status` sticks at "waiting" --
    // degraded, no error.
    navigate(
      {
        $global: {
          persisted: true,
          persistedCrossRoute: true,
          view: "reports",
          range: "day",
        },
      },
      { mutateFrames: corruptScopeIds },
    ),
    clickCount,
    // The degraded subtree still tears down cleanly on the next swap.
    navigate({
      $global: { persisted: true, persistedCrossRoute: true, view: "home" },
    }),
    // An intact revisit on the same live page recovers: this time the data
    // promise (the shared resolve tick fired during the earlier steps) is
    // already settled, so the body ships inline in the fragment markup and
    // its scope-id list stamps the mounter -- `.status` reaches "ready".
    navigate({
      $global: {
        persisted: true,
        persistedCrossRoute: true,
        view: "reports",
        range: "week",
      },
    }),
    clickCount,
  ],
};
