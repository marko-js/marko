import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const REGION_FRAME = /\[0,";/;
const promo = (document: Document) =>
  document.querySelector(".promo")?.textContent;
const bump = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.bump")!.click();

const assertShips = {
  mutateFrames(frames: string[]) {
    assert.ok(
      frames.some((frame) => REGION_FRAME.test(frame)),
      "expected the region markup to ship",
    );
    return frames;
  },
};
const assertHeld = {
  mutateFrames(frames: string[]) {
    for (const frame of frames) {
      assert.doesNotMatch(
        frame,
        REGION_FRAME,
        "a held region re-shipped its markup",
      );
    }
    return frames;
  },
};

// A byte-identical region the client's echo proves it holds ships only its
// identity fill; a changed one ships markup again. Documents never seed the
// echo — the first patch does.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    {
      promo: true,
      promoText: "free shipping",
      $global: { persisted: true, persistedHeldRegions: true },
    },
    // First patch seeds: the region ships and is recorded.
    navigate(
      {
        promo: true,
        promoText: "free shipping",
        $global: { persisted: true, persistedHeldRegions: true },
      },
      assertShips,
    ),
    (document: Document) =>
      assert.equal(promo(document), "sale! free shipping"),
    // Identical content held: fill-only, live range untouched.
    navigate(
      {
        promo: true,
        promoText: "free shipping",
        $global: { persisted: true, persistedHeldRegions: true },
      },
      assertHeld,
    ),
    (document: Document) =>
      assert.equal(promo(document), "sale! free shipping"),
    bump,
    // Changed content misses the digest and ships.
    navigate(
      {
        promo: true,
        promoText: "20% off",
        $global: { persisted: true, persistedHeldRegions: true },
      },
      assertShips,
    ),
    (document: Document) => assert.equal(promo(document), "sale! 20% off"),
    (document: Document) =>
      assert.equal(
        document.querySelector("button.bump")?.textContent,
        "2",
        "the live page must stay interactive across held navigations",
      ),
  ],
};
