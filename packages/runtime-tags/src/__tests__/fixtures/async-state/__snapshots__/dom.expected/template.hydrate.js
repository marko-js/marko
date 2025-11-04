// size: 333 (min) 198 (brotli)
_._enable_catch();
const $await_content__value = _._const(2, ($scope) =>
    _._text($scope.a, $scope.c),
  ),
  $await_content__$params = _._const(1, ($scope) =>
    $await_content__value($scope, $scope.b[0]),
  ),
  $await_content = _._content_branch(" ", " b", 0, $await_content__$params);
_._content_resume("a0", "LOADING...", "b");
const $try_content__await = _._await(0, $await_content),
  $try_content__clickCount = _._closure_get(2, ($scope) =>
    $try_content__await($scope, resolveAfter($scope._.c, 1)),
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
