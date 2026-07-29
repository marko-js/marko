import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

type Row = [id: string, label: string, cells: [string, string][]];

const input = (rows: Row[]) => ({
  rows: rows.map(([id, label, cells]) => ({
    id,
    label,
    cells: cells.map(([cid, text]) => ({ id: cid, text })),
  })),
  $global: { persisted: true },
});

const BASE: Row[] = [
  [
    "r1",
    "ROW ONE",
    [
      ["c1", "one-a"],
      ["c2", "one-b"],
    ],
  ],
  ["r2", "ROW TWO", [["c3", "two-a"]]],
];

const cells = (document: Document) =>
  [...document.querySelectorAll("li.cell")].map((el) => el.textContent);
const notes = (document: Document) =>
  [...document.querySelectorAll<HTMLInputElement>("input.note")].map(
    (el) => el.value,
  );

// A MATCHED keyed item's merge is what carries its nested structure: the
// item itself is unchanged and pairs by key, so nothing reconstructs it,
// and the inner keyed loop only updates because the item's merge
// dispatches into it. Holes alone would route without that merge, which
// is why this fixture changes nested content rather than the item's own
// text — and why per-item client state must survive it.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    input(BASE),
    (document: Document) => {
      document.querySelectorAll<HTMLInputElement>("input.note")[0]!.value =
        "kept";
      document
        .querySelectorAll<HTMLInputElement>("input.note")[0]!
        .dispatchEvent(new document.defaultView!.Event("input"));
    },
    // Nested cells change while every row key holds.
    navigate(
      input([
        [
          "r1",
          "ROW ONE",
          [
            ["c1", "one-a (edited)"],
            ["c2", "one-b"],
          ],
        ],
        ["r2", "ROW TWO", [["c3", "two-a"]]],
      ]),
    ),
    (document: Document) => {
      assert.deepEqual(cells(document), ["one-a (edited)", "one-b", "two-a"]);
      assert.deepEqual(notes(document), ["kept", ""]);
    },
    // A nested INSERT under a matched item, with the sibling row held.
    navigate(
      input([
        [
          "r1",
          "ROW ONE",
          [
            ["c1", "one-a (edited)"],
            ["c4", "one-c"],
            ["c2", "one-b"],
          ],
        ],
        ["r2", "ROW TWO", [["c3", "two-a"]]],
      ]),
    ),
    (document: Document) => {
      assert.deepEqual(cells(document), [
        "one-a (edited)",
        "one-c",
        "one-b",
        "two-a",
      ]);
      assert.deepEqual(notes(document), ["kept", ""]);
    },
    // A nested REMOVE under the other matched item.
    navigate(
      input([
        [
          "r1",
          "ROW ONE",
          [
            ["c1", "one-a (edited)"],
            ["c4", "one-c"],
            ["c2", "one-b"],
          ],
        ],
        ["r2", "ROW TWO", []],
      ]),
    ),
    (document: Document) => {
      assert.deepEqual(cells(document), ["one-a (edited)", "one-c", "one-b"]);
      assert.deepEqual(notes(document), ["kept", ""]);
    },
  ],
};
