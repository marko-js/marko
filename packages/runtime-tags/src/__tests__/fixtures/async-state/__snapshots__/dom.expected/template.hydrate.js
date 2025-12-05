// size: 305 (min) 190 (brotli)
_._enable_catch();
const $await_content__value = _._const(2, ($scope) =>
    _._text($scope.a, $scope.c),
  ),
  $await_content__$params = _._const(1, ($scope) =>
    $await_content__value($scope, $scope.b[0]),
  );
_._content_resume("a0", "LOADING...", "b");
const $try_content__await_promise = _._await_promise(
    0,
    $await_content__$params,
  ),
  $try_content__clickCount = _._closure_get(2, ($scope) =>
    $try_content__await_promise($scope, resolveAfter($scope._.c)),
  ),
  $clickCount__closure = _._closure($try_content__clickCount),
  $clickCount__script = _._script("a1", ($scope) =>
    _._on($scope.a, "click", function () {
      $clickCount($scope, $scope.c + 1);
    }),
  ),
  $clickCount = _._let(2, ($scope) => {
    ($clickCount__closure($scope), $clickCount__script($scope));
  });
init();
