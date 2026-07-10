import type { TestConfig } from "../../main.test";

const seqs: number[][] = [
  [1, 2, 3, 4, 5, 6],
  [6, 5, 4, 3, 2, 1], // full reverse
  [5, 4, 3, 2, 1, 6], // rotate-ish with suffix kept
  [5, 1, 2, 3, 4, 6], // move one to front (prefix/suffix trims)
  [5, 1, 3, 4, 6], // remove middle
  [5, 9, 3, 1, 4, 6], // insert + move mixed
  [6, 3, 9, 5], // removals + moves, no common prefix/suffix
  [], // nonempty -> empty
  [3, 1, 2], // empty -> nonempty
  [3, 1, 2], // identical update (no-op)
  [2], // shrink to one
  [7, 2, 8], // grow around kept one
  [8, 7], // swap + remove
];

function check(expected: number[]) {
  return (container: Element) => {
    const actual = Array.from(
      container.querySelectorAll("#keyed span"),
      (el) => el.textContent,
    ).join(",");
    if (actual !== expected.join(",")) {
      throw new Error(
        `keyed for mismatch: expected [${expected}] got [${actual}]`,
      );
    }
  };
}

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { items: seqs[0] },
    check(seqs[0]),
    ...seqs.slice(1).flatMap((items) => [{ items }, check(items)]),
  ],
};
