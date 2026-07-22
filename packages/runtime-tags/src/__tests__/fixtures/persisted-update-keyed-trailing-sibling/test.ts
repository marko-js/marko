import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();

// A keyed `<for>` with a trailing sibling, cycled empty/filled/reordered:
// reconciles must anchor on surviving branches, not the detached marker.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, items: [] } },
    clickCount,
    // Fill the empty loop (fresh keys construct from the body shell); the
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
