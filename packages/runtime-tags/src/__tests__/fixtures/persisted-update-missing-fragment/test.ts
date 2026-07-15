import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// Strips every fragment entry from the patch's frames (wire corruption --
// see the `mutateFrames` hook in utils/resolve.ts): the fills still announce
// the divergent outcome at each site, but the branch content that must
// accompany it is gone.
const stripFragmentEntries = (frames: string[]) =>
  frames.map((frame) =>
    frame.replace(/,\[\d+,"[^"]*","Mnavigate","[^"]*"(?:,\[[^\]]*\])?\]/g, ""),
  );

// Pairing-integrity failure matrix: a structural divergence whose fragment
// entry is missing must fail the apply loudly (the run router's cue to fall
// back to a full document navigation) instead of constructing or guessing
// the divergent content client-side -- persisted builds ship no divergent
// renderer graphs. One template exercises all three compiled dispatches
// that own the check: `_update_dynamic` (a `<${...}/>` hop), `_update_if`
// (a structural `<if>` chain), and `_update_for_keyed`'s fresh path (a new
// keyed `<for>` item). Each corrupted navigation changes ONLY its target
// site, so the pinned failure entries carry no Change section -- the throw
// commits nothing -- and the interleaved clicks prove the live page (and
// its client state) survives untouched. The final navigation replays all
// three changes uncorrupted: the same page recovers through the ordinary
// fragment path.
export const config: TestConfig = {
  persisted: true,
  // The computes are server-only by design, so a plain client render of
  // this template is impossible (and a csr navigation cannot fail this way).
  skip_csr: true,
  equivalent: false,
  steps: [
    {
      $global: {
        persisted: true,
        view: "a",
        topic: "sales",
        alert: false,
        range: "narrow",
      },
    },
    clickCount,
    // Dynamic-tag hop diverges (PanelA -> PanelB) with its fragment entry
    // stripped: `_update_dynamic` must throw, not dispatch PanelB's merge
    // against PanelA's live branch.
    navigate(
      {
        $global: {
          persisted: true,
          view: "b",
          topic: "sales",
          alert: false,
          range: "narrow",
        },
      },
      { mutateFrames: stripFragmentEntries, expectError: true },
    ),
    clickCount,
    // Structural `<if>` flips (else -> consequent) with its fragment entry
    // stripped: `_update_if` must throw, not replay content against the
    // stale branch.
    navigate(
      {
        $global: {
          persisted: true,
          view: "a",
          topic: "sales",
          alert: true,
          range: "narrow",
        },
      },
      { mutateFrames: stripFragmentEntries, expectError: true },
    ),
    clickCount,
    // A fresh keyed `<for>` item (id 3) with its fragment entry stripped:
    // `_update_for_keyed`'s fresh path must throw, not fabricate an empty
    // branch.
    navigate(
      {
        $global: {
          persisted: true,
          view: "a",
          topic: "sales",
          alert: false,
          range: "wide",
        },
      },
      { mutateFrames: stripFragmentEntries, expectError: true },
    ),
    clickCount,
    // Uncorrupted retry of all three changes at once: the same live page
    // recovers through the ordinary fragment path.
    navigate({
      $global: {
        persisted: true,
        view: "b",
        topic: "growth",
        alert: true,
        range: "wide",
      },
    }),
    clickCount,
  ],
};
