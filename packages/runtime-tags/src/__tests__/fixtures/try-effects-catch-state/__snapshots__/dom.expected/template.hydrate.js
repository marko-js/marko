// size: 356 (min) 228 (brotli)
_._enable_catch();
const $catch_content__err = _._const(2, ($scope) =>
    _._text($scope[0], $scope[2]),
  ),
  $catch_content__$params = _._const(1, ($scope) =>
    $catch_content__err($scope, $scope[1][0]),
  );
_._content_resume("a0", " ", " b", 0, $catch_content__$params);
const $try_content__clickCount__script = _._script("a1", ($scope) => {
    (_._on($scope[0], "click", function () {
      $clickCount($scope._, $scope._[2] + 1);
    }),
      ($scope._[0].textContent = $scope._[2]));
  }),
  $try_content__clickCount = _._closure_get(2, ($scope) => {
    (_._text(
      $scope[1],
      (() => {
        if ($scope._[2] > 1) throw new Error("ERROR!");
      })(),
    ),
      $try_content__clickCount__script($scope));
  }),
  $clickCount__closure = _._closure($try_content__clickCount),
  $clickCount = _._let(2, $clickCount__closure);
init();
