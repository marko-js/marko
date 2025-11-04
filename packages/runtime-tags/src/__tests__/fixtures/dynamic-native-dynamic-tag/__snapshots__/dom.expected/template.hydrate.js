// size: 228 (min) 154 (brotli)
const $tagName_content = _._content_resume("a0", "body content", "b"),
  $dynamicTag = _._dynamic_tag(0, $tagName_content),
  $tagName__OR__className = _._or(4, ($scope) =>
    $dynamicTag($scope, $scope.c, () => ({ class: $scope.d })),
  ),
  $tagName__script = _._script("a1", ($scope) =>
    _._on($scope.b, "click", function () {
      $tagName($scope, "span" === $scope.c ? "div" : "span");
    }),
  ),
  $tagName = _._let(2, ($scope) => {
    ($tagName__OR__className($scope), $tagName__script($scope));
  });
init();
