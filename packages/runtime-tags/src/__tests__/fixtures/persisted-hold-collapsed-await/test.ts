import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { flush, navigate } from "../../utils/resolve";

const input = (title: string, note: string) => ({
  title,
  note,
  $global: { persisted: true },
});

// The held-parent + nested-miss shape: every group outside the collapsed
// branch holds, so the only changed content is the awaited note inside a
// branch the client has destroyed. The navigation must still apply
// client-side (no document fallback), and the branch must show the
// patched note when it re-expands.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    input("TITLE", "note v1"),
    flush,
    navigate(input("TITLE", "note v1")),
    flush,
    (document: Document) => {
      assert.equal(document.querySelector("p.note")?.textContent, "note v1");
    },
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("button.collapse")!.click(),
    (document: Document) => {
      assert.equal(document.querySelector("p.note"), null);
    },
    // Only the hidden await's note changes: the title (and every other
    // group) holds.
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
