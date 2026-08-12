import "./patch-value.feat";
import type { Scope } from "../common/types";
import { PatchKey } from "../common/types";
import { prepareEffects, queueEffect, runEffects } from "./queue";
import {
  constructPatchers,
  failPatch,
  getRegisteredWithScope,
  patchers,
  patchId,
} from "./resume";
import { patchFills } from "./signals";

// Per-frame bind deposits: a source entry re-binds its registration
// against the paired live scope it anchors at, and bound fills reference
// the deposit by index. Epoch-keyed so a lost source entry in a later
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
    (getRegisteredWithScope(id as string) || failPatch()) as (
      scope: Scope,
    ) => unknown
  )(scope);
};
// Applied after the walk (the source entry's anchor may walk later) in
// ONE batch, validated first: joins over several bound fills coalesce
// like plain fills, and a missing deposit (the bound scope never paired)
// rejects before ANY bound fill renders — never a silently unbound
// handler or a half-applied frame. A missing FILL mirrors `Value`: soft
// for paired refresh, required for construct seeds.
let pendingBound: [scope: Scope, key: string, n: number][] = [];
let pendingBoundPatch = 0;
const flushBound = () => {
  const fills = pendingBound;
  const deposits = binds();
  pendingBound = [];
  for (const [, , n] of fills) {
    if (!(n in deposits)) failPatch();
  }
  runEffects(
    prepareEffects(() => {
      for (const [scope, key, n] of fills) {
        patchFills[key.slice(PatchKey.ValueBind.length)]?.(scope, deposits[n]);
      }
    }),
  );
};
const applyBoundFill = (scope: Scope, key: string, n: unknown) => {
  // A frame rejected before its flush leaves entries behind: the epoch
  // discards them so the leftover list cannot suppress this frame's flush.
  if (pendingBoundPatch !== patchId || !pendingBound.length) {
    pendingBoundPatch = patchId;
    pendingBound = [];
    queueEffect(scope, flushBound);
  }
  pendingBound.push([scope, key, n as number]);
};
patchers[PatchKey.ValueBind] = applyBoundFill;
constructPatchers[PatchKey.ValueBind] = (scope, key, n) => {
  if (!patchFills[key.slice(PatchKey.ValueBind.length)]) failPatch();
  applyBoundFill(scope, key, n);
};
