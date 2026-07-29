import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { flush, navigate } from "../../utils/resolve";

const input = (summary: string, entries: [string, string][]) => ({
  summary,
  entries: entries.map(([id, text]) => ({ id, text })),
  $global: { persisted: true },
});

const entries = (document: Document) =>
  [...document.querySelectorAll("li.entry")].map((el) => el.textContent);
const summary = (document: Document) =>
  document.querySelector("p.summary")?.textContent;

// A branch whose selection is CLIENT state but which is currently shown:
// the client owns the choice, so nothing reconstructs the branch, and its
// nested structure — an await boundary and a keyed loop — only updates
// because the state-selection dispatch merges the rendered branch's
// content into the live one. The branch stays open throughout: this
// fixture is about delivery into a shown gated branch, not re-entry.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    input("SUM 1", [
      ["e1", "entry one"],
      ["e2", "entry two"],
    ]),
    flush,
    (document: Document) => {
      assert.equal(summary(document), "SUM 1");
      assert.deepEqual(entries(document), ["entry one", "entry two"]);
    },
    // Both nested structures change while the gate stays open.
    navigate(
      input("SUM 2", [
        ["e1", "entry one (edited)"],
        ["e2", "entry two"],
      ]),
    ),
    flush,
    flush,
    (document: Document) => {
      assert.deepEqual(
        entries(document),
        ["entry one (edited)", "entry two"],
        "keyed loop inside a shown state-gated branch went stale",
      );
      assert.equal(
        summary(document),
        "SUM 2",
        "await boundary inside a shown state-gated branch went stale",
      );
    },
    // A keyed insert and an awaited change together.
    navigate(
      input("SUM 3", [
        ["e0", "entry zero"],
        ["e1", "entry one (edited)"],
        ["e2", "entry two"],
      ]),
    ),
    flush,
    flush,
    (document: Document) => {
      assert.deepEqual(entries(document), [
        "entry zero",
        "entry one (edited)",
        "entry two",
      ]);
      assert.equal(summary(document), "SUM 3");
    },
  ],
};
