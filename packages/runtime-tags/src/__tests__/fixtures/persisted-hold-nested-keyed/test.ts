import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

type Threads = [id: string, title: string, replies: [string, string][]][];

const input = (threads: Threads, tags: string[]) => ({
  threads: threads.map(([id, title, replies]) => ({
    id,
    title,
    replies: replies.map(([rid, text]) => ({ id: rid, text })),
  })),
  tags,
  $global: { persisted: true },
});

const BASE: Threads = [
  [
    "t1",
    "THREAD-ALPHA",
    [
      ["r1", "reply one"],
      ["r2", "reply two"],
    ],
  ],
  ["t2", "THREAD-BETA", [["r3", "reply three"]]],
];
const TAGS = ["tag-perf", "tag-infra"];

const typeDraft = (value: string) => (document: Document) => {
  const draft = document.querySelector<HTMLInputElement>("input.draft")!;
  const window = draft.ownerDocument.defaultView!;
  draft.value = value;
  draft.dispatchEvent(new window.Event("input", { bubbles: true }));
};

// Post-8.5 review coverage, pinning today's architecture:
// - Stateless nested loop content (replies) rides the PARENT thread's
//   serialized array, so a reply edit honestly misses that thread's
//   group — while sibling threads hold.
// - Controllable (`value:=`) and seed state inside a re-shipped item
//   survive: matched scopes ignore server seeds.
// - An unkeyed (index) loop's occurrence-keyed items coexist; their
//   client state survives whatever the claim cap sheds.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    input(BASE, TAGS),
    navigate(input(BASE, TAGS)),
    typeDraft("draft in progress"),
    (document: Document) =>
      document.querySelectorAll<HTMLButtonElement>("button.star")[1]!.click(),
    // Only reply r1's text changes: its thread's group misses (the reply
    // array is the thread's own value) while the sibling thread holds.
    navigate(
      input(
        [
          [
            "t1",
            "THREAD-ALPHA",
            [
              ["r1", "reply one (edited)"],
              ["r2", "reply two"],
            ],
          ],
          ["t2", "THREAD-BETA", [["r3", "reply three"]]],
        ],
        TAGS,
      ),
      {
        mutateFrames(frames) {
          const joined = frames.join("\n");
          assert.ok(
            joined.includes("reply one (edited)"),
            "edited reply did not ship",
          );
          for (const token of ["THREAD-BETA", "reply three"]) {
            assert.ok(
              !joined.includes(`"${token}"`),
              `held sibling thread re-shipped (${token})`,
            );
          }
          return frames;
        },
      },
    ),
    (document: Document) => {
      assert.deepEqual(
        [...document.querySelectorAll("li.reply")].map((el) => el.textContent),
        ["reply one (edited)", "reply two", "reply three"],
      );
      // Controllable + seed state inside the re-shipped thread survived
      // (matched scopes ignore server seeds).
      assert.equal(
        document.querySelector<HTMLInputElement>("input.draft")!.value,
        "draft in progress",
      );
      assert.deepEqual(
        [...document.querySelectorAll("button.star")].map(
          (el) => el.textContent,
        ),
        ["☆", "★"],
      );
    },
    // Reorder the threads while the other thread's reply edits: the
    // reordered holds move, state still survives everywhere.
    navigate(
      input(
        [
          ["t2", "THREAD-BETA", [["r3", "reply three (edited)"]]],
          [
            "t1",
            "THREAD-ALPHA",
            [
              ["r1", "reply one (edited)"],
              ["r2", "reply two"],
            ],
          ],
        ],
        TAGS,
      ),
      {
        mutateFrames(frames) {
          const joined = frames.join("\n");
          assert.ok(
            joined.includes("reply three (edited)"),
            "edited reply did not ship",
          );
          for (const token of [
            "THREAD-ALPHA",
            "reply one (edited)",
            "reply two",
          ]) {
            assert.ok(
              !joined.includes(`"${token}"`),
              `held thread re-shipped (${token})`,
            );
          }
          return frames;
        },
      },
    ),
    (document: Document) => {
      assert.deepEqual(
        [...document.querySelectorAll("h3.title")].map((el) => el.textContent),
        ["THREAD-BETA", "THREAD-ALPHA"],
      );
      assert.deepEqual(
        [...document.querySelectorAll("li.reply")].map((el) => el.textContent),
        ["reply three (edited)", "reply one (edited)", "reply two"],
      );
      // The typed draft belongs to THREAD-ALPHA's row, now second.
      assert.deepEqual(
        [...document.querySelectorAll<HTMLInputElement>("input.draft")].map(
          (el) => el.value,
        ),
        ["", "draft in progress"],
      );
      assert.deepEqual(
        [...document.querySelectorAll("button.star")].map(
          (el) => el.textContent,
        ),
        ["☆", "★"],
      );
    },
  ],
};
