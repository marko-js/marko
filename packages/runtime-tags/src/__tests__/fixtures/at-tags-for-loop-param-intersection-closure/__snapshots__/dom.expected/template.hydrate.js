// size: 218 (min) 161 (brotli)
const $item_content__mult__OR__item = _._or(1, ($scope) => {
    let {
      _: { 3: mult },
      5: item,
    } = $scope;
    _._text($scope[0], item * mult);
  }),
  $item_content__mult = _._closure_get(3, $item_content__mult__OR__item),
  $mult__closure = _._closure($item_content__mult),
  $mult__script = _._script("b1", ($scope, { 3: mult }) =>
    _._on($scope[1], "click", function () {
      $mult($scope, ++mult);
    }),
  ),
  $mult = _._let(3, ($scope, mult) => {
    (_._text($scope[2], mult), $mult__closure($scope), $mult__script($scope));
  });
init();
