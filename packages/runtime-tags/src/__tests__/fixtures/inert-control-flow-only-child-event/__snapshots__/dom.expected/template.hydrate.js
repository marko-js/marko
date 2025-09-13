// size: 187 (min) 140 (brotli)
const $for_content__selected__OR__i = _._or(4, ($scope) => {
    let {
      _: { 1: selected },
      3: i,
    } = $scope;
    _._attr($scope[0], "selected", selected === i);
  }),
  $for_content__selected = _._for_closure(1, 0, $for_content__selected__OR__i),
  $selected = _._let(1, $for_content__selected);
(_._script("a0", ($scope) =>
  _._on($scope[0], "change", function (e) {
    $selected($scope, e.target.value);
  }),
),
  init());
