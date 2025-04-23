// size: 389 (min) 223 (brotli)
const $item$for$content = _$.value(2, ($scope, item) =>
    _$.data($scope[0], item),
  ),
  $params2$for$content = _$.value(1, ($scope, $params2) =>
    $item$for$content($scope, $params2[0]),
  ),
  $for_content = _$.createRenderer(" ", " ", 0, $params2$for$content),
  $expr_id_items_effect = _$.effect("a0", ($scope, { 3: id, 4: items }) =>
    _$.on($scope[1], "click", function () {
      const nextId = id + 1;
      $id($scope, nextId), $items($scope, [...items, nextId]);
    }),
  ),
  $expr_id_items = _$.intersection(5, $expr_id_items_effect),
  $id = _$.state(3, $expr_id_items),
  $for = _$.loopOf(0, $for_content),
  $items_effect = _$.effect("a1", ($scope, { 4: items }) =>
    _$.on($scope[2], "click", function () {
      $items($scope, items.slice(0, -1));
    }),
  ),
  $items = _$.state(4, ($scope, items) => {
    $for($scope, [items]), $expr_id_items($scope), $items_effect($scope);
  });
init();
