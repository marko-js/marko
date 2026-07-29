import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { flush, navigate } from "../../utils/resolve";

const input = (title: string, note: string) => ({
  title,
  note,
  $global: { persisted: true },
});

// The branch collapses BEFORE the first patch, so its group anchor never
// registers client-side. Later navigations whose groups hold (or hit)
// must still apply — a pair-table or dispatch entry for the unreachable
// branch must not fail the navigation — and re-expanding must show the
// latest data.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    input("TITLE", "note v1"),
    flush,
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("button.collapse")!.click(),
    // Seed patch: branch fills park (no live branch to pair).
    navigate(input("TITLE", "note v1")),
    flush,
    // Steady-state patch: everything the server rendered holds.
    navigate(input("TITLE", "note v1")),
    flush,
    // A hidden edit after the holds.
    navigate(input("TITLE", "note v2")),
    flush,
    flush,
    (document: Document) => {
      assert.equal(document.querySelector("p.note"), null, "stays collapsed");
      assert.equal(document.querySelector("h1")?.textContent, "TITLE");
    },
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("button.collapse")!.click(),
    flush,
    flush,
    (document: Document) => {
      assert.equal(
        document.querySelector("p.note")?.textContent,
        "note v2",
        "re-expanded await shows the patched note",
      );
    },
  ],
};
