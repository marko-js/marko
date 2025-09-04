// size: 411 (min) 204 (brotli)
const $x__script = _._script("a1", ($scope, { 2: x }) =>
    _._on($scope[0], "click", function () {
      $x($scope, ++x);
    }),
  ),
  $x = _._let(2, ($scope, x) => {
    (_._text($scope[1], x), _._return($scope, x), $x__script($scope));
  });
_._resume("a0", function ($scope) {
  return (_new_x) => {
    $x($scope, _new_x);
  };
});
const $count__script = _._script("b0", ($scope, { 5: count }) =>
  _._on($scope[2], "click", function () {
    _._var_change($scope[0], ++count);
  }),
);
(_._var_resume(
  "b1",
  _._const(5, ($scope, count) => {
    (_._text($scope[3], count), $count__script($scope));
  }),
),
  _._script("b2", ($scope) =>
    _._on($scope[4], "click", function () {
      _._var_change($scope[0], 0);
    }),
  ),
  init());
