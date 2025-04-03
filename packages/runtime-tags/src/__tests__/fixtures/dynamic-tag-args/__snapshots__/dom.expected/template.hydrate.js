// size: 289 (min) 204 (brotli)
const $setup = () => {},
  $input = _$.value(2, ($scope, input) =>
    _$.data($scope[0], JSON.stringify(input)),
  );
const tags = [_$.createTemplate("a", "<div> </div>", "D l", $setup, $input)],
  $dynamicTag = _$.dynamicTag(2, 0, 0, 1),
  $x_effect = _$.effect("b0", ($scope, { 6: x }) =>
    _$.on($scope[0], "click", function () {
      $x($scope, x + 1);
    }),
  ),
  $x = _$.state(6, ($scope, x) => {
    _$.data($scope[1], x),
      $dynamicTag($scope, tags[0], () => [x, "foo"]),
      $x_effect($scope);
  });
init();
