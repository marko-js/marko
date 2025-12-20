// size: 268 (min) 188 (brotli)
const $setup = () => {},
  $input = ($scope, input) =>
    (($scope, id) => _._text($scope.a, id))($scope, input.id);
var child = _._template("a", "<div>Id is <!></div>", "Db%l", $setup, $input);
const $dynamicTag = _._dynamic_tag(1),
  $tagName__script = _._script("b0", ($scope) =>
    _._on($scope.a, "click", function () {
      $tagName($scope, $scope.c === child ? "div" : child);
    }),
  ),
  $tagName = _._let(2, ($scope) => {
    ($dynamicTag($scope, $scope.c, () => ({ id: "dynamic" })),
      $tagName__script($scope));
  });
init();
