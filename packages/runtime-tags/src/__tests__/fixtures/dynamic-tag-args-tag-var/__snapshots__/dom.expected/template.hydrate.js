// size: 370 (min) 229 (brotli)
const $setup = () => {},
  $input = _$.value(2, ($scope, input) => {
    _$.data($scope[0], input), _$.tagVarSignal($scope, input);
  });
const tags = [
    _$.createTemplate("a", "<div>Child: <!></div>", "Db%l", $setup, $input),
  ],
  $dynamicTag = _$.dynamicTag(2, 0, () => $y, 1),
  $y = _$.registerBoundSignal(
    "b0",
    _$.value(6, ($scope, y) => _$.data($scope[4], y)),
  ),
  $x_effect = _$.effect("b1", ($scope, { 5: x }) =>
    _$.on($scope[0], "click", function () {
      $x($scope, x + 1);
    }),
  ),
  $x = _$.state(5, ($scope, x) => {
    _$.data($scope[1], x),
      $dynamicTag($scope, tags[0], () => [x]),
      $x_effect($scope);
  });
init();
