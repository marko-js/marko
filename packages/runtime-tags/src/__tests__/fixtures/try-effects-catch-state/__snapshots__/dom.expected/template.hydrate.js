// size: 315 (min) 202 (brotli)
_._enable_catch();
_._content_resume("a0", " ", " b", 0, ($scope, $params2) =>
  (($scope, err) => _._text($scope.a, err))($scope, $params2[0]),
);
const $try_content__clickCount__script = _._script("a1", ($scope) => {
    (_._on($scope.a, "click", function () {
      $clickCount($scope._, $scope._.c + 1);
    }),
      ($scope._.a.textContent = $scope._.c));
  }),
  $try_content__clickCount = _._closure_get(2, ($scope) => {
    (_._text(
      $scope.b,
      (() => {
        if ($scope._.c > 1) throw new Error("ERROR!");
      })(),
    ),
      $try_content__clickCount__script($scope));
  }),
  $clickCount__closure = _._closure($try_content__clickCount),
  $clickCount = _._let(2, $clickCount__closure);
init();
