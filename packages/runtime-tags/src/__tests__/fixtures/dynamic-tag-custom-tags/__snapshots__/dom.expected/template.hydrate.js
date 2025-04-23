// size: 514 (min) 253 (brotli)
const $setup$1 = () => {},
  $value$1 = _$.value(3, ($scope, value) => _$.data($scope[0], value)),
  $input$1 = _$.value(2, ($scope, input) => $value$1($scope, input.value));
var child1 = _$.createTemplate(
  "a",
  "<div>Child 1 has <!></div>",
  "Db%l",
  $setup$1,
  $input$1,
);
const $setup = () => {},
  $value = _$.value(3, ($scope, value) => _$.data($scope[0], value)),
  $input = _$.value(2, ($scope, input) => $value($scope, input.value));
var child2 = _$.createTemplate(
  "b",
  "<div>Child 2 has <!></div>",
  "Db%l",
  $setup,
  $input,
);
const $dynamicTag = _$.dynamicTag(),
  $expr_tagName_val = _$.intersection(4, ($scope) => {
    const { 2: tagName, 3: val } = $scope;
    $dynamicTag($scope, tagName, () => ({ value: val }));
  }),
  $tagName_effect = _$.effect("c0", ($scope, { 2: tagName }) =>
    _$.on($scope[1], "click", function () {
      $tagName($scope, tagName === child1 ? child2 : child1);
    }),
  ),
  $tagName = _$.state(2, ($scope) => {
    $expr_tagName_val($scope), $tagName_effect($scope);
  });
init();
