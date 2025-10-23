// size: 214 (min) 153 (brotli)
const $sum = _._const(3, ($scope, sum) => _._text($scope[1], sum())),
  $items__script = _._script("a0", ($scope, { 2: items }) =>
    _._on($scope[0], "click", function () {
      $items($scope, (items = [...items, items.length]));
    }),
  ),
  $items = _._let(2, ($scope, items) => {
    ($sum($scope, function sum(i = 0) {
      return i >= items.length ? 0 : items[i] + sum(i + 1);
    }),
      $items__script($scope));
  });
init();
