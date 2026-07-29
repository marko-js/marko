import * as assert from "assert/strict";

import {
  _merge_value_feedback,
  DIGEST_WIDTH,
  VALUE_STORE_CAP,
} from "../common/value-claims";
import { FEEDBACK_CAP, FEEDBACK_PREFIX } from "../html/patch-groups";
import { regionDigest } from "../html/region-digest";

// This merge exists twice — here and in @marko/run's persisted-protocol,
// which cannot import it. The two are kept in sync by asserting the SAME
// properties on both sides (run/packages/run/src/__tests__/
// persisted-protocol.fuzz.test.ts), so drift surfaces as one suite
// failing rather than as a wire that disagrees with itself.
function rng(seed: number) {
  let state = seed >>> 0 || 1;
  return () => {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    return ((state >>> 0) % 1e6) / 1e6;
  };
}

const HOSTILE = [".", "%", ";", "|", "%2E", "%25", '"', "é", "🙈"];
const DIGEST =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

function record(next: () => number) {
  const length = 1 + Math.floor(next() * 10);
  let key = "";
  for (let i = 0; i < length; i++) {
    key +=
      next() < 0.3
        ? HOSTILE[Math.floor(next() * HOSTILE.length)]
        : String.fromCharCode(97 + Math.floor(next() * 26));
  }
  let digest = "";
  for (let i = 0; i < DIGEST_WIDTH; i++) {
    digest += DIGEST[Math.floor(next() * DIGEST.length)];
  }
  return key.replace(/%/g, "%25").replace(/\./g, "%2E") + digest;
}

const section = (next: () => number, count: number) =>
  Array.from({ length: count }, () => record(next));

describe("value claim store (fuzz)", () => {
  it("keeps absent entries, replaces present ones, and caps the store", () => {
    let capped = 0;
    for (let seed = 1; seed <= 300; seed++) {
      const next = rng(seed);
      const committed = section(next, Math.floor(next() * 300));
      const feedback = section(next, 1 + Math.floor(next() * 160));
      const merged = _merge_value_feedback(
        committed.join(".") || undefined,
        feedback.join("."),
      );
      const entries = merged ? merged.split(".") : [];
      assert.ok(
        entries.length <= VALUE_STORE_CAP,
        `seed ${seed}: store exceeded its cap`,
      );
      capped += entries.length === VALUE_STORE_CAP ? 1 : 0;
      const keys = entries.map((entry) => entry.slice(0, -DIGEST_WIDTH));
      assert.equal(
        new Set(keys).size,
        keys.length,
        `seed ${seed}: a key appears twice, making claim lookup order-dependent`,
      );
      // Delta semantics: an absent entry means keep, so every record the
      // feedback carried (that survived the cap) must be present verbatim.
      const present = new Set(keys);
      for (const entry of feedback.slice(-VALUE_STORE_CAP)) {
        assert.ok(
          present.has(entry.slice(0, -DIGEST_WIDTH)),
          `seed ${seed}: feedback record dropped: ${entry}`,
        );
      }
    }
    assert.ok(capped > 5, `corpus hit the entry cap only ${capped} times`);
  });

  it("is idempotent when the same feedback repeats", () => {
    for (let seed = 1; seed <= 200; seed++) {
      const next = rng(seed);
      const committed = section(next, Math.floor(next() * 20));
      const feedback = section(next, 1 + Math.floor(next() * 10)).join(".");
      const once = _merge_value_feedback(
        committed.join(".") || undefined,
        feedback,
      );
      assert.equal(
        _merge_value_feedback(once, feedback),
        once,
        `seed ${seed}: merge is not idempotent`,
      );
    }
  });

  it("treats an empty committed store as adoption, not merge", () => {
    for (let seed = 1; seed <= 100; seed++) {
      const next = rng(seed);
      const feedback = section(next, 1 + Math.floor(next() * 40)).join(".");
      assert.equal(_merge_value_feedback(undefined, feedback), feedback);
    }
  });
});

// Tripwires, not preferences: a digest width is a correctness parameter that
// nothing else fails on. A width change is expected to be deliberate, and
// these exist to name what else must move with it.
describe("claim digest widths", () => {
  it("pins the value-claim width @marko/run mirrors", () => {
    // `digestWidth` in run's persisted-protocol.ts slices claim keys by this
    // number. They must move together or every key mis-slices.
    assert.equal(DIGEST_WIDTH, 16);
  });

  it("keeps region digests at 96 bits", () => {
    // Value claims are at parity with this width: `groupDigest` slices a
    // region digest to DIGEST_WIDTH, so a narrower region digest truncates.
    assert.equal(regionDigest("<p>a</p>").length, 16);
    assert.notEqual(regionDigest("<p>a</p>"), regionDigest("<p>b</p>"));
  });

  // Mirrored in run's `echoValuesCap`: drift sheds valid feedback on one
  // side of the wire only.
  it("pins the feedback cap @marko/run mirrors", () => {
    assert.equal(FEEDBACK_CAP, 720);
  });

  // Mirrored in run's `feedbackLinePrefix`: drift silently kills ALL
  // feedback (the client never recognizes the line), a permanent all-miss.
  it("pins the feedback prefix @marko/run mirrors", () => {
    assert.equal(FEEDBACK_PREFIX, "//E1:");
  });

  it("pins the fixed protocol constants", () => {
    assert.equal(DIGEST_WIDTH, 16);
    assert.equal(VALUE_STORE_CAP, 256);
  });

  // Mirrored in run's committed-store merge: both sides keep 256 entries,
  // newest-first, or the stores disagree about which claims survive.
  it("pins the 256-entry committed-store cap @marko/run mirrors", () => {
    const feedback = Array.from(
      { length: 300 },
      (_, i) => `k${i}` + "A".repeat(DIGEST_WIDTH),
    ).join(".");
    const merged = _merge_value_feedback(
      "seed" + "B".repeat(DIGEST_WIDTH),
      feedback,
    );
    assert.equal(merged!.split(".").length, 256);
  });
});
