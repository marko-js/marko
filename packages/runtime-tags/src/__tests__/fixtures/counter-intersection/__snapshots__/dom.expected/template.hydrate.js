// size: 243 (min) 163 (brotli)
const $a__OR__b = _._or(7, ($scope) => {
    let { 5: a, 6: b } = $scope;
    _._text($scope[4], a + b);
  }),
  $a = _._let(5, ($scope, a) => {
    (_._text($scope[1], a), $a__OR__b($scope));
  }),
  $b = _._let(6, ($scope, b) => {
    (_._text($scope[3], b), $a__OR__b($scope));
  });
(_._script("a0", ($scope) => {
  (_._on($scope[0], "click", function () {
    $a($scope, 10);
  }),
    _._on($scope[2], "click", function () {
      $b($scope, 5);
    }));
}),
  init());
