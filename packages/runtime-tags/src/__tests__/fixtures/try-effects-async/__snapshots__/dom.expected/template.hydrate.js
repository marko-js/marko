// size: 558 (min) 300 (brotli)
_$.enableCatch();
const $value$await$content = _$.value(2, ($scope, value) =>
    _$.data(
      $scope[0],
      value > 1
        ? (() => {
            throw new Error("ERROR!");
          })()
        : value,
    ),
  ),
  $params3$await$content = _$.value(1, ($scope, $params3) =>
    $value$await$content($scope, $params3[0]),
  ),
  $await_content = _$.createRenderer(
    "Async: <!>",
    "b%",
    0,
    $params3$await$content,
  ),
  $err$catch$content = _$.value(2, ($scope, err) => _$.data($scope[0], err)),
  $params2$catch$content = _$.value(1, ($scope, $params2) =>
    $err$catch$content($scope, $params2[0]),
  );
(_$.registerContent("a0", " ", " ", 0, $params2$catch$content),
  _$.registerContent("a1", "LOADING..."));
const $await$try$content = _$.awaitTag(0, $await_content),
  $clickCount$try$content_effect = _$.effect(
    "a2",
    ($scope, { _: { 3: clickCount } }) =>
      ($scope._[1].textContent = clickCount),
  ),
  $clickCount$try$content = _$.dynamicClosureRead(3, ($scope, clickCount) => {
    ($await$try$content($scope, resolveAfter(clickCount, 1)),
      $clickCount$try$content_effect($scope));
  }),
  $clickCount_closure = _$.dynamicClosure($clickCount$try$content),
  $clickCount_effect = _$.effect("a3", ($scope, { 3: clickCount }) =>
    _$.on($scope[0], "click", function () {
      $clickCount($scope, ++clickCount);
    }),
  ),
  $clickCount = _$.state(3, ($scope) => {
    ($clickCount_closure($scope), $clickCount_effect($scope));
  });
init();
