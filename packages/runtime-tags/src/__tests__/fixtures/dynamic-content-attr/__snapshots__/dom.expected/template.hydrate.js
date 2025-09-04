// size: 308 (min) 210 (brotli)
let sideEffect = 3;
const $define_content__count = _._closure_get(1, ($scope, count) =>
  _._text($scope[0], count),
);
_._content_resume("a0", "<!> <!>", "%c%b", ($scope) => {
  (_._text($scope[1], sideEffect++), $define_content__count($scope));
});
const $count__OR__MyThing = _._or(3, ($scope) => {
    let { 1: count, 2: MyThing } = $scope;
    _._attr_content($scope, 0, MyThing);
  }),
  $count__closure = _._closure($define_content__count),
  $count__script = _._script("a1", ($scope, { 1: count }) =>
    _._on($scope[0], "click", function () {
      $count($scope, ++count);
    }),
  ),
  $count = _._let(1, ($scope) => {
    ($count__OR__MyThing($scope),
      $count__closure($scope),
      $count__script($scope));
  });
init();
