import { queueEffect } from "./queue";
import { $scope, onDestroy } from "./scope";

export function resetAbortSignal(id: string | number) {
  const controllers = $scope.___abortControllers;
  if (controllers) {
    const ctrl = controllers.get(id);
    if (ctrl) {
      queueEffect(() => ctrl.abort());
      controllers.delete(id);
    }
  }
}

export function getAbortSignal(id: string | number) {
  const controllers = ($scope.___abortControllers ||= new Map());
  let controller = controllers.get(id);
  if (!controller) {
    onDestroy($scope);
    controllers.set(id, (controller = new AbortController()));
  }

  return controller.signal;
}
