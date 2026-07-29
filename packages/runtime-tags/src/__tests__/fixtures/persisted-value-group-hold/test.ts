import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const text = (document: Document, sel: string) =>
  document.querySelector(sel)?.textContent;

const $global = { persisted: true, persistedHeldShells: true as const };
const input = (price: number) => ({
  a: true,
  b: true,
  name: "W1DGT",
  price,
  badge: "B4DGE",
  $global,
});

// C-track hold cycle over identical navigates: the first patch seeds (full
// values + //E1: feedback), the second echoes the claims and elides each
// claimed group's identical value props while the page stays fully live; a
// changed navigate then misses only the changed group.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    input(54321),
    // Seed: no claims yet — full values ship.
    navigate(input(54321), {
      mutateFrames(frames) {
        assert.ok(
          frames.join("\n").includes("W1DGT"),
          "seed patch must carry full values",
        );
        return frames;
      },
    }),
    // Hold: identical content — both groups' value props elide.
    navigate(input(54321), {
      mutateFrames(frames) {
        const joined = frames.join("\n");
        for (const token of ["W1DGT", "54321", "B4DGE", "b4dge"]) {
          assert.ok(
            !joined.includes(token),
            `held group re-shipped ${token}: ${joined.slice(0, 300)}`,
          );
        }
        return frames;
      },
    }),
    (document: Document) => {
      assert.equal(text(document, "p.info"), "W1DGT/54321");
      assert.equal(text(document, "span.badge"), "b4dge");
    },
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("button.tap")!.click(),
    (document: Document) => assert.equal(text(document, "button.tap"), "tap 1"),
    // Miss: one group's content changed — it ships; the sibling still holds.
    navigate(input(98765), {
      mutateFrames(frames) {
        const joined = frames.join("\n");
        assert.ok(joined.includes("98765"), "changed group must ship");
        // The root group (input closures) missed, so B4DGE re-ships there;
        // the badge BRANCH's derived value proves the sibling group held.
        assert.ok(
          !joined.includes("b4dge"),
          "unchanged group must stay held on a sibling miss",
        );
        return frames;
      },
    }),
    (document: Document) => {
      assert.equal(text(document, "p.info"), "W1DGT/98765");
      assert.equal(text(document, "span.badge"), "b4dge");
      assert.equal(text(document, "button.tap"), "tap 1");
    },
  ],
};
