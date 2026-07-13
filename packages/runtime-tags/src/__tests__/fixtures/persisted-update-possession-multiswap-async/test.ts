import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// Async correctness audit, item 6 (designs/persisted-pages-roadmap.md
// "Correctness"; designs/persisted-pages-architecture.md "Fragment frames",
// v1 limits), PINNED: two `<${...}/>` hops diverge in the same navigation
// (row 1 sync A->B, row 2 async B->Async) -- each gets its own fragment
// entry, but only the FIRST capture may contain async content. Row 2's
// capture, ridden on a detached chunk (see `_fragment`'s
// `state.fragmentTaken` branch), still has a pending boundary when its
// render finishes, so it must abort the whole apply into the router's
// full-navigation fallback rather than let an incomplete capture ride the
// frame -- see the counterpart `persisted-update-possession-multiswap`
// fixture, which pins the all-sync success path this one does not take.
const items = (a: string, b: string) => [
  { id: 1, view: a },
  { id: 2, view: b },
];

export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  error_html: true,
  steps: [
    { $global: { persisted: true, topic: "x", items: items("a", "b") } },
    clickCount,
    // Row 1 (sync) A->B and row 2 (async) B->Async at once.
    navigate({
      $global: { persisted: true, topic: "x", items: items("b", "c") },
    }),
  ],
};
