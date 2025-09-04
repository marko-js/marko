// size: 301 (min) 171 (brotli)
const $multipliedCount = _._const(7, ($scope, multipliedCount) =>
    _._text($scope[3], multipliedCount),
  ),
  $count__OR__multiplier = _._or(6, ($scope) => {
    let { 4: count, 5: multiplier } = $scope;
    $multipliedCount($scope, count * multiplier);
  }),
  $count__script = _._script("a0", ($scope, { 4: count }) =>
    _._on($scope[2], "click", function () {
      $count($scope, ++count);
    }),
  ),
  $count = _._let(4, ($scope) => {
    ($count__OR__multiplier($scope), $count__script($scope));
  }),
  $multiplier__script = _._script("a1", ($scope, { 5: multiplier }) =>
    _._on($scope[0], "click", function () {
      $multiplier($scope, ++multiplier);
    }),
  ),
  $multiplier = _._let(5, ($scope, multiplier) => {
    (_._text($scope[1], multiplier),
      $count__OR__multiplier($scope),
      $multiplier__script($scope));
  });
init();
