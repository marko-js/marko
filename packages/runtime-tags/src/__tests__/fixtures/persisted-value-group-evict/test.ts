import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const $global = { persisted: true };
const input = (price: number) => ({ price, $global });
const click = (sel: string) => (document: Document) =>
  document.querySelector<HTMLButtonElement>(sel)!.click();
const count = (frames: string[], token: string) =>
  frames.join("\n").split(token).length - 1;

// Value claims are pruned to live anchors at echo time (the region model):
// a client-owned conditional's branch group has no anchor until a construct
// pairs one, so it ships while the root group's copy of the same value
// holds — and destroying the branch never leaves a claim that would fail
// dispatch into a dead anchor (a document-load fallback).
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    input(111),
    // Seed: full values ship, feedback commits.
    navigate(input(111)),
    // Both copies hold: the root group's closure copy, and the branch's
    // — the state-selection dispatch paired its anchor on the seed
    // navigation, so its claim resolves.
    navigate(input(111), {
      mutateFrames(frames) {
        assert.equal(
          count(frames, "111"),
          0,
          "held value copies must not ship",
        );
        return frames;
      },
    }),
    // The client removes the branch.
    click("button.toggle"),
    (document: Document) => {
      assert.equal(document.querySelector("p.price"), null);
    },
    // No stale claim: the navigation completes in place and the changed
    // value ships.
    navigate(input(222), {
      mutateFrames(frames) {
        assert.ok(
          frames.join("\n").includes("222"),
          "changed group did not ship",
        );
        return frames;
      },
    }),
    (document: Document) => {
      assert.equal(document.querySelector("p.price"), null);
      assert.ok(document.querySelector("button.toggle"));
      assert.equal(
        document.querySelector("button.count")!.textContent,
        "clicked 0",
      );
    },
  ],
};
