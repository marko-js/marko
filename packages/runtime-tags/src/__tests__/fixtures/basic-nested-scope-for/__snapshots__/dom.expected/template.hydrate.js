// size: 231 (min) 160 (brotli)
const $for_content__selected__OR__num = _._or(4, ($scope) => {
  let {
    _: { 1: selected },
    3: num,
  } = $scope;
  (_._attr($scope[0], "data-selected", selected === num),
    _._attr($scope[0], "data-multiple", num % selected === 0));
});
_._script("a0", ($scope, { 3: num }) =>
  _._on($scope[0], "click", function () {
    $selected($scope._, num);
  }),
);
const $for_content__selected = _._for_closure(
    1,
    0,
    $for_content__selected__OR__num,
  ),
  $selected = _._let(1, $for_content__selected);
init();
