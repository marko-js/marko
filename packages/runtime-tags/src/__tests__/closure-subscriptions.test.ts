import * as assert from "assert/strict";

import { JSDOM } from "jsdom";

import type { AccessorProp as AccessorPropType } from "../common/types";

// The dom runtime reads these while its modules initialize, so they are set for
// the duration of this suite and removed after -- other suites bring their own.
const globalKeys = ["document", "Text", "Comment", "DocumentFragment"] as const;

type AnyScope = Record<string, any>;
type Runtime = {
  AccessorProp: typeof AccessorPropType;
  subscribeToScopeSet: (owner: any, accessor: string, scope: any) => void;
  destroyScope: (scope: any) => void;
};

describe("runtime-tags/dom closure subscriptions", () => {
  const accessor = "ClosureScopes:value";
  const added: string[] = [];
  let runtime: Runtime;

  before(async () => {
    const { window } = new JSDOM("");
    for (const key of globalKeys) {
      if (!(key in globalThis)) {
        added.push(key);
        (globalThis as any)[key] = window[key];
      }
    }

    const [types, signals, scope] = await Promise.all([
      import("../common/types"),
      import("../dom/signals"),
      import("../dom/scope"),
    ]);
    runtime = {
      AccessorProp: types.AccessorProp,
      subscribeToScopeSet: signals.subscribeToScopeSet as any,
      destroyScope: scope.destroyScope as any,
    };
  });

  after(() => {
    for (const key of added) delete (globalThis as any)[key];
  });

  const makeOwner = (): AnyScope => ({
    [runtime.AccessorProp.Gen]: 1,
    [runtime.AccessorProp.Id]: 0,
  });

  const makeChild = (owner: AnyScope): AnyScope => {
    const child: AnyScope = {
      [runtime.AccessorProp.Gen]: 1,
      [runtime.AccessorProp.Id]: 1,
      [runtime.AccessorProp.Owner]: owner,
    };
    // A branch is its own closest branch, which is what carries cleanup.
    child[runtime.AccessorProp.ClosestBranch] = child;
    return child;
  };

  it("removes a subscribed scope from its owner's set when destroyed", () => {
    const owner = makeOwner();
    const child = makeChild(owner);

    runtime.subscribeToScopeSet(owner, accessor, child);
    assert.equal(owner[accessor].size, 1);

    runtime.destroyScope(child);
    assert.equal(owner[accessor].size, 0);
  });

  it("removes a scope its owner's set already contained", () => {
    const owner = makeOwner();
    const child = makeChild(owner);
    // Resume adopts the server's set with its subscribers already in it, so the
    // client subscribes to a set that already contains this scope.
    owner[accessor] = new Set([child]);

    runtime.subscribeToScopeSet(owner, accessor, child);
    assert.equal(owner[accessor].size, 1, "must not double add");

    runtime.destroyScope(child);
    assert.equal(owner[accessor].size, 0);
  });

  it("records a subscription once across repeated subscribes", () => {
    const owner = makeOwner();
    const child = makeChild(owner);

    runtime.subscribeToScopeSet(owner, accessor, child);
    runtime.subscribeToScopeSet(owner, accessor, child);
    assert.equal(child[runtime.AccessorProp.Subscriptions].length, 1);

    runtime.destroyScope(child);
    assert.equal(owner[accessor].size, 0);
  });
});
