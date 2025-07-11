// size: 347 (min) 207 (brotli)
_$.enableCatch();
const $value$await$content = _$.value(2, ($scope, value) =>
    _$.data($scope[0], value),
  ),
  $params2$await$content = _$.value(1, ($scope, $params2) =>
    $value$await$content($scope, $params2[0]),
  ),
  $await_content = _$.createRenderer(" ", " ", 0, $params2$await$content);
_$.registerContent("a0", "LOADING...");
const $await$try$content = _$.awaitTag(0, $await_content),
  $clickCount$try$content = _$.dynamicClosureRead(2, ($scope, clickCount) =>
    $await$try$content($scope, resolveAfter(clickCount, 1)),
  ),
  $clickCount_closure = _$.dynamicClosure($clickCount$try$content),
  $clickCount_effect = _$.effect("a1", ($scope, { 2: clickCount }) =>
    _$.on($scope[0], "click", function () {
      $clickCount($scope, clickCount + 1);
    }),
  ),
  $clickCount = _$.state(2, ($scope) => {
    ($clickCount_closure($scope), $clickCount_effect($scope));
  });
init();
