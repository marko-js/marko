// size: 220 (min) 124 (brotli)
const $c$if$content = _$.dynamicClosureRead(
    4,
    ($scope, c) => _$.data($scope[2], c),
    ($scope) => $scope._._,
  ),
  $c$customtag$content = _$.dynamicClosureRead(4, ($scope, c) =>
    _$.data($scope[2], c),
  ),
  $c_closure = _$.dynamicClosure($c$customtag$content, $c$if$content),
  $c = _$.state(4, $c_closure);
_$.effect("b1", ($scope) =>
  _$.on($scope[0], "click", function () {
    $c($scope, 4);
  }),
),
  init();
