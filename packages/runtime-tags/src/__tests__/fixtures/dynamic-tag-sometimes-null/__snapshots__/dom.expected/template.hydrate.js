// size: 183 (min) 143 (brotli)
const $x_content = _._content_resume("a0", "Body Content", "b"),
  $dynamicTag = _._dynamic_tag(0, $x_content),
  $x__script = _._script("a1", ($scope) =>
    _._on($scope[1], "click", function () {
      $x($scope, $scope[2] ? null : "div");
    }),
  ),
  $x = _._let(2, ($scope) => {
    ($dynamicTag($scope, $scope[2]), $x__script($scope));
  });
init();
