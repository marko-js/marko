// size: 306 (min) 205 (brotli)
const $setup = () => {},
  $id = _._const(3, ($scope, id) => _._text($scope[0], id)),
  $input = _._const(2, ($scope, input) => $id($scope, input.id));
var child = _._template("a", "<div>Id is <!></div>", "Db%l", $setup, $input);
const $dynamicTag = _._dynamic_tag(1),
  $tagName__script = _._script("b0", ($scope, { 2: tagName }) =>
    _._on($scope[0], "click", function () {
      $tagName($scope, (tagName = tagName === child ? "div" : child));
    }),
  ),
  $tagName = _._let(2, ($scope, tagName) => {
    ($dynamicTag($scope, tagName, () => ({ id: "dynamic" })),
      $tagName__script($scope));
  });
init();
