// size: 487 (min) 249 (brotli)
const $setup$1 = () => {},
  $value$1 = _._const(3, ($scope, value) => _._text($scope[0], value)),
  $input$1 = _._const(2, ($scope, input) => $value$1($scope, input.value));
var child1 = _._template(
  "a",
  "<div>Child 1 has <!></div>",
  "Db%l",
  $setup$1,
  $input$1,
);
const $setup = () => {},
  $value = _._const(3, ($scope, value) => _._text($scope[0], value)),
  $input = _._const(2, ($scope, input) => $value($scope, input.value));
var child2 = _._template(
  "b",
  "<div>Child 2 has <!></div>",
  "Db%l",
  $setup,
  $input,
);
const $dynamicTag = _._dynamic_tag(0),
  $tagName__OR__val = _._or(4, ($scope) => {
    let { 2: tagName, 3: val } = $scope;
    $dynamicTag($scope, tagName, () => ({ value: val }));
  }),
  $tagName__script = _._script("c0", ($scope, { 2: tagName }) =>
    _._on($scope[1], "click", function () {
      $tagName($scope, (tagName = tagName === child1 ? child2 : child1));
    }),
  ),
  $tagName = _._let(2, ($scope) => {
    ($tagName__OR__val($scope), $tagName__script($scope));
  });
init();
