// size: 297 (min) 187 (brotli)
let sideEffect = 3;
const $MyThing_content__count = _._closure_get(1, ($scope) =>
  _._text($scope[0], $scope._[1]),
);
_._content_resume("a0", "<!> <!>", "%c%b", ($scope) => {
  (_._text($scope[1], sideEffect++), $MyThing_content__count($scope));
});
const $count__OR__MyThing = _._or(3, ($scope) =>
    _._attr_content($scope, 0, ($scope[1], $scope[2])),
  ),
  $count__closure = _._closure($MyThing_content__count),
  $count__script = _._script("a1", ($scope) =>
    _._on($scope[0], "click", function () {
      $count($scope, $scope[1] + 1);
    }),
  ),
  $count = _._let(1, ($scope) => {
    ($count__OR__MyThing($scope),
      $count__closure($scope),
      $count__script($scope));
  });
init();
