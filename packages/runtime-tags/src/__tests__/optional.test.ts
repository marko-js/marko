import * as assert from "assert/strict";

import {
  addSorted,
  concat,
  every,
  filter,
  findIndexSorted,
  findSorted,
  first,
  fromIter,
  last,
  mapToString,
  type OneMany,
  type Opt,
  push,
  reduceWhile,
  size,
  some,
  Sorted,
  type SortedOpt,
} from "../translator/util/optional";

const compare = (a: number, b: number) => a - b;
const sorted = new Sorted(compare);
const toArray = (data: Opt<number>) =>
  data === undefined ? [] : Array.isArray(data) ? data : [data];

// Deterministic PRNG (mulberry32) so failures reproduce.
function createRandom(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function randomSortedValues(random: () => number, len: number, range = 50) {
  return [...new Set(Array.from({ length: len }, () => (random() * range) | 0))]
    .sort(compare)
    .map((n) => n + 1);
}

// Pairs from equal sizes to one list many times the other's, so the walks both
// step and gallop across every probe width.
function randomSkewedPair(random: () => number) {
  const long = (random() * 80) | 0;
  const short = (random() * Math.min(long, 8)) | 0;
  const range = long * 2 + 10;
  const values = [
    randomSortedValues(random, long, range),
    randomSortedValues(random, short, range),
  ];
  return random() < 0.5 ? values : values.reverse();
}

// A `Sorted` over numbers that counts its comparisons.
function createCountingSorted() {
  const counter = {
    compares: 0,
    sorted: new Sorted((a: number, b: number) => {
      counter.compares++;
      return a - b;
    }),
  };
  return counter;
}

function range(from: number, to: number) {
  return Array.from({ length: to - from }, (_, i) => from + i);
}

const self = (n: number) => n;
const tens = (n: number) => (n / 10) | 0;
const thousands = (n: number) => (n / 1000) | 0;

// Each run `forEachRun` calls back with, as `[key, run]`.
function collectRuns(data: SortedOpt<number>, key: (n: number) => number) {
  const runs: [number, OneMany<number>][] = [];
  sorted.forEachRun(data, key, compare, (runKey, run) => {
    runs.push([runKey, run]);
  });
  return runs;
}

const isOdd = (n: number) => n % 2 === 1;
const isPositive = (n: number) => n > 0;

// The test builds its sorted lists by hand.
function fromValues(values: number[]): SortedOpt<number> {
  return values.length > 1 ? (values as SortedOpt<number>) : values[0];
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
      const a = fromValues([1, 2, 3]);
      assert.equal(sorted.union(a, fromValues([1, 2, 3])), a);
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

    it("filters keeping order, returning the list itself when none drop", () => {
      const a = fromValues([1, 2, 3]);
      assert.equal(sorted.filter(a, isPositive), a);
      assert.equal(sorted.filter(2, isPositive), 2);
      assert.equal(sorted.filter(2, isOdd), undefined);
      assert.equal(sorted.filter(undefined, isOdd), undefined);
      const random = createRandom(9);
      for (let run = 0; run < 100; run++) {
        const values = randomSortedValues(random, (random() * 8) | 0);
        assert.deepEqual(
          sorted.filter(fromValues(values), isOdd),
          fromValues(values.filter(isOdd)),
          `filter([${values}])`,
        );
      }
    });

    it("selects the items before and at a key by binary search", () => {
      const a = fromValues([1, 2, 3]);
      assert.equal(sorted.leadingRun(a, self, compare, 4), a);
      assert.equal(sorted.leadingRun(a, self, compare, 2), 1);
      assert.equal(sorted.leadingRun(2, self, compare, 2), undefined);
      assert.equal(sorted.leadingRun(undefined, self, compare, 2), undefined);
      assert.equal(sorted.range(a, tens, compare, 0), a);
      assert.equal(sorted.range(a, self, compare, 3), 3);
      assert.equal(sorted.range(2, self, compare, 2), 2);
      assert.equal(sorted.range(undefined, self, compare, 2), undefined);
      const random = createRandom(10);
      for (let run = 0; run < 200; run++) {
        const values = randomSortedValues(random, (random() * 40) | 0, 80);
        const target = (random() * 9) | 0;
        assert.deepEqual(
          sorted.leadingRun(fromValues(values), tens, compare, target),
          fromValues(values.filter((n) => tens(n) < target)),
          `leadingRun([${values}], tens < ${target})`,
        );
        assert.deepEqual(
          sorted.range(fromValues(values), tens, compare, target),
          fromValues(values.filter((n) => tens(n) === target)),
          `range([${values}], tens = ${target})`,
        );
      }
    });

    it("gallops to the end of a range and a run of any length", () => {
      for (let length = 1; length < 70; length++) {
        for (const before of [0, 1, 5]) {
          for (const after of [0, 1, 5]) {
            const values = [
              ...range(0, before).map(() => 0),
              ...range(0, length).map(() => 1),
              ...range(0, after).map(() => 2),
            ];
            const data = fromValues(values.map((key, i) => key * 1000 + i));
            const label = `${before} before, ${length} at, ${after} after`;
            assert.equal(
              size(sorted.range(data, thousands, compare, 1)),
              length,
              label,
            );
            assert.equal(
              size(sorted.leadingRun(data, thousands, compare, 1)),
              before,
              label,
            );
            assert.deepEqual(
              collectRuns(data, thousands).map(([key, run]) => [
                key,
                size(run),
              ]),
              [
                [0, before],
                [1, length],
                [2, after],
              ].filter(([, count]) => count),
              label,
            );
          }
        }
      }
    });

    it("splits into runs of items sharing a key, galloping to each end", () => {
      const a = fromValues([1, 2, 3]);
      assert.deepEqual(collectRuns(undefined, tens), []);
      assert.deepEqual(collectRuns(5, tens), [[0, 5]]);
      assert.equal(collectRuns(a, tens)[0][1], a);
      assert.deepEqual(collectRuns(fromValues([1, 2, 11, 25, 27]), tens), [
        [0, [1, 2]],
        [1, 11],
        [2, [25, 27]],
      ]);
      const random = createRandom(11);
      for (let run = 0; run < 200; run++) {
        const values = randomSortedValues(random, (random() * 60) | 0, 200);
        const expected = new Map<number, number[]>();
        for (const n of values) {
          const runValues = expected.get(tens(n));
          if (runValues) runValues.push(n);
          else expected.set(tens(n), [n]);
        }
        assert.deepEqual(
          collectRuns(fromValues(values), tens),
          [...expected].map(([key, run]) => [key, fromValues(run)]),
          `runs([${values}])`,
        );
      }
    });

    it("reduces runs in order, threading the accumulator", () => {
      assert.equal(
        sorted.reduceRuns(undefined, tens, compare, () => 1, 0),
        0,
      );
      const random = createRandom(12);
      for (let run = 0; run < 100; run++) {
        const data = fromValues(
          randomSortedValues(random, (random() * 60) | 0, 200),
        );
        assert.deepEqual(
          sorted.reduceRuns(
            data,
            tens,
            compare,
            (
              runs: [number, OneMany<number>][],
              runKey,
              run,
            ): [number, OneMany<number>][] => [...runs, [runKey, run]],
            [],
          ),
          collectRuns(data, tens),
        );
      }
    });

    it("reads a run's keys logarithmically in its length", () => {
      let keys = 0;
      const half = (n: number) => (keys++, n < 128 ? 0 : 1);
      const runs = collectRuns(fromValues(range(0, 256)), half);
      assert.deepEqual(
        runs.map(([key, run]) => [key, toArray(run).length]),
        [
          [0, 128],
          [1, 128],
        ],
      );
      // Each run's end costs about 2·log2(128) key reads, not 128.
      assert.ok(keys <= 2 * (2 * 7 + 3), `${keys} key reads`);
    });

    it("matches naive set isSuperset", () => {
      assert.equal(sorted.isSuperset(fromValues([1, 2, 3]), undefined), true);
      assert.equal(sorted.isSuperset(fromValues([1, 2, 3]), 2), true);
      assert.equal(sorted.isSuperset(fromValues([1, 2, 3]), 4), false);
      assert.equal(sorted.isSuperset(1, fromValues([1, 2])), false);
      assert.equal(
        sorted.isSuperset(fromValues([1, 2, 3]), fromValues([1, 2, 3])),
        true,
      );
      assert.equal(
        sorted.isSuperset(fromValues([1, 2, 3]), fromValues([2, 3])),
        true,
      );
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

    it("matches naive set intersects", () => {
      assert.equal(sorted.intersects(fromValues([1, 2, 3]), undefined), false);
      assert.equal(sorted.intersects(undefined, 2), false);
      assert.equal(sorted.intersects(fromValues([1, 2, 3]), 2), true);
      assert.equal(sorted.intersects(4, fromValues([1, 2, 3])), false);
      assert.equal(
        sorted.intersects(fromValues([1, 3, 5]), fromValues([2, 4, 5])),
        true,
      );
      assert.equal(
        sorted.intersects(fromValues([1, 3, 5]), fromValues([2, 4, 6])),
        false,
      );
      const random = createRandom(7);
      for (let run = 0; run < 100; run++) {
        const a = randomSortedValues(random, (random() * 8) | 0);
        const b = randomSortedValues(random, (random() * 8) | 0);
        assert.equal(
          sorted.intersects(fromValues(a), fromValues(b)),
          a.some((item) => b.includes(item)),
          `intersects([${a}], [${b}])`,
        );
      }
    });

    it("returns the first argument when a difference drops nothing", () => {
      const a = fromValues([1, 2, 3]);
      assert.equal(sorted.difference(a, undefined), a);
      assert.equal(sorted.difference(a, 4), a);
      assert.equal(sorted.difference(a, fromValues([0, 4])), a);
      assert.equal(sorted.difference(2, 3), 2);
      assert.equal(sorted.difference(2, a), undefined);
      assert.equal(sorted.difference(undefined, a), undefined);
    });

    it("matches naive set difference", () => {
      const random = createRandom(8);
      for (let run = 0; run < 100; run++) {
        const a = randomSortedValues(random, (random() * 8) | 0);
        const b = randomSortedValues(random, (random() * 8) | 0);
        assert.deepEqual(
          sorted.difference(fromValues(a), fromValues(b)),
          fromValues(a.filter((item) => !b.includes(item))),
          `difference([${a}], [${b}])`,
        );
      }
    });

    it("matches naive set algebra between lists of very different sizes", () => {
      const random = createRandom(12);
      for (let run = 0; run < 400; run++) {
        const [a, b] = randomSkewedPair(random);
        const label = `([${a}], [${b}])`;
        assert.deepEqual(
          toArray(sorted.union(fromValues(a), fromValues(b))),
          [...new Set([...a, ...b])].sort(compare),
          `union${label}`,
        );
        assert.equal(
          sorted.intersects(fromValues(a), fromValues(b)),
          a.some((item) => b.includes(item)),
          `intersects${label}`,
        );
        assert.deepEqual(
          sorted.difference(fromValues(a), fromValues(b)),
          fromValues(a.filter((item) => !b.includes(item))),
          `difference${label}`,
        );
        assert.equal(
          sorted.isSuperset(fromValues(a), fromValues(b)),
          b.every((item) => a.includes(item)),
          `isSuperset${label}`,
        );
      }
    });

    it("keeps identity across merge and searching walks", () => {
      const long = fromValues(range(0, 64).map((n) => n * 2));
      const short = fromValues([1, 63]);
      assert.equal(sorted.difference(long, short), long);
      assert.equal(sorted.difference(short, long), short);
      assert.notEqual(sorted.union(long, fromValues([0, 2])), long);
      assert.equal(sorted.union(long, fromValues(toArray(long).slice())), long);
      const near = fromValues([0, 2, 4]);
      assert.equal(sorted.difference(near, fromValues([1, 3])), near);
      assert.equal(sorted.difference(near, 1), near);
      assert.deepEqual(sorted.difference(near, 2), [0, 4]);
      assert.equal(sorted.difference(fromValues([0, 2]), 2), 0);
      assert.notEqual(sorted.union(near, fromValues([0, 2])), near);
    });

    it("merge walks and gallops across every probe width", () => {
      // Items `gap` apart merge walk under a gap of 3, and past it gallop while
      // at least `gap` are left to find; the rest bisect.
      for (let gap = 1; gap < 40; gap++) {
        const long = range(0, gap * (2 * gap + 5)).map((n) => n * 2);
        const inLong = new Set(long);
        for (const offset of [-1, 0, 1]) {
          const short = range(1, 2 * gap + 3).map((k) => k * gap * 2 + offset);
          const inShort = new Set(short);
          const label = `gap ${gap}, offset ${offset}`;
          assert.equal(
            sorted.intersects(fromValues(long), fromValues(short)),
            short.some((n) => inLong.has(n)),
            label,
          );
          assert.deepEqual(
            sorted.difference(fromValues(long), fromValues(short)),
            fromValues(long.filter((n) => !inShort.has(n))),
            label,
          );
          assert.deepEqual(
            sorted.difference(fromValues(short), fromValues(long)),
            fromValues(short.filter((n) => !inLong.has(n))),
            label,
          );
          assert.equal(
            sorted.isSuperset(fromValues(long), fromValues(short)),
            short.every((n) => inLong.has(n)),
            label,
          );
          assert.deepEqual(
            toArray(sorted.union(fromValues(short), fromValues(long))),
            [...new Set([...short, ...long])].sort(compare),
            label,
          );
        }
      }
    });

    it("compares logarithmically when one list is much shorter", () => {
      const counter = createCountingSorted();
      const long = fromValues(range(0, 256).map((n) => n * 2));
      const short = fromValues([101, 301]);
      // Two items far apart in 256 binary search the rest, about log2(256) each;
      // galloping costs twice that and a merge walk ~150.
      const bound = 2 * (8 + 1);
      for (const op of [
        () => counter.sorted.intersects(short, long),
        () => counter.sorted.difference(short, long),
        () => counter.sorted.difference(long, short),
        () => counter.sorted.isSuperset(long, short),
        () => counter.sorted.union(short, long),
      ]) {
        counter.compares = 0;
        op();
        assert.ok(counter.compares <= bound, `${counter.compares} compares`);
      }
    });

    it("merge walks lists of equal size", () => {
      const counter = createCountingSorted();
      const evens = fromValues(range(0, 64).map((n) => n * 2));
      const odds = fromValues(range(0, 64).map((n) => n * 2 + 1));
      for (const op of [
        () => counter.sorted.intersects(evens, odds),
        () => counter.sorted.difference(evens, odds),
        () => counter.sorted.union(evens, odds),
        () => counter.sorted.isSuperset(fromValues(range(0, 128)), evens),
      ]) {
        counter.compares = 0;
        op();
        assert.equal(counter.compares, 127, `${op}`);
      }
    });

    it("merge walks a list under 4 times the other's length, searching past it", () => {
      // Two items after all of the longer list: a merge walk compares once per
      // item it passes, binary search about log2 of them.
      const counter = createCountingSorted();
      const short = fromValues([1000, 1001]);
      for (const [length, compares] of [
        [7, 7],
        [8, 3],
      ]) {
        const long = fromValues(range(0, length));
        for (const op of [
          () => counter.sorted.intersects(short, long),
          () => counter.sorted.difference(short, long),
          () => counter.sorted.difference(long, short),
          () => counter.sorted.isSuperset(long, short),
          () => counter.sorted.union(short, long),
        ]) {
          counter.compares = 0;
          op();
          assert.equal(counter.compares, compares, `${op} against ${length}`);
        }
      }
    });

    it("gallops while the items left to find, squared, reach the items left", () => {
      // 4 items against 16 gallop to the first (1 is 1 on: 2 compares where
      // bisecting takes 5) and against 17 bisect; matches resume past them.
      const counter = createCountingSorted();
      for (const [length, values, compares] of [
        [16, [1, 29, 31, 33], [7, 7, 7, 2, 7]],
        [17, [1, 29, 31, 33], [12, 12, 12, 5, 12]],
        [16, [0, 28, 30, 32], [1, 5, 5, 5, 5]],
      ] as const) {
        const long = fromValues(range(0, length).map((n) => n * 2));
        const short = fromValues([...values]);
        assert.deepEqual(
          [
            () => counter.sorted.intersects(short, long),
            () => counter.sorted.difference(short, long),
            () => counter.sorted.difference(long, short),
            () => counter.sorted.isSuperset(long, short),
            () => counter.sorted.union(short, long),
          ].map((op) => {
            counter.compares = 0;
            op();
            return counter.compares;
          }),
          compares,
          `[${values}] against ${length}`,
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
      assert.equal(filter(undefined, isOdd), undefined);
      assert.equal(filter(2, isOdd), undefined);
      assert.equal(filter(1, isOdd), 1);
      const random = createRandom(5);
      for (let run = 0; run < 100; run++) {
        const values = Array.from(
          { length: (random() * 8) | 0 },
          () => ((random() * 50) | 0) + 1,
        );
        assert.deepEqual(
          toArray(filter(fromValues(values), isOdd)),
          values.filter(isOdd),
        );
      }
    });

    it("first and last read either end", () => {
      assert.equal(first(1), 1);
      assert.equal(last(1), 1);
      assert.equal(first([1, 2, 3] as OneMany<number>), 1);
      assert.equal(last([1, 2, 3] as OneMany<number>), 3);
    });

    it("fromIter round-trips through toArray", () => {
      assert.equal(fromIter([]), undefined);
      assert.equal(fromIter([1]), 1);
      assert.deepEqual(fromIter([1, 2, 1]), [1, 2, 1]);
      for (const values of [[], [1], [3, 1, 2]]) {
        assert.deepEqual(toArray(fromIter(values)), values);
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

    it("some finds a match across every Opt shape", () => {
      const isEven = (n: number) => n % 2 === 0;
      assert.equal(some(undefined, isEven), false);
      assert.equal(some(1, isEven), false);
      assert.equal(some(2, isEven), true);
      assert.equal(some([1, 3, 4] as Opt<number>, isEven), true);
      assert.equal(some([1, 3, 5] as Opt<number>, isEven), false);
    });

    it("reduceWhile stops at the first undefined the callback returns", () => {
      const random = createRandom(13);
      for (let run = 0; run < 400; run++) {
        const values = Array.from(
          { length: (random() * 9) | 0 },
          () => ((random() * 6) | 0) + 1,
        );
        const stop = ((random() * 8) | 0) + 1;
        let calls = 0;
        const sumUntilStop = (sum: number, n: number) => {
          calls++;
          return n === stop ? undefined : sum + n;
        };
        const index = values.indexOf(stop);
        const expected =
          index === -1 ? values.reduce((sum, n) => sum + n, 0) : undefined;
        assert.equal(
          reduceWhile(fromValues(values), sumUntilStop, 0),
          expected,
          `[${values}] until ${stop}`,
        );
        assert.equal(calls, index === -1 ? values.length : index + 1);
      }
    });

    it("every is vacuously true and checks all Opt shapes", () => {
      const isEven = (n: number) => n % 2 === 0;
      assert.equal(every(undefined, isEven), true);
      assert.equal(every(1, isEven), false);
      assert.equal(every(2, isEven), true);
      assert.equal(every([2, 4, 6] as Opt<number>, isEven), true);
      assert.equal(every([2, 3, 4] as Opt<number>, isEven), false);
    });
  });
});
