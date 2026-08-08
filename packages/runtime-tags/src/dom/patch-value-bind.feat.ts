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
// Applied after the walk (the source entry's anchor may walk later); a
// missing deposit means the bound scope never paired — reject, never
// install a silently unbound handler. A missing FILL mirrors `Value`:
// soft for paired refresh, required for construct seeds. The fill runs
// in its own batch: the frame's render queue has already flushed.
const applyBoundFill = (scope: Scope, key: string, n: unknown) => {
  queueEffect(scope, (scope) => {
    const deposits = binds();
    if (!((n as number) in deposits)) failPatch();
    runEffects(
      prepareEffects(() =>
        patchFills[key.slice(PatchKey.ValueBind.length)]?.(
          scope,
          deposits[n as number],
        ),
      ),
    );
  });
};
patchers[PatchKey.ValueBind] = applyBoundFill;
constructPatchers[PatchKey.ValueBind] = (scope, key, n) => {
  if (!patchFills[key.slice(PatchKey.ValueBind.length)]) failPatch();
  applyBoundFill(scope, key, n);
};
