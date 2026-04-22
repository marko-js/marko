// size: 365 (min) 215 (brotli)
const $count__script = _._script(`a0`, ($scope) =>
    _._on($scope.a, `click`, function () {
      $count($scope, $scope.c + 1);
    }),
  ),
  $count = _._let(2, ($scope) => {
    (_._text($scope.b, $scope.c), $count__script($scope));
  });
function $setup($scope) {
  $count($scope, 0);
}
const $tagName_content = _._content_resume(
    `b0`,
    `<button id=count> </button>`,
    ((_w0) => `/${_w0}&`)(` D l`),
    ($scope) => {
      $setup($scope.a);
    },
  ),
  $dynamicTag = _._dynamic_tag(0, $tagName_content),
  $tagName__script = _._script(`b1`, ($scope) =>
    _._on($scope.b, `click`, function () {
      $tagName($scope, $scope.c === `span` ? `div` : `span`);
    }),
  ),
  $tagName = _._let(2, ($scope) => {
    ($dynamicTag($scope, $scope.c), $tagName__script($scope));
  });
init();
