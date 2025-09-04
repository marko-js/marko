// size: 179 (min) 150 (brotli)
const $value__OR__dummy = _._or(5, ($scope) => {
    let { 3: value, 4: dummy } = $scope;
    _._text($scope[0], value);
  }),
  $value = _._const(3, $value__OR__dummy),
  $count__script = _._script("b0", ($scope, { 2: count }) =>
    _._on($scope[1], "click", function () {
      $count($scope, ++count);
    }),
  ),
  $count = _._let(2, ($scope, count) => {
    ($value($scope[0], count), $count__script($scope));
  });
init();
