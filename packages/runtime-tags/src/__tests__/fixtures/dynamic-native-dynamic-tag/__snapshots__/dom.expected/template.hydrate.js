// size: 250 (min) 175 (brotli)
const $tagName_content = _._content_resume("a0", "body content", "b"),
  $dynamicTag = _._dynamic_tag(0, $tagName_content),
  $tagName__OR__className = _._or(4, ($scope) => {
    let { 2: tagName, 3: className } = $scope;
    $dynamicTag($scope, tagName, () => ({ class: className }));
  }),
  $tagName__script = _._script("a1", ($scope, { 2: tagName }) =>
    _._on($scope[1], "click", function () {
      $tagName($scope, (tagName = "span" === tagName ? "div" : "span"));
    }),
  ),
  $tagName = _._let(2, ($scope) => {
    ($tagName__OR__className($scope), $tagName__script($scope));
  });
init();
