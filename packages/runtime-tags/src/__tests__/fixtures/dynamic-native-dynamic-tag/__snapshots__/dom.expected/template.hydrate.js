// size: 232 (min) 168 (brotli)
const $tagName_content = _._content_resume("a0", "body content", "b"),
  $dynamicTag = _._dynamic_tag(0, $tagName_content),
  $tagName__OR__className = _._or(4, ($scope) =>
    $dynamicTag($scope, $scope[2], () => ({ class: $scope[3] })),
  ),
  $tagName__script = _._script("a1", ($scope) =>
    _._on($scope[1], "click", function () {
      $tagName($scope, "span" === $scope[2] ? "div" : "span");
    }),
  ),
  $tagName = _._let(2, ($scope) => {
    ($tagName__OR__className($scope), $tagName__script($scope));
  });
init();
