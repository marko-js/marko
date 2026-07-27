import { AccessorProp, type Scope } from "../common/types";
import { queueEffect, rendering } from "./queue";

export function $signalReset(scope: Scope, id: string | number) {
  const ctrl = scope[AccessorProp.AbortControllers]?.[id];
  if (ctrl) {
    scope[AccessorProp.AbortControllers]![id] = undefined;
    // Deferred so `onabort` cannot run user code mid render; a destroy from
    // outside a render has no effect flush to defer to.
    if (rendering) queueEffect(ctrl as any, abort as any);
    else abort(ctrl as AbortController);
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
