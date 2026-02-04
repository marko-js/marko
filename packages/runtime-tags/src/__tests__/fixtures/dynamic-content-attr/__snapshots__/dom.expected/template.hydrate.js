// size: 292 (min) 188 (brotli)
let sideEffect = 3;
const $MyThing_content__count = _._closure_get(1, ($scope) =>
  _._text($scope.a, $scope._.b),
);
_._content_resume("a0", "<!> <!>", "%c%b", ($scope) => {
  ($MyThing_content__count($scope), _._text($scope.b, sideEffect++));
});
const $count__OR__MyThing = _._or(3, ($scope) =>
    _._attr_content($scope, "a", ($scope.b, $scope.c)),
  ),
  $count__closure = _._closure($MyThing_content__count),
  $count__script = _._script("a1", ($scope) =>
    _._on($scope.a, "click", function () {
      $count($scope, $scope.b + 1);
    }),
  ),
  $count = _._let(1, ($scope) => {
    ($count__OR__MyThing($scope),
      $count__closure($scope),
      $count__script($scope));
  });
init();
