import * as assert from "assert/strict";

import {
  addSorted,
  concat,
  filter,
  findIndexSorted,
  findSorted,
  fromIter,
  mapToString,
  type Opt,
  push,
  Sorted,
  toIter,
} from "../translator/util/optional";

const compare = (a: number, b: number) => a - b;
const sorted = new Sorted(compare);
const toArray = (data: Opt<number>) => [...toIter(data)];

// Deterministic PRNG (mulberry32) so failures reproduce.
function createRandom(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function randomSortedValues(random: () => number, len: number) {
  return [...new Set(Array.from({ length: len }, () => (random() * 50) | 0))]
    .sort(compare)
    .map((n) => n + 1);
}

function fromValues(values: number[]): Opt<number> {
  return values.length > 1
    ? (values as [number, number, ...number[]])
    : values[0];
}

describe("runtime-tags/translator/util/optional", () => {
  describe("Sorted", () => {
    it("adds items keeping sort order without duplicates", () => {
      const random = createRandom(1);
      for (let run = 0; run < 100; run++) {
        const values = randomSortedValues(random, (random() * 6) | 0);
        const item = ((random() * 50) | 0) + 1;
        const expected = [...new Set([...values, item])].sort(compare);
        assert.deepEqual(
          toArray(sorted.add(fromValues(values), item)),
          expected,
        );
      }
    });

    it("unions as a sorted set union", () => {
      const random = createRandom(2);
      for (let run = 0; run < 100; run++) {
        const a = randomSortedValues(random, (random() * 6) | 0);
        const b = randomSortedValues(random, (random() * 6) | 0);
        const expected = [...new Set([...a, ...b])].sort(compare);
        assert.deepEqual(
          toArray(sorted.union(fromValues(a), fromValues(b))),
          expected,
        );
      }
    });

    it("returns the first argument for a union with equal content", () => {
      const a: Opt<number> = [1, 2, 3];
      assert.equal(sorted.union(a, [1, 2, 3]), a);
      assert.equal(sorted.union(a, undefined), a);
      assert.equal(sorted.union(undefined, a), a);
      assert.equal(sorted.union(1, 1), 1);
    });

    it("finds items and indexes", () => {
      const random = createRandom(3);
      for (let run = 0; run < 100; run++) {
        const values = randomSortedValues(random, (random() * 8) | 0);
        const data = fromValues(values);
        const item = ((random() * 50) | 0) + 1;
        assert.equal(
          sorted.find(data, item),
          values.find((v) => v === item),
        );
        assert.equal(sorted.findIndex(data, item), values.indexOf(item));
        assert.equal(sorted.has(data, item), values.includes(item));
      }
    });

    it("groups items unioned per key", () => {
      const group = sorted.groupBy([1, 2, 3, 4] as Opt<number>, (n) => n % 2);
      assert.deepEqual(toArray(group.get(0)), [2, 4]);
      assert.deepEqual(toArray(group.get(1)), [1, 3]);
      assert.deepEqual([...sorted.groupBy(5, (n) => n % 2)], [[1, 5]]);
      assert.deepEqual([...sorted.groupBy(undefined, (n) => n % 2)], []);
    });

    it("matches naive set isSuperset", () => {
      assert.equal(sorted.isSuperset([1, 2, 3], undefined), true);
      assert.equal(sorted.isSuperset([1, 2, 3], 2), true);
      assert.equal(sorted.isSuperset([1, 2, 3], 4), false);
      assert.equal(sorted.isSuperset(1, [1, 2] as Opt<number>), false);
      assert.equal(sorted.isSuperset([1, 2, 3], [1, 2, 3]), true);
      assert.equal(sorted.isSuperset([1, 2, 3], [2, 3]), true);
      const random = createRandom(6);
      for (let run = 0; run < 100; run++) {
        const sup = randomSortedValues(random, (random() * 8) | 0);
        const sub = randomSortedValues(random, (random() * 6) | 0);
        assert.equal(
          sorted.isSuperset(fromValues(sup), fromValues(sub)),
          sub.every((item) => sup.includes(item)),
          `isSuperset([${sup}], [${sub}])`,
        );
      }
    });
  });

  describe("sorted array helpers", () => {
    it("matches naive search and insert", () => {
      const random = createRandom(4);
      for (let run = 0; run < 100; run++) {
        const values = randomSortedValues(random, (random() * 10) | 0);
        const item = ((random() * 50) | 0) + 1;
        assert.equal(
          findSorted(compare, values, item),
          values.find((v) => v === item),
        );
        assert.equal(
          findIndexSorted(compare, values, item),
          values.indexOf(item),
        );
        assert.deepEqual(
          addSorted(compare, values, item),
          [...new Set([...values, item])].sort(compare),
        );
      }
    });

    it("returns the same array when adding an existing item", () => {
      const values = [1, 2, 3];
      assert.equal(addSorted<number, number[]>(compare, values, 2), values);
    });
  });

  describe("Opt helpers", () => {
    it("push appends without deduplicating", () => {
      assert.equal(push(undefined, 1), 1);
      assert.deepEqual(push(1, 1), [1, 1]);
      assert.deepEqual(push([1, 2] as Opt<number>, 0), [1, 2, 0]);
    });

    it("concat preserves order and duplicates", () => {
      assert.equal(concat(undefined, undefined), undefined);
      assert.equal(concat(1, undefined), 1);
      assert.equal(concat(undefined, 2), 2);
      assert.deepEqual(concat(2, 1), [2, 1]);
      assert.deepEqual(concat([1, 2] as Opt<number>, 2), [1, 2, 2]);
      assert.deepEqual(concat(2, [1, 2] as Opt<number>), [2, 1, 2]);
    });

    it("filter matches array filter over every shape", () => {
      const odd = (n: number) => n % 2 === 1;
      assert.equal(filter(undefined, odd), undefined);
      assert.equal(filter(2, odd), undefined);
      assert.equal(filter(1, odd), 1);
      const random = createRandom(5);
      for (let run = 0; run < 100; run++) {
        const values = Array.from(
          { length: (random() * 8) | 0 },
          () => ((random() * 50) | 0) + 1,
        );
        assert.deepEqual(
          toArray(filter(fromValues(values), odd)),
          values.filter(odd),
        );
      }
    });

    it("fromIter and toIter round-trip", () => {
      assert.equal(fromIter([]), undefined);
      assert.equal(fromIter([1]), 1);
      assert.deepEqual(fromIter([1, 2, 1]), [1, 2, 1]);
      for (const values of [[], [1], [3, 1, 2]]) {
        assert.deepEqual([...toIter(fromIter(values))], values);
      }
    });

    it("mapToString joins with the separator", () => {
      const toStr = (n: number, i: number) => `${i}:${n}`;
      assert.equal(mapToString(undefined, ",", toStr), "");
      assert.equal(mapToString(1, ",", toStr), "0:1");
      assert.equal(
        mapToString([1, 2, 3] as Opt<number>, ",", toStr),
        "0:1,1:2,2:3",
      );
    });
  });
});
