// size: 188 (min) 138 (brotli)
const $x_content = _$.registerContent("a0", "Body Content", "b"),
  $dynamicTag = _$.dynamicTag(0, $x_content),
  $x_effect = _$.effect("a1", ($scope, { 2: x }) =>
    _$.on($scope[1], "click", function () {
      $x($scope, (x = x ? null : "div"));
    }),
  ),
  $x = _$.state(2, ($scope, x) => {
    ($dynamicTag($scope, x), $x_effect($scope));
  });
init();
