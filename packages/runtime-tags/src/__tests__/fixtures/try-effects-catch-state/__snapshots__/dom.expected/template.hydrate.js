// size: 363 (min) 219 (brotli)
_$.enableCatch();
const $err$catch$content = _$.value(2, ($scope, err) =>
    _$.data($scope[0], err),
  ),
  $params2$catch$content = _$.value(1, ($scope, $params2) =>
    $err$catch$content($scope, $params2[0]),
  );
_$.registerContent("a0", " ", " ", 0, $params2$catch$content);
const $clickCount$try$content_effect = _$.effect(
    "a1",
    ($scope, { _: { 2: clickCount } }) => {
      (_$.on($scope[0], "click", function () {
        $clickCount($scope._, ++clickCount);
      }),
        ($scope._[0].textContent = clickCount));
    },
  ),
  $clickCount$try$content = _$.dynamicClosureRead(2, ($scope, clickCount) => {
    (_$.data(
      $scope[1],
      (() => {
        if (clickCount > 1) throw new Error("ERROR!");
      })(),
    ),
      $clickCount$try$content_effect($scope));
  }),
  $clickCount_closure = _$.dynamicClosure($clickCount$try$content),
  $clickCount = _$.state(2, $clickCount_closure);
init();
