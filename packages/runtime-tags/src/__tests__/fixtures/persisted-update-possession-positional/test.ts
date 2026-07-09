import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// Positional-loop possession collision -- the counterpart to
// persisted-update-possession-loop's keyed case, which disambiguates
// repeated `<${...}/>` hop instances by loop key. A positional `<for>`
// (no `by`) exposes no such key, so every iteration's hop shares one bare
// build-stable site id and `_have`'s scope-tree walk collapses them onto a
// single echo entry: it walks branch lists last-to-first (a LIFO stack), so
// row 1 (the first, UNCHANGED row here) is walked last and its renderer
// overwrites row 2's in the echo, even though row 2 is the row that
// actually changed.
//
// The server's possession check for row 2 then reads row 1's echoed
// renderer, which happens to equal row 2's own *new* renderer, concludes
// (wrongly) the client already holds it, and never ships a fragment for the
// real change. This is a genuine wrong decision, not a harmless miss: the
// echo lookup does not fail, it silently returns the wrong row's answer.
// What actually stops this from corrupting the page is the CLIENT side --
// `_update_dynamic`'s `live[rendererKey] !== rendererId` guard (see
// packages/runtime-tags/src/dom/update.ts) finds no fragment for row 2's
// diverged renderer and throws ("update diverged") instead of dispatching a
// merge against the stale branch, exactly like a genuine cross-route
// divergence -- the real router catches this and falls back to a full
// navigation. This harness has no router to observe that fallback, so it
// pins the throw itself as evidence the collision never applies a corrupt
// patch.
const items = (a: string, b: string) => [{ view: a }, { view: b }];

export const config: TestConfig = {
  persisted: "fragments",
  skip_csr: true,
  equivalent: false,
  // The collision above makes the apply diverge -- see the comment above
  // for why that is the safe outcome, not a bug.
  error_html: true,
  steps: [
    { $global: { persisted: true, topic: "x", items: items("a", "b") } },
    clickCount,
    // Row 2 (positional) B->A while row 1 holds at A: both rows share one
    // site id, the echo collides onto row 1's value, and the server misses
    // row 2's real change -- the apply diverges.
    navigate({
      $global: { persisted: true, topic: "x", items: items("a", "a") },
    }),
  ],
};
