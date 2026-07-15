import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// A request-derived keyed `<for>` with a TRAILING sibling in the same parent,
// driven through the empty -> filled -> matched -> reordered -> shrunk cycle.
// Filling an empty loop removes its reference marker from the DOM, so every
// later reconcile must anchor on the surviving branches themselves: an
// anchor derived from the (now detached) marker degraded to "append at the
// parent's end", moving matched items past the trailing `<li>` (and moving
// in-place items at all destroys focus/selection in their subtrees).
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, items: [] } },
    clickCount,
    // Fill the empty loop (fresh keys arrive as resumable fragments); the
    // loop marker leaves the DOM here.
    navigate({
      $global: {
        persisted: true,
        items: [
          { id: "one", label: "a" },
          { id: "two", label: "a" },
        ],
      },
    }),
    // Matched in place: no item may move (and none past the trailing item).
    navigate({
      $global: {
        persisted: true,
        items: [
          { id: "one", label: "b" },
          { id: "two", label: "b" },
        ],
      },
    }),
    // Reorder with the trailing sibling in play.
    navigate({
      $global: {
        persisted: true,
        items: [
          { id: "two", label: "c" },
          { id: "one", label: "c" },
        ],
      },
    }),
    // Shrink back to one; the trailing item must still close the list.
    navigate({
      $global: {
        persisted: true,
        items: [{ id: "two", label: "d" }],
      },
    }),
  ],
};
