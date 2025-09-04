// size: 175 (min) 152 (brotli)
const $a__OR__b__script = _._script("a0", ($scope, { 2: a, 3: b }) =>
    _._on($scope[0], "click", function () {
      ($a($scope, ++a), $b($scope, ++b));
    }),
  ),
  $a__OR__b = _._or(4, ($scope) => {
    let { 2: a, 3: b } = $scope;
    (_._text($scope[1], a + b), $a__OR__b__script($scope));
  }),
  $a = _._let(2, $a__OR__b),
  $b = _._let(3, $a__OR__b);
init();
