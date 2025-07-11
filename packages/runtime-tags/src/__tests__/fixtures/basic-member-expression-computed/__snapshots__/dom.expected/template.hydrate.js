// size: 273 (min) 199 (brotli)
const $expr_items_index_effect = _$.effect(
    "a0",
    ($scope, { 3: items, 5: index }) =>
      _$.on($scope[2], "click", function () {
        const newItems = items.slice(1);
        ($items($scope, newItems),
          $index($scope, (index + 1) % newItems.length));
      }),
  ),
  $expr_items_index = _$.intersection(6, ($scope) => {
    const { 3: items, 5: index } = $scope;
    (_$.data($scope[1], items[index]), $expr_items_index_effect($scope));
  }),
  $items = _$.state(3, ($scope, items) => {
    ($items_($scope, items?.[0]), $expr_items_index($scope));
  }),
  $items_ = _$.value(4, ($scope, items_0) => _$.data($scope[0], items_0)),
  $index = _$.state(5, $expr_items_index);
init();
