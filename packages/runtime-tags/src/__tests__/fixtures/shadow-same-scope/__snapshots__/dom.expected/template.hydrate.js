// size: 462 (min) 165 (brotli)
const $count4__script = _._script("a0", ($scope, { 8: count }) =>
    _._on($scope[0], "click", function () {
      $count4($scope, ++count);
    }),
  ),
  $count4 = _._let(8, ($scope, count) => {
    (_._text($scope[1], count), $count4__script($scope));
  }),
  $count5__script = _._script("a1", ($scope, { 9: $count }) =>
    _._on($scope[2], "click", function () {
      $count5($scope, ++$count);
    }),
  ),
  $count5 = _._let(9, ($scope, $count) => {
    (_._text($scope[3], $count), $count5__script($scope));
  }),
  $count6__script = _._script("a2", ($scope, { 10: $count2 }) =>
    _._on($scope[4], "click", function () {
      $count6($scope, ++$count2);
    }),
  ),
  $count6 = _._let(10, ($scope, $count2) => {
    (_._text($scope[5], $count2), $count6__script($scope));
  }),
  $count7__script = _._script("a3", ($scope, { 11: $count3 }) =>
    _._on($scope[6], "click", function () {
      $count7($scope, ++$count3);
    }),
  ),
  $count7 = _._let(11, ($scope, $count3) => {
    (_._text($scope[7], $count3), $count7__script($scope));
  });
init();
