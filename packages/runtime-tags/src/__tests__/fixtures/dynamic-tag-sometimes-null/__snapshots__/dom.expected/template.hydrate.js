// size: 191 (min) 145 (brotli)
const $x_content = _._content_resume("a0", "Body Content", "b"),
  $dynamicTag = _._dynamic_tag(0, $x_content),
  $x__script = _._script("a1", ($scope, { 2: x }) =>
    _._on($scope[1], "click", function () {
      $x($scope, (x = x ? null : "div"));
    }),
  ),
  $x = _._let(2, ($scope, x) => {
    ($dynamicTag($scope, x), $x__script($scope));
  });
init();
