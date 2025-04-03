// size: 315 (min) 210 (brotli)
const $input = _$.value(2, ($scope, input) => _$.data($scope[0], input));
function $setup($scope) {
  _$.tagVarSignal($scope, "hello from other");
}
const tags = [_$.createTemplate("a", "<div> </div>", "D l", $setup, $input)],
  $dynamicTag = _$.dynamicTag(2, 0, 0, 1),
  $x_effect = _$.effect("b0", ($scope, { 3: x }) =>
    _$.on($scope[0], "click", function () {
      $x($scope, x + 1);
    }),
  ),
  $x = _$.state(3, ($scope, x) => {
    _$.data($scope[1], x),
      $dynamicTag($scope, tags[0], () => [x]),
      $x_effect($scope);
  });
init();
