// size: 407 (min) 218 (brotli)
const $setup$1 = () => {},
  $value$1 = ($scope, value) => _._text($scope.a, value);
var child1_default = _._template(
  `a`,
  `<div>Child 1 has <!></div>`,
  `Db%l`,
  $setup$1,
  ($scope, input) => $value$1($scope, input.value),
);
const $setup = () => {},
  $value = ($scope, value) => _._text($scope.a, value);
var child2_default = _._template(
  `b`,
  `<div>Child 2 has <!></div>`,
  `Db%l`,
  $setup,
  ($scope, input) => $value($scope, input.value),
);
const $dynamicTag = _._dynamic_tag(0),
  $tagName__OR__val = _._or(4, ($scope) =>
    $dynamicTag($scope, $scope.c, () => ({ value: $scope.d })),
  ),
  $tagName__script = _._script(`c0`, ($scope) =>
    _._on($scope.b, `click`, function () {
      $tagName(
        $scope,
        $scope.c === child1_default ? child2_default : child1_default,
      );
    }),
  ),
  $tagName = _._let(2, ($scope) => {
    ($tagName__OR__val($scope), $tagName__script($scope));
  });
init();
