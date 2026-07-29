import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { flush, navigate } from "../../utils/resolve";

type Rows = [string, string][];
const input = (a: string, b: string, rowsA: Rows, rowsB: Rows) => ({
  a,
  b,
  rowsA: rowsA.map(([id, text]) => ({ id, text })),
  rowsB: rowsB.map(([id, text]) => ({ id, text })),
  $global: { persisted: true },
});

const BASE = () =>
  input(
    "note a v1",
    "note b v1",
    [
      ["r1", "a-one"],
      ["r2", "a-two"],
    ],
    [["r9", "b-one"]],
  );

const text = (document: Document, selector: string) =>
  [...document.querySelectorAll(selector)].map((el) => el.textContent);

// A dual-body client-state conditional whose BOTH branches carry live
// structural scopes (a boundary and a keyed loop). The server renders its
// own selection while the client shows the other branch: those structural
// fills must never pair to — or write through — the visible branch's live
// records, and the hidden branch must show the patched data on re-entry.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    BASE(),
    flush,
    navigate(BASE()),
    flush,
    (document: Document) => {
      assert.deepEqual(text(document, "p.note-a"), ["note a v1"]);
      assert.deepEqual(text(document, "li.row-a"), ["a-one", "a-two"]);
    },
    // Client selects B; the server keeps rendering A (tab is client state).
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("button.b")!.click(),
    flush,
    flush,
    (document: Document) => {
      assert.deepEqual(text(document, "p.note-b"), ["note b v1"]);
      assert.deepEqual(text(document, "li.row-b"), ["b-one"]);
      assert.equal(document.querySelector("section.pane-a"), null);
    },
    // Patch A's content while B is shown: nothing may leak into B.
    navigate(
      input(
        "note a v2",
        "note b v1",
        [
          ["r1", "a-one (edited)"],
          ["r2", "a-two"],
        ],
        [["r9", "b-one"]],
      ),
    ),
    flush,
    flush,
    (document: Document) => {
      assert.deepEqual(
        text(document, "p.note-b"),
        ["note b v1"],
        "visible branch's boundary took the hidden branch's fills",
      );
      assert.deepEqual(
        text(document, "li.row-b"),
        ["b-one"],
        "visible branch's loop took the hidden branch's rows",
      );
      assert.equal(document.querySelector("section.pane-a"), null);
    },
    // Re-enter A: it must render the patched data, not the pre-patch data.
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("button.a")!.click(),
    flush,
    flush,
    (document: Document) => {
      assert.deepEqual(text(document, "li.row-a"), ["a-one (edited)", "a-two"]);
      assert.deepEqual(text(document, "p.note-a"), ["note a v2"]);
    },
    // A later patch must still reach A's live records (its anchors must
    // not have been rebound to B's during the mismatched navigation).
    navigate(
      input(
        "note a v3",
        "note b v1",
        [
          ["r1", "a-one (again)"],
          ["r2", "a-two"],
        ],
        [["r9", "b-one"]],
      ),
    ),
    flush,
    flush,
    (document: Document) => {
      assert.deepEqual(text(document, "li.row-a"), ["a-one (again)", "a-two"]);
      assert.deepEqual(text(document, "p.note-a"), ["note a v3"]);
    },
  ],
};
