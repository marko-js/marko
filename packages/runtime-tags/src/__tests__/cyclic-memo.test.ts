import * as assert from "assert/strict";

import { createCyclicMemo } from "../translator/util/cyclic-memo";

interface Key {
  flag: boolean;
}

describe("runtime-tags/cyclic memo", () => {
  it("caches nothing a cycle through another memo left provisional", () => {
    // `a` asks `b` before its own flag, and `b` re-asks `a`: `b`'s first
    // answer is built on `a`'s cycle answer, so it must not be cached.
    const a = createCyclicMemo(
      (key: Key): boolean => b(key) || key.flag,
      false,
    );
    const b = createCyclicMemo((key: Key): boolean => a(key), false);
    const key = { flag: true };
    assert.equal(a(key), true);
    assert.equal(b(key), true);
  });

  it("computes a key once while the computation it took a cycle answer from runs", () => {
    const { ask, computes } = createWalk("h:ab a:c b:c c:h");
    assert.equal(ask("h"), "h(a(c(*)),b(c(*)))");
    assert.deepEqual(computes, { h: 1, a: 1, b: 1, c: 1 });
  });

  it("answers each ask as a computation from scratch would", () => {
    const cases: [string, [string, string][]][] = [
      // `a`'s walk took a cycle answer from `b`, a computation it started.
      [
        "h:a a:b b:bh",
        [
          ["h", "h(a(b(*,*)))"],
          ["a", "a(b(*,h(a(b(*,*)))))"],
        ],
      ],
      // `a` reused `b`'s provisional answer, so it is provisional too.
      [
        "h:ba a:b b:h",
        [
          ["h", "h(b(*),a(b(*)))"],
          ["a", "a(b(h(b(*),a(b(*)))))"],
        ],
      ],
      // `b` took cycle answers from `a`, then `h`; `a` has ended when `h` asks `b`.
      ["h:ab a:b b:ac c:h", [["h", "h(a(b(*,c(*))),b(a(*),c(*)))"]]],
      // `b` took `h`'s cycle answer before asking `a`, which caches.
      [
        "h:b a: b:ha",
        [
          ["h", "h(b(*,a()))"],
          ["b", "b(h(b(*,a())),a())"],
        ],
      ],
    ];
    for (const [graph, answers] of cases) {
      const { ask } = createWalk(graph);
      for (const [key, answer] of answers)
        assert.equal(ask(key), answer, graph);
    }
  });
});

interface WalkKey {
  name: string;
  next: WalkKey[];
}

// A memo whose answer is its walk over `graph` ("h:ab a:" is h → a, b), "*" where it
// took a cycle answer, so every ask shows each answer the walk met.
function createWalk(graph: string) {
  const keys = new Map<string, WalkKey>();
  for (const entry of graph.split(" ")) {
    keys.set(entry.split(":")[0], { name: entry.split(":")[0], next: [] });
  }
  for (const entry of graph.split(" ")) {
    const [name, next] = entry.split(":");
    keys.get(name)!.next = [...next].map((key) => keys.get(key)!);
  }
  const computes: Record<string, number> = {};
  const walk = createCyclicMemo((key: WalkKey): string => {
    computes[key.name] = (computes[key.name] || 0) + 1;
    return `${key.name}(${key.next.map(walk).join(",")})`;
  }, "*");
  return { ask: (name: string) => walk(keys.get(name)!), computes };
}
