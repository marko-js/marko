import "./utils/install-dom-globals";

import assert from "node:assert/strict";

import { run } from "../dom/queue";
import { createScope, destroyScope } from "../dom/scope";
import { _let_global } from "../dom/signals";

const tick = () => new Promise<void>((resolve) => setTimeout(resolve, 5));

describe("dom/_let_global", () => {
  it("fans a write out to every subscribed scope in the same render root", async () => {
    const $global: Record<string, unknown> = {};
    const seen: string[] = [];
    const countA = _let_global<number>("count", (scope) =>
      seen.push(`a:${scope.$global.count}`),
    );
    const countB = _let_global<number>("count", (scope) =>
      seen.push(`b:${scope.$global.count}`),
    );

    const scopeA = createScope($global);
    const scopeB = createScope($global);
    countA(scopeA, 0); // seed + subscribe
    countB._(scopeB); // subscribe only (hydration path)
    run(); // settle the creation generation

    assert.equal($global.count, 0);
    seen.length = 0;

    countA(scopeA, 1); // event-style write from one instance
    await tick();

    assert.equal($global.count, 1);
    assert.deepEqual(seen.sort(), ["a:1", "b:1"]);
  });

  it("dedupes same-value writes", async () => {
    const $global: Record<string, unknown> = {};
    const seen: number[] = [];
    const count = _let_global<number>("count", (scope) =>
      seen.push(scope.$global.count as number),
    );

    const scope = createScope($global);
    count(scope, 1);
    run();
    seen.length = 0;

    count(scope, 1);
    await tick();
    assert.deepEqual(seen, []);
  });

  it("delivers a write made during a render flush (not silently dropped)", async () => {
    // A synchronous cross-scope `_let` write during a flush is discarded by
    // the generation guard; the shared binding must instead ride the render
    // queue so the same flush drains it.
    const $global: Record<string, unknown> = {};
    const seen: string[] = [];

    const scopeA = createScope($global);
    const scopeB = createScope($global);

    const valueA = _let_global<number>("value", (scope) =>
      seen.push(`a:${scope.$global.value}`),
    );
    let wrote = false;
    const valueB = _let_global<number>("value", (scope) => {
      seen.push(`b:${scope.$global.value}`);
      if (!wrote) {
        wrote = true;
        // Write from INSIDE the flush (e.g. a derived update cascading).
        valueB(scope, 2);
      }
    });

    valueA(scopeA, 0);
    valueB._(scopeB);
    run();
    seen.length = 0;

    valueA(scopeA, 1); // outside a flush: schedules; flush cascades b's write
    await tick();

    assert.equal($global.value, 2);
    // Both scopes observed the cascaded value; nothing was dropped.
    assert.ok(seen.includes("a:2"), `a saw 2 (${seen})`);
    assert.ok(seen.includes("b:2"), `b saw 2 (${seen})`);
  });

  it("stops notifying a destroyed scope", async () => {
    const $global: Record<string, unknown> = {};
    const seen: string[] = [];
    const countA = _let_global<number>("count", (scope) =>
      seen.push(`a:${scope.$global.count}`),
    );
    const countB = _let_global<number>("count", (scope) =>
      seen.push(`b:${scope.$global.count}`),
    );

    const scopeA = createScope($global);
    const scopeB = createScope($global);
    countA(scopeA, 0);
    countB._(scopeB);
    run();

    destroyScope(scopeB);
    run(); // abort effects run in the flush
    seen.length = 0;

    countA(scopeA, 1);
    await tick();
    assert.deepEqual(seen, ["a:1"]);
  });

  it("isolates render roots: same key, different $global objects", async () => {
    const globalOne: Record<string, unknown> = {};
    const globalTwo: Record<string, unknown> = {};
    const seen: string[] = [];
    const countOne = _let_global<number>("count", (scope) =>
      seen.push(`one:${scope.$global.count}`),
    );
    const countTwo = _let_global<number>("count", (scope) =>
      seen.push(`two:${scope.$global.count}`),
    );

    const scopeOne = createScope(globalOne);
    const scopeTwo = createScope(globalTwo);
    countOne(scopeOne, 0);
    countTwo(scopeTwo, 100);
    run();
    seen.length = 0;

    countOne(scopeOne, 1);
    await tick();

    assert.equal(globalOne.count, 1);
    assert.equal(globalTwo.count, 100);
    assert.deepEqual(seen, ["one:1"]);
  });
});
