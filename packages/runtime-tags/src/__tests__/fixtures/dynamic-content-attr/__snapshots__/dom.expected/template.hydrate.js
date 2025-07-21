// size: 327 (min) 210 (brotli)
let sideEffect = 3;
const $count$define$content = _$.dynamicClosureRead(1, ($scope, count) =>
  _$.data($scope[0], count),
);
_$.registerContent("a0", "<!> <!>", "%c%", ($scope) => {
  (_$.data($scope[1], sideEffect++), $count$define$content($scope));
});
const $expr_count_MyThing = _$.intersection(3, ($scope) => {
    const { 1: count, 2: MyThing } = $scope;
    _$.insertContent($scope, 0, MyThing);
  }),
  $count_closure = _$.dynamicClosure($count$define$content),
  $count_effect = _$.effect("a1", ($scope, { 1: count }) =>
    _$.on($scope[0], "click", function () {
      $count($scope, ++count);
    }),
  ),
  $count = _$.state(1, ($scope) => {
    ($expr_count_MyThing($scope),
      $count_closure($scope),
      $count_effect($scope));
  });
init();
