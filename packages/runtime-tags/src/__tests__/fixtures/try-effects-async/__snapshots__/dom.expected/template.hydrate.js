// size: 514 (min) 296 (brotli)
_._enable_catch();
const $await_content__value = _._const(2, ($scope) =>
    _._text(
      $scope.a,
      $scope.c > 1
        ? (() => {
            throw new Error("ERROR!");
          })()
        : $scope.c,
    ),
  ),
  $await_content__$params = _._const(1, ($scope) =>
    $await_content__value($scope, $scope.b[0]),
  ),
  $catch_content__err = _._const(2, ($scope) => _._text($scope.a, $scope.c)),
  $catch_content__$params = _._const(1, ($scope) =>
    $catch_content__err($scope, $scope.b[0]),
  );
(_._content_resume("a0", " ", " b", 0, $catch_content__$params),
  _._content_resume("a1", "LOADING...", "b"));
const $try_content__await = _._await(
    0,
    "Async: <!>",
    "b%b",
    0,
    $await_content__$params,
  ),
  $try_content__clickCount__script = _._script(
    "a2",
    ($scope) => ($scope._.b.textContent = $scope._.d),
  ),
  $try_content__clickCount = _._closure_get(3, ($scope) => {
    ($try_content__await($scope, resolveAfter($scope._.d, 1)),
      $try_content__clickCount__script($scope));
  }),
  $clickCount__closure = _._closure($try_content__clickCount),
  $clickCount__script = _._script("a3", ($scope) =>
    _._on($scope.a, "click", function () {
      $clickCount($scope, $scope.d + 1);
    }),
  ),
  $clickCount = _._let(3, ($scope) => {
    ($clickCount__closure($scope), $clickCount__script($scope));
  });
init();
