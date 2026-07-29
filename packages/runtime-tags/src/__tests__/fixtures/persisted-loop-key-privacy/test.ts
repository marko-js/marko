import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

// Keyed rows carry application ids — here email-like sentinels. Committed
// group keys replay in the echo request header on every later navigation,
// so a raw key in a group key or the feedback line is PII in proxy logs.
const SENTINEL = "pr1v-";
const $global = { persisted: true, persistedToken: true };
const input = () => ({
  users: [
    { email: "pr1v-alpha@example.test", name: "N4ME-ALPHA" },
    { email: "pr1v-beta@example.test", name: "N4ME-BETA" },
  ],
  tags: ["tag-one", "tag-two"],
  $global,
});

// The loop key legitimately rides the patch as branch scope data (the
// client pairs rows by it); everything else must be sentinel-free.
const stripLoopKeys = (frame: string) =>
  frame.replace(/(?:"#LoopKey"|\bM):"[^"]*"/g, "");

const GROUP_KEY = /(?:"#GroupKey"|GK):"([^"]+)"/g;
let seenKeys = 0;
let seenFeedback = 0;
let seenEcho = 0;

type Wire = { frames: string[]; feedback?: string; echoed?: string };
// MARKO_WIRE_BASELINE measures the wire (MARKO_WIRE_MEASURE) with the
// privacy assertions off — the byte-delta baseline for this change.
const BASELINE = !!process.env.MARKO_WIRE_BASELINE;
const assertWire = ({ frames, feedback, echoed }: Wire) => {
  if (BASELINE) return;
  for (const frame of frames) {
    assert.ok(
      !stripLoopKeys(frame).includes(SENTINEL),
      `an application key reached the wire: ${frame}`,
    );
    for (const [, key] of frame.matchAll(GROUP_KEY)) {
      const at = key.indexOf("|");
      if (at === -1) continue;
      seenKeys++;
      // The anchor id (first segment) stays verbatim for dispatch; every
      // later segment is either a token or a loop ordinal.
      assert.match(
        key.slice(at + 1),
        /^(?:t\d+|o\d+)(?:~\d+)?$/,
        `group key leaked its loop segment: ${key}`,
      );
    }
  }
  if (feedback !== undefined) {
    seenFeedback++;
    assert.ok(
      !feedback.includes(SENTINEL),
      `an application key reached the feedback line: ${feedback}`,
    );
  }
  if (echoed !== undefined) {
    seenEcho++;
    assert.ok(
      !echoed.includes(SENTINEL),
      `an application key round-tripped in the echo: ${echoed}`,
    );
  }
};

export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    input(),
    // Seeds claims; keys must already be opaque on the first patch.
    navigate(input(), { inspectWire: assertWire }),
    // Identical input: the echoed claims must HIT (tokenized keys are
    // stable across requests), eliding the row content.
    navigate(input(), {
      inspectWire(wire) {
        assertWire(wire);
        if (BASELINE) return;
        assert.ok(wire.echoed, "no claims were echoed");
        assert.ok(
          !wire.frames.join("\n").includes("N4ME-"),
          "claims did not hold: row content re-shipped",
        );
      },
    }),
    (document: Document) => {
      assert.equal(
        document.querySelector("li.user .name")?.textContent,
        "N4ME-ALPHA",
      );
      // Guards the wire checks above against passing vacuously.
      if (!BASELINE) {
        assert.ok(seenKeys > 0, "no loop group key was inspected");
        assert.ok(seenFeedback > 0, "no feedback line was inspected");
        assert.ok(seenEcho > 0, "no echo was inspected");
      }
    },
  ],
};
