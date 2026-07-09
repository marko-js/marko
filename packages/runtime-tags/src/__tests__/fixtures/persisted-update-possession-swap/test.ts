import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// Possession echo (`x-marko-have`) -- see designs/persisted-pages-architecture.md, "Possession echo".
// A fragment-first build (the run router's contract) drops the fills-path
// construction graph, so a same-route navigation that changes a dynamic tag's
// renderer has nothing to client-construct: without the echo the apply fails
// (`update diverged`) into a full navigation. The client instead echoes which
// renderer it holds at the `<${...}/>` hop; when the update renders a
// different one the server ships a fragment for exactly that hop, so the swap
// applies fine-grained -- the `<let/count>` button state survives it.
export const config: TestConfig = {
  persisted: "fragments",
  // The label compute is server-only by design, so a plain client render of
  // the swapped-in panel is impossible.
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "a", topic: "sales" } },
    clickCount,
    // Same-route dynamic-tag swap (PanelA -> PanelB), NO persistedFragment:
    // the possession miss is what ships the fragment. The button's click
    // count is preserved across the swap.
    navigate({ $global: { persisted: true, view: "b", topic: "sales" } }),
    clickCount,
    // Swap back (PanelB -> PanelA), likewise possession-driven.
    navigate({ $global: { persisted: true, view: "a", topic: "growth" } }),
  ],
};
