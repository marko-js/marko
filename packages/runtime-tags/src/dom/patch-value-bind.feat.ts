import "./patch-value.feat";
import { BIND_FRAME_VAR } from "../common/meta";
import type { Scope } from "../common/types";
import { PatchKey } from "../common/types";
import { frameChecks, frameEpoch, frameVars } from "./patch";
import { failPatch, getRegisteredWithScope, patchers } from "./resume";

// The frame's bind table: a source entry re-binds its registration
// against the paired live scope it anchors at, and bound fills reference
// the bind by index. Keyed by frame epoch (a frame and its deferred drains)
// so a lost source entry in a later frame never reads an earlier handler.
let frameBinds: Record<string, unknown> = {};
let frameBindsEpoch = 0;
const binds = () => {
  if (frameBindsEpoch !== frameEpoch) {
    frameBinds = {};
    frameBindsEpoch = frameEpoch;
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
  return (...args: unknown[]) =>
    (frameBinds[n] as (...args: unknown[]) => unknown)(...args);
};
