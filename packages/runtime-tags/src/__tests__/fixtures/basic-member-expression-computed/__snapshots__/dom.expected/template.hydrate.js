// size: 269 (min) 191 (brotli)
const $items__OR__index__script = _._script(
    "a0",
    ($scope, { 3: items, 5: index }) =>
      _._on($scope[2], "click", function () {
        const newItems = items.slice(1);
        ($items($scope, (items = newItems)),
          $index($scope, (index = (index + 1) % newItems.length)));
      }),
  ),
  $items__OR__index = _._or(6, ($scope) => {
    let { 3: items, 5: index } = $scope;
    (_._text($scope[1], items[index]), $items__OR__index__script($scope));
  }),
  $items = _._let(3, ($scope, items) => {
    ($items_($scope, items?.[0]), $items__OR__index($scope));
  }),
  $items_ = _._const(4, ($scope, items_0) => _._text($scope[0], items_0)),
  $index = _._let(5, $items__OR__index);
init();
