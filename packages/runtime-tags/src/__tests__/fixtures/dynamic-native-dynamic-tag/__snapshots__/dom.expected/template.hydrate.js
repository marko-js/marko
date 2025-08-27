// size: 258 (min) 175 (brotli)
const $tagName_content = _$.registerContent("a0", "body content", "b"),
  $dynamicTag = _$.dynamicTag(0, $tagName_content),
  $expr_tagName_className = _$.intersection(4, ($scope) => {
    const { 2: tagName, 3: className } = $scope;
    $dynamicTag($scope, tagName, () => ({ class: className }));
  }),
  $tagName_effect = _$.effect("a1", ($scope, { 2: tagName }) =>
    _$.on($scope[1], "click", function () {
      $tagName($scope, (tagName = "span" === tagName ? "div" : "span"));
    }),
  ),
  $tagName = _$.state(2, ($scope) => {
    ($expr_tagName_className($scope), $tagName_effect($scope));
  });
init();
