// size: 296 (min) 198 (brotli)
const $setup = () => {},
  $id = _._const(3, ($scope) => _._text($scope[0], $scope[3])),
  $input = _._const(2, ($scope) => $id($scope, $scope[2].id));
var child = _._template("a", "<div>Id is <!></div>", "Db%l", $setup, $input);
const $dynamicTag = _._dynamic_tag(1),
  $tagName__script = _._script("b0", ($scope) =>
    _._on($scope[0], "click", function () {
      $tagName($scope, $scope[2] === child ? "div" : child);
    }),
  ),
  $tagName = _._let(2, ($scope) => {
    ($dynamicTag($scope, $scope[2], () => ({ id: "dynamic" })),
      $tagName__script($scope));
  });
init();
