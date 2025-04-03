// size: 262 (min) 174 (brotli)
const $tagName_content = _$.registerContent("a0", "body content"),
  $expr_tagName_className = _$.intersection(4, ($scope) => {
    const { 2: tagName, 3: className } = $scope;
    $dynamicTag($scope, tagName, () => ({ class: className }));
  }),
  $dynamicTag = _$.dynamicTag(0, $tagName_content),
  $tagName_effect = _$.effect("a1", ($scope, { 2: tagName }) =>
    _$.on($scope[1], "click", function () {
      $tagName($scope, "span" === tagName ? "div" : "span");
    }),
  ),
  $tagName = _$.state(2, ($scope) => {
    $expr_tagName_className($scope), $tagName_effect($scope);
  });
init();
