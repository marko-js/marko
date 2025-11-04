// size: 344 (min) 206 (brotli)
const $count__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $count($scope, $scope.c + 1);
    }),
  ),
  $count = _._let(2, ($scope) => {
    (_._text($scope.b, $scope.c), $count__script($scope));
  });
const $tagName_content = _._content_resume(
    "b0",
    "<button id=count> </button>",
    "/ D l&",
    ($scope) => {
      !(function ($scope) {
        $count($scope, 0);
      })($scope.a);
    },
  ),
  $dynamicTag = _._dynamic_tag(0, $tagName_content),
  $tagName__script = _._script("b1", ($scope) =>
    _._on($scope.b, "click", function () {
      $tagName($scope, "span" === $scope.c ? "div" : "span");
    }),
  ),
  $tagName = _._let(2, ($scope) => {
    ($dynamicTag($scope, $scope.c), $tagName__script($scope));
  });
init();
