import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

// Async correctness audit, item 3's other half (designs/persisted-pages-
// roadmap.md, "Correctness"). persisted-update-navigate-pending-await pins
// the case where a navigate's own re-render of a client-pending `<try>`
// resolves synchronously within that render pass; this fixture pins the
// case where it is ALSO still pending at the update response's own first
// flush -- the body only arrives on a later frame, through the same
// two-frame (fragment-body) channel a fragment's pending boundary body
// already uses (`tryBoundaryBody` in html/writer.ts), keyed by the
// pending-boundary possession echo instead of a fragment capture. Client
// state above the boundary (the click counter) must survive the multi-
// frame apply untouched -- pinned by clicking between frames with the
// `betweenFrames` harness hook.
export const config: TestConfig = {
  persisted: true,
  // Persisted SSR output carries resume-marker comment nodes that a client
  // render never produces, so the DOM trees are intentionally inequivalent.
  equivalent: false,
  // The scenario is inherently about the SSR streaming/reorder machinery
  // racing a persisted patch; there is no equivalent CSR concept.
  skip_csr: true,
  steps: [
    {
      title: "First",
      note: "pre-nav-note",
      tick: 4,
      $global: { persisted: true },
    },
    // Deliberately do NOT flush: the placeholder stays shown, so the next
    // navigate's possession echo tells the server this boundary is still
    // pending (same setup as persisted-update-navigate-pending-await).
    navigate(
      {
        title: "Second",
        note: "the recommendation",
        tick: 7,
        $global: { persisted: true },
      },
      // Runs after the update's first frame (the "!"-echoed boundary is
      // still pending server-side too, so frame 1 carries only the
      // synchronous part of the patch) and before its second (the
      // resolved body, delivered once tick 7 settles): a client click here
      // pins that the counter's own state -- above the boundary -- is
      // untouched by the later frame applying underneath it.
      (container) => {
        container.querySelector<HTMLButtonElement>("button.clicks")!.click();
      },
    ),
    // The boundary resolved when the body entry applied above, and applying
    // it flipped the "still pending" stash falsy (`_update_branch`'s clear,
    // mirroring the tombstone a document render writes when its own body
    // resolves). This navigation therefore must NOT echo the boundary as
    // pending: the body is a matched branch now and the note updates
    // through ordinary fills (a fine-grained text update in the snapshot,
    // not a boundary-body swap), preserving the counter yet again.
    navigate({
      title: "Third",
      note: "restocked",
      tick: 2,
      $global: { persisted: true },
    }),
  ],
};
