// size: 373 (min) 213 (brotli)
const $count_effect = _$.effect("a0", ($scope, { 2: count }) =>
    _$.on($scope[0], "click", function () {
      $count($scope, count + 1);
    }),
  ),
  $count = _$.state(2, ($scope, count) => {
    _$.data($scope[1], count), $count_effect($scope);
  });
const $tagName_content = _$.registerContent(
    "b0",
    "<button id=count> </button>",
    "/ D l&",
    ($scope) => {
      !(function ($scope) {
        $count($scope, 0);
      })($scope[0]);
    },
  ),
  $dynamicTag = _$.dynamicTag(0, $tagName_content),
  $tagName_effect = _$.effect("b1", ($scope, { 2: tagName }) =>
    _$.on($scope[1], "click", function () {
      $tagName($scope, "span" === tagName ? "div" : "span");
    }),
  ),
  $tagName = _$.state(2, ($scope, tagName) => {
    $dynamicTag($scope, tagName), $tagName_effect($scope);
  });
init();
