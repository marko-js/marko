// size: 305 (min) 211 (brotli)
const $setup = () => {},
  $id = _$.value(3, ($scope, id) => _$.data($scope[0], id)),
  $input = _$.value(2, ($scope, input) => $id($scope, input.id));
var child = _$.createTemplate(
  "a",
  "<div>Id is <!></div>",
  "Db%l",
  $setup,
  $input,
);
const $dynamicTag = _$.dynamicTag(1),
  $tagName_effect = _$.effect("b0", ($scope, { 2: tagName }) =>
    _$.on($scope[0], "click", function () {
      $tagName($scope, (tagName = tagName === child ? "div" : child));
    }),
  ),
  $tagName = _$.state(2, ($scope, tagName) => {
    ($dynamicTag($scope, tagName, () => ({ id: "dynamic" })),
      $tagName_effect($scope));
  });
init();
