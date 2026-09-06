import "./patch-value.feat";
import { BIND_FRAME_VAR } from "../common/meta";
import type { Scope } from "../common/types";
import { PatchKey } from "../common/types";
import { frameChecks, frameEpoch, frameVars } from "./patch";
import { failPatch, getRegisteredWithScope, patchers } from "./resume";

// A bind table per frame epoch: a source entry re-binds its registration at
// the paired live scope, and bound fills reference the bind by index.
const tables = new WeakMap<object, Record<string, unknown>>();
const binds = () => {
  let table = tables.get(frameEpoch);
  if (!table) tables.set(frameEpoch, (table = {}));
  return table;
};
patchers[PatchKey.BindSource] = (scope, key, id) => {
  binds()[key.slice(PatchKey.BindSource.length)] = (
    getRegisteredWithScope(id as string) as (scope: Scope) => unknown
  )(scope);
};
// The frame's bind references: each wrapper resolves lazily (its bind
// walks in after the frame text evaluates), validated at commit.
let expectedEmbedded: [binds: Record<string, unknown>, n: number][] = [];
let expectedEmbeddedPatch: object = {};
frameChecks.push(() => {
  const expected = expectedEmbedded;
  expectedEmbedded = [];
  if (expectedEmbeddedPatch === frameEpoch) {
    for (const [frameBinds, n] of expected) {
      if (!(n in frameBinds)) failPatch();
    }
  }
});
frameVars[BIND_FRAME_VAR] = (n: number) => {
  const frameBinds = binds();
  if (expectedEmbeddedPatch !== frameEpoch) {
    expectedEmbeddedPatch = frameEpoch;
    expectedEmbedded = [];
  }
  expectedEmbedded.push([frameBinds, n]);
  // A bound value that is not callable (owner-bound content) is the value.
  return (...args: unknown[]) =>
    typeof frameBinds[n] === "function"
      ? (frameBinds[n] as (...args: unknown[]) => unknown)(...args)
      : frameBinds[n];
};
