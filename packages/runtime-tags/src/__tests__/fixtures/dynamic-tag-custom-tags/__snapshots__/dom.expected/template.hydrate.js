// size: 455 (min) 228 (brotli)
const $setup$1 = () => {},
  $value$1 = _._const(3, ($scope) => _._text($scope.a, $scope.d)),
  $input$1 = _._const(2, ($scope) => $value$1($scope, $scope.c.value));
var child1 = _._template(
  "a",
  "<div>Child 1 has <!></div>",
  "Db%l",
  $setup$1,
  $input$1,
);
const $setup = () => {},
  $value = _._const(3, ($scope) => _._text($scope.a, $scope.d)),
  $input = _._const(2, ($scope) => $value($scope, $scope.c.value));
var child2 = _._template(
  "b",
  "<div>Child 2 has <!></div>",
  "Db%l",
  $setup,
  $input,
);
const $dynamicTag = _._dynamic_tag(0),
  $tagName__OR__val = _._or(4, ($scope) =>
    $dynamicTag($scope, $scope.c, () => ({ value: $scope.d })),
  ),
  $tagName__script = _._script("c0", ($scope) =>
    _._on($scope.b, "click", function () {
      $tagName($scope, $scope.c === child1 ? child2 : child1);
    }),
  ),
  $tagName = _._let(2, ($scope) => {
    ($tagName__OR__val($scope), $tagName__script($scope));
  });
init();
