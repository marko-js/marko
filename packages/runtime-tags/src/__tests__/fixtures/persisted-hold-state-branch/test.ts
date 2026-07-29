import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { flush, navigate } from "../../utils/resolve";

type Threads = [
  id: string,
  title: string,
  note: string,
  replies: [string, string][],
][];

const input = (threads: Threads) => ({
  threads: threads.map(([id, title, note, replies]) => ({
    id,
    title,
    note,
    replies: replies.map(([rid, text]) => ({ id: rid, text })),
  })),
  $global: { persisted: true },
});

const BASE: Threads = [
  [
    "t1",
    "THREAD-ALPHA",
    "note alpha v1",
    [
      ["r1", "reply one"],
      ["r2", "reply two"],
    ],
  ],
  ["t2", "THREAD-BETA", "note beta v1", [["r3", "reply three"]]],
];

const replies = (document: Document) =>
  [...document.querySelectorAll("li.reply")].map((el) => el.textContent);
const notes = (document: Document) =>
  [...document.querySelectorAll("p.note")].map((el) => el.textContent);

// Request-fed content INSIDE a client-state-driven branch: the branch's
// condition is client-owned, but a patch that changes the nested reply
// list or the awaited note must still reach the visible DOM — and the
// hidden branch must show the latest data when it re-expands.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    input(BASE),
    flush,
    navigate(input(BASE)),
    flush,
    // The visible (expanded) branch's content updates via patch — the
    // keyed replies and the awaited note both re-deliver.
    navigate(
      input([
        [
          "t1",
          "THREAD-ALPHA",
          "note alpha v2",
          [
            ["r1", "reply one (edited)"],
            ["r2", "reply two"],
          ],
        ],
        ["t2", "THREAD-BETA", "note beta v1", [["r3", "reply three"]]],
      ]),
    ),
    flush,
    flush,
    (document: Document) => {
      assert.deepEqual(replies(document), [
        "reply one (edited)",
        "reply two",
        "reply three",
      ]);
      assert.deepEqual(notes(document), ["note alpha v2", "note beta v1"]);
    },
    // Collapse t1 client-side, patch another edit into it while hidden,
    // then expand: the re-render must show the latest data.
    (document: Document) =>
      document
        .querySelectorAll<HTMLButtonElement>("button.collapse")[0]!
        .click(),
    navigate(
      input([
        [
          "t1",
          "THREAD-ALPHA",
          "note alpha v3",
          [
            ["r1", "reply one (patched hidden)"],
            ["r2", "reply two"],
          ],
        ],
        ["t2", "THREAD-BETA", "note beta v1", [["r3", "reply three"]]],
      ]),
    ),
    flush,
    flush,
    (document: Document) => {
      // t1 collapsed: only t2's content visible.
      assert.deepEqual(replies(document), ["reply three"]);
      assert.deepEqual(notes(document), ["note beta v1"]);
    },
    (document: Document) =>
      document
        .querySelectorAll<HTMLButtonElement>("button.collapse")[0]!
        .click(),
    flush,
    flush,
    (document: Document) => {
      assert.deepEqual(replies(document), [
        "reply one (patched hidden)",
        "reply two",
        "reply three",
      ]);
      assert.deepEqual(notes(document), ["note alpha v3", "note beta v1"]);
    },
  ],
};
