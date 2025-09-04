import type { Scope } from "../common/types";
import { queueEffect } from "./queue";

export function $signalReset(scope: Scope, id: string | number) {
  const ctrl = scope.___abortControllers?.[id];
  if (ctrl) {
    queueEffect(ctrl as any, abort as any);
    scope.___abortControllers![id] = undefined;
  }
}

export function $signal(scope: Scope, id: string | number) {
  if (scope.___closestBranch) {
    (scope.___closestBranch.___abortScopes ||= new Set()).add(scope);
  }

  return ((scope.___abortControllers ||= {})[id] ||= new AbortController())
    .signal;
}

function abort(ctrl: AbortController) {
  ctrl.abort();
}
