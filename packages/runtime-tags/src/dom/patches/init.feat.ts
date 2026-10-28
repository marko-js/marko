import { AccessorProp, PatchKey, type Scope } from "../../common/types";
import { queueRender, runId } from "../queue";
import { _resumed } from "../resume";
import type { SignalFn } from "../signals";
import { depChanged, patchers } from "./apply";
import "./marked-write.feat";

// A written intersection a scope inits where its group mixes, valued by the writes it depends
// on: a live scope re-runs it once one changed, checked ahead of the scope's renders.
patchers[PatchKey.Init] = (scope, id, deps) => {
  if (scope[AccessorProp.Gen] === runId) {
    (_resumed[id] as SignalFn)(scope);
  } else {
    queueRender(
      scope,
      (scope: Scope) =>
        depChanged(scope, deps.split(" ")) && (_resumed[id] as SignalFn)(scope),
      -1,
    );
  }
};
