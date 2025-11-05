import { AccessorProp, type Scope } from "../common/types";
import { queueEffect } from "./queue";

export function $signalReset(scope: Scope, id: string | number) {
  const ctrl = scope[AccessorProp.AbortControllers]?.[id];
  if (ctrl) {
    queueEffect(ctrl as any, abort as any);
    scope[AccessorProp.AbortControllers]![id] = undefined;
  }
}

export function $signal(scope: Scope, id: string | number) {
  if (scope[AccessorProp.ClosestBranch]) {
    (scope[AccessorProp.ClosestBranch][AccessorProp.AbortScopes] ||=
      new Set()).add(scope);
  }

  return ((scope[AccessorProp.AbortControllers] ||= {})[id] ||=
    new AbortController()).signal;
}

function abort(ctrl: AbortController) {
  ctrl.abort();
}
