// size: 223 (min) 155 (brotli)
_._script(`b0`, ($scope) =>
  _._on($scope.a, `click`, function () {
    this.doThing();
  }),
);
const $outer_content__count = _._closure_get(2, ($scope) =>
    _._text($scope.a, $scope._.c),
  ),
  $count__closure = _._closure($outer_content__count),
  $count__script = _._script(`c1`, ($scope) =>
    _._on($scope.b, `click`, function () {
      $count($scope, $scope.c + 1);
    }),
  ),
  $count = _._let(2, ($scope) => {
    ($count__closure($scope), $count__script($scope));
  });
init();
