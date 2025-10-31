// size: 352 (min) 208 (brotli)
const $count__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", function () {
      $count($scope, $scope[2] + 1);
    }),
  ),
  $count = _._let(2, ($scope) => {
    (_._text($scope[1], $scope[2]), $count__script($scope));
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
  $tagName__script = _._script("b1", ($scope) =>
    _._on($scope[1], "click", function () {
      $tagName($scope, "span" === $scope[2] ? "div" : "span");
    }),
  ),
  $tagName = _._let(2, ($scope) => {
    ($dynamicTag($scope, $scope[2]), $tagName__script($scope));
  });
init();
