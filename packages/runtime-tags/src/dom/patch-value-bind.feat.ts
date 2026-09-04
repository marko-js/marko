import "./patch-value.feat";
import { BIND_FRAME_VAR } from "../common/meta";
import type { Scope } from "../common/types";
import { PatchKey } from "../common/types";
import { frameChecks, frameVars } from "./patch";
import { failPatch, getRegisteredWithScope, patchers, patchId } from "./resume";

// The frame's bind table: a source entry re-binds its registration
// against the paired live scope it anchors at, and bound fills reference
// the bind by index. Epoch-keyed so a lost source entry in a later
// frame can never read an earlier frame's handler.
let frameBinds: Record<string, unknown> = {};
let frameBindsPatch = 0;
const binds = () => {
  if (frameBindsPatch !== patchId) {
    frameBinds = {};
    frameBindsPatch = patchId;
  }
  return frameBinds;
};
patchers[PatchKey.BindSource] = (scope, key, id) => {
  binds()[key.slice(PatchKey.BindSource.length)] = (
    getRegisteredWithScope(id as string) as (scope: Scope) => unknown
  )(scope);
};
// The frame's bind references: each wrapper resolves lazily (its bind
// walks in after the frame text evaluates), validated at commit.
let expectedEmbedded: [binds: Record<string, unknown>, n: number][] = [];
let expectedEmbeddedPatch = 0;
frameChecks.push(() => {
  const expected = expectedEmbedded;
  expectedEmbedded = [];
  if (expectedEmbeddedPatch === patchId) {
    for (const [frameBinds, n] of expected) {
      if (!(n in frameBinds)) failPatch();
    }
  }
});
frameVars[BIND_FRAME_VAR] = (n: number) => {
  const frameBinds = binds();
  if (expectedEmbeddedPatch !== patchId) {
    expectedEmbeddedPatch = patchId;
    expectedEmbedded = [];
  }
  expectedEmbedded.push([frameBinds, n]);
  return (...args: unknown[]) =>
    (frameBinds[n] as (...args: unknown[]) => unknown)(...args);
};
