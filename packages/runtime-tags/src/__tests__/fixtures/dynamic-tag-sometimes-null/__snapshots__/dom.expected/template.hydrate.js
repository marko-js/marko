// size: 180 (min) 146 (brotli)
const $x_content = _._content_resume("a0", "Body Content", "b"),
  $dynamicTag = _._dynamic_tag(0, $x_content),
  $x__script = _._script("a1", ($scope) =>
    _._on($scope.b, "click", function () {
      $x($scope, $scope.c ? null : "div");
    }),
  ),
  $x = _._let(2, ($scope) => {
    ($dynamicTag($scope, $scope.c), $x__script($scope));
  });
init();
