import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// Pairing-integrity matrix, the fill-level corruptions. The first two are
// DEFINED BEHAVIOR rather than protocol failures (see
// designs/persisted-pages-wire-format.md, "Scope fills" and "Trust
// boundary"): frames are trusted application output, and inside a
// well-formed frame the fill grammar cannot distinguish corruption from
// intent, so both resolve through ordinary sparse-merge semantics instead
// of a guess or a throw. The third -- a frame with no usable fills at all
// -- IS a protocol failure and throws.
//
// 1. Duplicate scope ids: two partials claiming the same patch scope merge
//    key-by-key with the LAST value winning -- the same `Object.assign`
//    extension rule that lets later frames extend earlier scopes, applied
//    within one frame.
// 2. Unknown scope ids: a reference to a patch scope no fill created
//    resolves to an empty patch scope, and absent keys mean unchanged, so
//    the merge no-ops. The orphaned fills (here scope 2's note capture,
//    unreachable once the link points at scope 42) are simply never read:
//    the page keeps its previous values and stays interactive -- stale, not
//    wrong-merged, and the next well-formed patch catches it up.
export const config: TestConfig = {
  persisted: true,
  // The compute is server-only by design, so a plain client render of this
  // template is impossible.
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, topic: "sales" } },
    clickCount,
    // Duplicate ids, conflicting content: the frame's fills are replayed
    // within the same frame with the note value rewritten -- the second
    // partial for the panel scope wins, so the page shows the override.
    navigate(
      { $global: { persisted: true, topic: "growth" } },
      {
        mutateFrames: (frames) =>
          frames.map((frame) => {
            const fills = frame.slice(1, -1);
            return `[${fills},${fills.replace('"growth brief"', '"duplicate wins"')}]`;
          }),
      },
    ),
    clickCount,
    // Unknown id: every reference to the panel's patch scope is rewritten
    // to an id no fill creates. The child link resolves to an empty patch
    // scope, the real fills are orphaned, and the merge no-ops -- the note
    // keeps its previous (overridden) value with no error.
    navigate(
      { $global: { persisted: true, topic: "trends" } },
      {
        mutateFrames: (frames) =>
          frames.map((frame) => frame.replaceAll("_(2)", "_(42)")),
      },
    ),
    clickCount,
    // A frame that executes but yields NO usable fills is the one
    // fill-level corruption that IS a protocol failure: a swallowed frame
    // would be a half-applied navigation, so `createPatch` throws (its
    // `ran`-without-fills check) and the router falls back to a full
    // document navigation.
    navigate(
      { $global: { persisted: true, topic: "ignored" } },
      { mutateFrames: (frames) => frames.map(() => "[]"), expectError: true },
    ),
    clickCount,
    // A well-formed patch catches the stale page back up.
    navigate({ $global: { persisted: true, topic: "quarterly" } }),
    clickCount,
  ],
};
