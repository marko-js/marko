// size: 465 (min) 242 (brotli)
const $setup$1 = () => {},
  $value$1 = _._const(3, ($scope) => _._text($scope[0], $scope[3])),
  $input$1 = _._const(2, ($scope) => $value$1($scope, $scope[2].value));
var child1 = _._template(
  "a",
  "<div>Child 1 has <!></div>",
  "Db%l",
  $setup$1,
  $input$1,
);
const $setup = () => {},
  $value = _._const(3, ($scope) => _._text($scope[0], $scope[3])),
  $input = _._const(2, ($scope) => $value($scope, $scope[2].value));
var child2 = _._template(
  "b",
  "<div>Child 2 has <!></div>",
  "Db%l",
  $setup,
  $input,
);
const $dynamicTag = _._dynamic_tag(0),
  $tagName__OR__val = _._or(4, ($scope) =>
    $dynamicTag($scope, $scope[2], () => ({ value: $scope[3] })),
  ),
  $tagName__script = _._script("c0", ($scope) =>
    _._on($scope[1], "click", function () {
      $tagName($scope, $scope[2] === child1 ? child2 : child1);
    }),
  ),
  $tagName = _._let(2, ($scope) => {
    ($tagName__OR__val($scope), $tagName__script($scope));
  });
init();
