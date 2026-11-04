import {
  AccessorProp,
  ClosureScopesProp,
  ClosureSignalProp,
  PatchKey,
  type Scope,
} from "../../common/types";
import { queueRender, runId } from "../queue";
import { _resumed } from "../resume";
import type { ClosureScopes, SignalFn } from "../signals";
import { readChanged, patchers } from "./apply";
import { closureSubscribers } from "./signals";
import "./marked-write.feat";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.Subscribers]: string;
  }
}

// A filled intersection a scope renders where its group mixes, valued by the writes it depends
// on: a live scope re-renders it once one changed, checked ahead of the scope's renders.
patchers[PatchKey.Render] = (scope, id, reads) => {
  if (scope[AccessorProp.Gen] === runId) {
    (_resumed[id] as SignalFn)(scope);
  } else {
    queueRender(
      scope,
      (scope: Scope) =>
        readChanged(scope, reads) && (_resumed[id] as SignalFn)(scope),
      -1,
    );
  }
};

// A closure the owner's change re-runs in each subscribed scope, by the position its code
// registers: the server subscribes a scope only where that code ships, the client where it ran.
patchers[PatchKey.Subscribers] = (scope, id, reads) => {
  const signals = closureSubscribers[id];
  if (signals) {
    // Positions share their keys, and the last one is always registered.
    const position = signals[signals.length - 1];
    queueRender(
      scope,
      (scope: Scope) => {
        const instances = scope[position[ClosureSignalProp.ScopesAccessor]] as
          | ClosureScopes
          | undefined;
        if (instances && readChanged(scope, reads)) {
          instances[ClosureScopesProp.Changed] = 1;
          for (const childScope of instances) {
            if (
              childScope[AccessorProp.Gen] > 0 &&
              childScope[AccessorProp.Gen] < runId
            ) {
              signals[
                (childScope[
                  position[ClosureSignalProp.SignalIndexAccessor]
                ] as number) || 0
              ](childScope);
            }
          }
        }
      },
      -1,
    );
  }
};
