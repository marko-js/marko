import type { TestConfig } from "../../main.test";
import { flush, navigate } from "../../utils/resolve";

const clickButton = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.clicks")!.click();

// `<@placeholder by=>` recede (designs/persisted-pages-recede.md): the
// boundary's content is keyed by `$global.pid`. Every persisted render
// stashes the newly evaluated identity; the possession echo reports the
// one the page holds, and the server compares:
//
// - identity UNCHANGED (a `rev`-only navigation): today's in-place fill --
//   fine-grained text update, no placeholder, client state everywhere
//   survives.
// - identity CHANGED, body still pending at first flush: RECEDE -- frame 1
//   replaces the stale body with the boundary's own placeholder (the
//   between-frames state shows it), and the body lands in a later frame
//   through the existing boundary-body path (fresh subtree; the click
//   counter above the boundary survives the whole exchange).
// - identity CHANGED, body resolved by first flush: the body entry ships
//   alone -- a same-frame wholesale swap (keyed-remount semantics) that
//   never paints the placeholder, which is the fast-path flash
//   suppression.
export const config: TestConfig = {
  persisted: true,
  // Persisted SSR output carries resume-marker comment nodes that a client
  // render never produces, so the DOM trees are intentionally inequivalent.
  equivalent: false,
  // The scenario is inherently about the update wire's frame timing; there
  // is no equivalent CSR concept.
  skip_csr: true,
  steps: [
    // Settle the boundary so the live page holds a resolved body before
    // any navigation -- the first navigation must exercise the
    // matched-fill path, not the pending-echo one.
    { $global: { persisted: true, pid: 1, rev: "a", tick: 1 } },
    flush,
    clickButton,
    // Same identity (pid 1), new rev: in-place fill. tick 0 resolves
    // immediately, so the body fills ride the first frames.
    navigate({ $global: { persisted: true, pid: 1, rev: "b", tick: 0 } }),
    clickButton,
    // New identity (pid 2), slow body (tick well past the current shared
    // sequence): frame 1 recedes to the placeholder; the body arrives on a
    // later frame once the tick settles. Clicking between frames pins that
    // client state above the boundary survives the recede + swap.
    navigate(
      { $global: { persisted: true, pid: 2, rev: "a", tick: 6 } },
      (container) => {
        container.querySelector<HTMLButtonElement>("button.clicks")!.click();
      },
    ),
    // New identity again (pid 3), but the body resolves immediately: the
    // swap ships in one frame and the placeholder never shows.
    navigate({ $global: { persisted: true, pid: 3, rev: "a", tick: 0 } }),
    clickButton,
    // Same identity (pid 3), new rev: back to in-place fills against the
    // branch the recede path created -- pins that a receded-then-swapped
    // boundary returns to ordinary matched behavior.
    navigate({ $global: { persisted: true, pid: 3, rev: "b", tick: 0 } }),
  ],
};
