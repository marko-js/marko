import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

// Long enough for the serializer's string dedup: every post shares this
// boilerplate tag, so its first-use register def lives in whichever post
// happens to serialize first.
const SHARED_TAG = "BOILERPLATE-SHARED-TAG-STRING";

// Unique on A1 at first; a later prepend introduces a sharer, so its
// canonical form must not depend on being shared (unique -> shared).
const FLAIR = "FOUNDING-MEMBER-FLAIR-RIBBON";

const input = (ids: string[], flaired: string[] = ["OLDPOST-A1"]) => ({
  posts: ids.map((id) => ({
    id,
    tag: SHARED_TAG,
    flair: flaired.includes(id) ? FLAIR : undefined,
    body: `body ${id}`,
  })),
  $global: { persisted: true },
});

// Appscape finding, pinned: canonical entries hash alias reads of a shared
// value (`@hash`) but keep the raw literal at its def site. Prepending an
// item that shares the string moves the def site into the new head, so the
// old head's canonical flips literal -> @hash and its digest misses on
// byte-identical content. Def and alias sites must canonicalize alike.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    input(["OLDPOST-A1", "OLDPOST-B2"]),
    navigate(input(["OLDPOST-A1", "OLDPOST-B2"])),
    // Hold baseline: nothing changed, nothing ships.
    navigate(input(["OLDPOST-A1", "OLDPOST-B2"]), {
      mutateFrames(frames) {
        const joined = frames.join("\n");
        for (const token of ["OLDPOST-A1", "OLDPOST-B2"]) {
          assert.ok(
            !joined.includes(`body ${token}`),
            `held post group re-shipped ${token}`,
          );
        }
        return frames;
      },
    }),
    (document: Document) =>
      document.querySelectorAll<HTMLButtonElement>("button.fave")[1]!.click(),
    // Prepend a post that also uses the shared tag: the string's def site
    // moves into the new head, but the unchanged posts must still hold.
    navigate(input(["NEWPOST-C3", "OLDPOST-A1", "OLDPOST-B2"]), {
      mutateFrames(frames) {
        const joined = frames.join("\n");
        assert.ok(joined.includes("body NEWPOST-C3"), "new post did not ship");
        // Group keys derive from loop keys, so held groups still name
        // their tokens in the pairing table — only FILL content counts.
        for (const token of ["OLDPOST-A1", "OLDPOST-B2"]) {
          assert.ok(
            !joined.includes(`body ${token}`),
            `def-site shift missed an unchanged post group (${token})`,
          );
        }
        assert.equal(
          joined.split(SHARED_TAG).length - 1,
          1,
          "shared tag should ship exactly once (the new post's def)",
        );
        return frames;
      },
    }),
    // A1's flair was UNIQUE until now; the new head also renders it, so
    // its first-use moves without A1's content changing (unique->shared).
    navigate(
      input(
        ["NEWPOST-D4", "NEWPOST-C3", "OLDPOST-A1", "OLDPOST-B2"],
        ["NEWPOST-D4", "OLDPOST-A1"],
      ),
      {
        mutateFrames(frames) {
          const joined = frames.join("\n");
          assert.ok(
            joined.includes("body NEWPOST-D4"),
            "new post did not ship",
          );
          for (const token of ["OLDPOST-A1", "OLDPOST-B2", "NEWPOST-C3"]) {
            assert.ok(
              !joined.includes(`body ${token}`),
              `unique->shared transition missed a held post group (${token})`,
            );
          }
          // Region shells for constructing branches bake rendered markup
          // (the harness echoes no region claims, so A1's flair-branch
          // shell re-ships each navigation); the VALUE must define once.
          assert.equal(
            joined.split(`="${FLAIR}`).length - 1,
            1,
            "the newly shared flair value should define exactly once",
          );
          return frames;
        },
      },
    ),
    (document: Document) => {
      assert.deepEqual(
        [...document.querySelectorAll("span.body")].map((el) => el.textContent),
        [
          "body NEWPOST-D4",
          "body NEWPOST-C3",
          "body OLDPOST-A1",
          "body OLDPOST-B2",
        ],
      );
      assert.deepEqual(
        [...document.querySelectorAll("span.flair")].map(
          (el) => el.textContent,
        ),
        [FLAIR, FLAIR],
      );
      assert.deepEqual(
        [...document.querySelectorAll("button.fave")].map(
          (el) => el.textContent,
        ),
        ["fave", "fave", "fave", "faved"],
      );
    },
  ],
};
