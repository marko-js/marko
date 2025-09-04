// size: 366 (min) 218 (brotli)
const $count__script = _._script("a0", ($scope, { 2: count }) =>
    _._on($scope[0], "click", function () {
      $count($scope, ++count);
    }),
  ),
  $count = _._let(2, ($scope, count) => {
    (_._text($scope[1], count), $count__script($scope));
  });
const $tagName_content = _._content_resume(
    "b0",
    "<button id=count> </button>",
    "/ D l&",
    ($scope) => {
      !(function ($scope) {
        $count($scope, 0);
      })($scope[0]);
    },
  ),
  $dynamicTag = _._dynamic_tag(0, $tagName_content),
  $tagName__script = _._script("b1", ($scope, { 2: tagName }) =>
    _._on($scope[1], "click", function () {
      $tagName($scope, (tagName = "span" === tagName ? "div" : "span"));
    }),
  ),
  $tagName = _._let(2, ($scope, tagName) => {
    ($dynamicTag($scope, tagName), $tagName__script($scope));
  });
init();
