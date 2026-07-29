import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { flush, navigate } from "../../utils/resolve";

// Shared between the held cards' options object and the late (awaited)
// note: the string's register def lives inside diverted card fills.
const LABEL = "PRIORITY-SUPPORT-TIER-LABEL";

// The label lives in a server-only module (data.js) so its only
// first-flush occurrence is the card fills themselves — the isolating
// shape for the divert-time string registration.
const input = (stamp: number) => ({
  cards: [
    { id: "c1", name: "CARD-ONE" },
    { id: "c2", name: "CARD-TWO" },
  ],
  note: { stamp: `s${stamp}` },
  $global: { persisted: true },
});

// A dedup-length string (server-only module constant, never in the
// request input) first emitted inside claimed (diverted) card fills is
// reused by a later flush's awaited body while every parent holds: the
// def must ship ahead of the alias, and the await body's group anchor
// must register so the completion line's bare group dispatch can reach
// the live boundary (it previously never registered on the SSR-resumed
// merge path, and the dispatch failed the navigation whole).
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    input(1),
    flush,
    // Mint claims (cards unchanged; the note's stamp keeps its own group
    // live every navigation).
    navigate(input(2)),
    flush,
    (document: Document) => {
      assert.equal(
        document.querySelector("p.note")?.textContent,
        `${LABEL} s2`,
      );
    },
    (document: Document) =>
      document.querySelectorAll<HTMLButtonElement>("button.pin")[0]!.click(),
    // Cards hit and divert; the awaited body streams live in a later
    // flush and its alias must evaluate against a pinned def.
    navigate(input(3), {
      mutateFrames(frames) {
        const joined = frames.join("\n");
        for (const token of ["CARD-ONE", "CARD-TWO"]) {
          assert.ok(
            !joined.includes(token),
            `held card group re-shipped ${token}`,
          );
        }
        assert.ok(joined.includes("s3"), "late note did not ship");
        console.error("[xf3]", JSON.stringify(frames));
        return frames;
      },
    }),
    flush,
    (document: Document) => {
      assert.equal(
        document.querySelector("p.note")?.textContent,
        `${LABEL} s3`,
      );
      // Held card state survived the navigation.
      assert.deepEqual(
        [...document.querySelectorAll("button.pin")].map(
          (el) => el.textContent,
        ),
        ["pinned", "pin"],
      );
    },
  ],
};
