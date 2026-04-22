// size: 266 (min) 187 (brotli)
const $setup = () => {},
  $id = ($scope, id) => _._text($scope.a, id);
var child_default = _._template(
  `a`,
  `<div>Id is <!></div>`,
  `Db%l`,
  $setup,
  ($scope, input) => $id($scope, input.id),
);
const $dynamicTag = _._dynamic_tag(1),
  $tagName__script = _._script(`b0`, ($scope) =>
    _._on($scope.a, `click`, function () {
      $tagName($scope, $scope.c === child_default ? `div` : child_default);
    }),
  ),
  $tagName = _._let(2, ($scope) => {
    ($dynamicTag($scope, $scope.c, () => ({ id: `dynamic` })),
      $tagName__script($scope));
  });
init();
