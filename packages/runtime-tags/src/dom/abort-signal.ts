import type { Scope } from "../common/types";
import { onDestroy } from "./scope";

export function resetAbortSignal(scope: Scope, id: string | number) {
  const controllers = scope.___abortControllers;
  if (controllers) {
    const ctrl = controllers.get(id);
    if (ctrl) {
      ctrl.abort();
      controllers.delete(id);
    }
  }
}

export function getAbortSignal(scope: Scope, id: string | number) {
  const controllers = (scope.___abortControllers ??= new Map());
  let controller = controllers.get(id);
  if (!controller) {
    onDestroy(scope);
    controllers.set(id, (controller = new AbortController()));
  }

  return controller.signal;
}
