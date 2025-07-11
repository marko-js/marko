// size: 1062 (min) 355 (brotli)
const getStringBy = $getStringBy,
  getFunctionBy = $getFunctionBy,
  getMissingBy = $getMissingBy,
  $text$for$content5 = _$.value(3, ($scope, text) => _$.data($scope[0], text)),
  $params6$for$content = _$.value(1, ($scope, $params6) =>
    $temp5$for$content($scope, $params6?.[0]),
  ),
  $temp5$for$content = _$.value(2, ($scope, $temp5) =>
    $text$for$content5($scope, $temp5.text),
  ),
  $for_content5 = _$.createRenderer(" ", " ", 0, $params6$for$content),
  $text$for$content4 = _$.value(3, ($scope, text) => _$.data($scope[0], text)),
  $params5$for$content = _$.value(1, ($scope, $params5) =>
    $temp4$for$content($scope, $params5?.[0]),
  ),
  $temp4$for$content = _$.value(2, ($scope, $temp4) =>
    $text$for$content4($scope, $temp4.text),
  ),
  $for_content4 = _$.createRenderer(" ", " ", 0, $params5$for$content),
  $text$for$content3 = _$.value(3, ($scope, text) => _$.data($scope[0], text)),
  $params4$for$content = _$.value(1, ($scope, $params4) =>
    $temp3$for$content($scope, $params4?.[0]),
  ),
  $temp3$for$content = _$.value(2, ($scope, $temp3) =>
    $text$for$content3($scope, $temp3.text),
  ),
  $for_content3 = _$.createRenderer(" ", " ", 0, $params4$for$content),
  $text$for$content2 = _$.value(3, ($scope, text) => _$.data($scope[0], text)),
  $params3$for$content = _$.value(1, ($scope, $params3) =>
    $temp2$for$content($scope, $params3?.[0]),
  ),
  $temp2$for$content = _$.value(2, ($scope, $temp2) =>
    $text$for$content2($scope, $temp2.text),
  ),
  $for_content2 = _$.createRenderer(" ", " ", 0, $params3$for$content),
  $text$for$content = _$.value(3, ($scope, text) => _$.data($scope[0], text)),
  $params2$for$content = _$.value(1, ($scope, $params2) =>
    $temp$for$content($scope, $params2?.[0]),
  ),
  $temp$for$content = _$.value(2, ($scope, $temp) =>
    $text$for$content($scope, $temp.text),
  ),
  $for_content = _$.createRenderer(" ", " ", 0, $params2$for$content),
  $for = _$.loopOf(0, $for_content),
  $for2 = _$.loopOf(1, $for_content2),
  $for3 = _$.loopOf(2, $for_content3),
  $for4 = _$.loopOf(3, $for_content4),
  $for5 = _$.loopOf(4, $for_content5),
  $items_effect = _$.effect("a3", ($scope, { 6: items }) =>
    _$.on($scope[5], "click", function () {
      $items($scope, [...items.slice(1), items[0]]);
    }),
  ),
  $items = _$.state(6, ($scope, items) => {
    ($for($scope, [items, "id"]),
      $for2($scope, [items, (item) => item.id]),
      $for3($scope, [items, getStringBy()]),
      $for4($scope, [items, getFunctionBy()]),
      $for5($scope, [items, getMissingBy()]),
      $items_effect($scope));
  });
function $getStringBy() {
  return "id";
}
function $getFunctionBy() {
  return (item) => item.id;
}
function $getMissingBy() {}
(_$.register("a0", $getStringBy),
  _$.register("a1", $getFunctionBy),
  _$.register("a2", $getMissingBy),
  init());
