// size: 240 (min) 154 (brotli)
_._resume_dynamic_tag();
const $tagName_content = _._content_resume("a1", "body content", "b"),
  $dynamicTag = _._dynamic_tag(0, $tagName_content),
  $tagName = _._let(1, ($scope) =>
    $dynamicTag($scope, $scope[1], () => ({
      class: "A",
      onClick: $onClick($scope),
    })),
  );
function $onClick($scope) {
  return function () {
    $tagName($scope, "span" === $scope[1] ? "div" : "span");
  };
}
(_._resume("a0", $onClick), init());
