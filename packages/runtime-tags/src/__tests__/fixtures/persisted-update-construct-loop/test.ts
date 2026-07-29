import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();

// Loop keys disambiguate repeated instances of one compiled dynamic hop.
const items = (a: string, b: string) => [
  { id: 1, view: a },
  { id: 2, view: b },
];

export const config: TestConfig = {
  persisted: true,
  dom_bundle_excludes: ["server-only loop sentinel"],
  // The row's values-free markup is the section's static shell: held once in
  // the lazy persisted entry instead of re-shipped with every constructing
  // patch, and never in an eager module.
  persisted_entry_only: ["LOOP_ONLY_MARKUP"],
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, topic: "x", items: items("a", "b") } },
    clickCount,
    // Row 1 A->B; row 2 holds at B (must not false-fire on the shared anchor id).
    navigate({
      $global: { persisted: true, topic: "x", items: items("b", "b") },
    }),
    clickCount,
    // Reorder both existing keys and add a new key. The new row is delivered
    // from the body's wire shell; existing rows move and receive sparse merges.
    navigate({
      $global: {
        persisted: true,
        topic: "x",
        items: [
          { id: 2, view: "a" },
          { id: 3, view: "a" },
          { id: 1, view: "b" },
        ],
      },
    }),
    clickCount,
    // Remove the middle key and update the remaining keyed renderer.
    navigate({
      $global: {
        persisted: true,
        topic: "x",
        items: [
          { id: 1, view: "a" },
          { id: 2, view: "b" },
        ],
      },
    }),
    (document: Document) => {
      assert.deepEqual(
        [...document.querySelectorAll("ul > span.a, ul > section.b")].map(
          (el) => el.className,
        ),
        ["a", "b"],
      );
    },
  ],
};
