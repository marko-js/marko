/**
 * Regression test for the race condition where runEffects executes effects
 * for branch scopes that have already been destroyed.
 *
 * Scenario:
 *   1. A branch is created and its setup render runs, queuing script effects.
 *   2. Within the same runRenders() pass a later render destroys the branch
 *      (branch[Destroyed] = 1), but the effect is already in pendingEffects.
 *   3. runEffects() fires — without the guard it calls the script effect on the
 *      stale scope, where any node ref returns undefined, producing a TypeError.
 *
 * The fix adds `!scope[ClosestBranch]?.[Destroyed]` to the base runEffects
 * loop, mirroring the same guard already in runRenders and the _enable_catch
 * enhanced path.
 */

import assert from "assert/strict";
import { JSDOM } from "jsdom";

import { AccessorProp } from "../common/types";

describe("runEffects — destroyed branch guard", () => {
  let queue: typeof import("../dom/queue");
  let prevDocument: unknown;

  before(() => {
    // Save whatever was in globalThis.document (typically undefined in Node).
    prevDocument = (globalThis as any).document;

    const { window: jsdomWindow } = new JSDOM("");
    (globalThis as any).document = jsdomWindow.document;

    // Lazily loaded so the dom/* modules only load after globalThis.document is
    // set (walker.ts calls document.createTreeWalker(document) at
    // module-evaluation time).
    queue = require("../dom/queue");
  });

  after(() => {
    // Restore the original value so subsequent suites see a clean state.
    if (prevDocument === undefined) {
      delete (globalThis as any).document;
    } else {
      (globalThis as any).document = prevDocument;
    }
  });

  it("skips an effect whose closest branch is marked Destroyed", () => {
    let effectRan = false;
    const fn = () => {
      effectRan = true;
    };

    const branch = { [AccessorProp.Destroyed]: 1 as const };
    const scope = { [AccessorProp.ClosestBranch]: branch };

    queue.runEffects([fn, scope as any]);

    assert.equal(
      effectRan,
      false,
      "effect must not run when branch is already destroyed",
    );
  });

  it("runs an effect whose closest branch is not destroyed", () => {
    let effectRan = false;
    const fn = () => {
      effectRan = true;
    };

    const branch = {} as any;
    const scope = { [AccessorProp.ClosestBranch]: branch };

    queue.runEffects([fn, scope as any]);

    assert.equal(effectRan, true, "effect must run when branch is active");
  });

  it("runs an effect on a scope with no branch (top-level scope)", () => {
    let effectRan = false;
    const fn = () => {
      effectRan = true;
    };

    const scope = {} as any;

    queue.runEffects([fn, scope]);

    assert.equal(effectRan, true, "effect must run when scope has no branch");
  });

  it("processes multiple effects, skipping only the destroyed-branch ones", () => {
    const ran: string[] = [];

    const activeBranch = {} as any;
    const destroyedBranch = { [AccessorProp.Destroyed]: 1 as const };

    const scopeA = { [AccessorProp.ClosestBranch]: activeBranch };
    const scopeB = { [AccessorProp.ClosestBranch]: destroyedBranch };
    const scopeC = {} as any;

    queue.runEffects([
      () => ran.push("A"),
      scopeA as any,
      () => ran.push("B"),
      scopeB as any,
      () => ran.push("C"),
      scopeC,
    ]);

    assert.deepEqual(ran, ["A", "C"], "only non-destroyed-branch effects run");
  });
});
