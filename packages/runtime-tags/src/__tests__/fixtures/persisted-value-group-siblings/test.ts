import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const input = (a: number, b: number) => ({
  $global: { persisted: true, a: `A1PHA${a}`, b: `B3TA${b}` },
});
const values = (document: Document) =>
  [...document.querySelectorAll("p.value")].map((el) => el.textContent);

// Two sibling instances of one renderer must keep distinct group keys
// (occurrence-suffixed): with one shared key their entries would merge and
// one anchor would win, dispatching one instance's fills into the other's
// live branch.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    input(1, 1),
    navigate(input(1, 1)),
    // Hold: both instances' groups elide independently.
    navigate(input(1, 1), {
      mutateFrames(frames) {
        const joined = frames.join("\n");
        for (const token of ["A1PHA", "B3TA", "sheet--wide"]) {
          assert.ok(
            !joined.includes(token),
            `held sibling instance re-shipped ${token}`,
          );
        }
        return frames;
      },
    }),
    (document: Document) =>
      document.querySelectorAll<HTMLButtonElement>("button.tap")[1]!.click(),
    // Only the changed sibling ships; the other holds.
    navigate(input(2, 1), {
      mutateFrames(frames) {
        const joined = frames.join("\n");
        assert.ok(joined.includes("A1PHA2"), "changed sibling did not ship");
        assert.ok(
          !joined.includes("B3TA"),
          "unchanged sibling instance re-shipped",
        );
        return frames;
      },
    }),
    (document: Document) => {
      assert.deepEqual(values(document), ["A1PHA2", "B3TA1"]);
      const taps = [...document.querySelectorAll("button.tap")].map(
        (el) => el.textContent,
      );
      assert.deepEqual(taps, ["tap 0", "tap 1"]);
    },
  ],
};
