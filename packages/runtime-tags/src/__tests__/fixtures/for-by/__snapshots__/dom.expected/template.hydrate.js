// size: 973 (min) 295 (brotli)
const $for_content5__text = _._const(3, ($scope, text) =>
    _._text($scope[0], text),
  ),
  $for_content5__$params = _._const(1, ($scope, $params6) =>
    $for_content5__$temp($scope, $params6?.[0]),
  ),
  $for_content5__$temp = _._const(2, ($scope, $temp5) =>
    $for_content5__text($scope, $temp5.text),
  ),
  $for_content5 = _._content_branch(" ", " b", 0, $for_content5__$params),
  $for_content4__text = _._const(3, ($scope, text) => _._text($scope[0], text)),
  $for_content4__$params = _._const(1, ($scope, $params5) =>
    $for_content4__$temp($scope, $params5?.[0]),
  ),
  $for_content4__$temp = _._const(2, ($scope, $temp4) =>
    $for_content4__text($scope, $temp4.text),
  ),
  $for_content4 = _._content_branch(" ", " b", 0, $for_content4__$params),
  $for_content3__text = _._const(3, ($scope, text) => _._text($scope[0], text)),
  $for_content3__$params = _._const(1, ($scope, $params4) =>
    $for_content3__$temp($scope, $params4?.[0]),
  ),
  $for_content3__$temp = _._const(2, ($scope, $temp3) =>
    $for_content3__text($scope, $temp3.text),
  ),
  $for_content3 = _._content_branch(" ", " b", 0, $for_content3__$params),
  $for_content2__text = _._const(3, ($scope, text) => _._text($scope[0], text)),
  $for_content2__$params = _._const(1, ($scope, $params3) =>
    $for_content2__$temp($scope, $params3?.[0]),
  ),
  $for_content2__$temp = _._const(2, ($scope, $temp2) =>
    $for_content2__text($scope, $temp2.text),
  ),
  $for_content2 = _._content_branch(" ", " b", 0, $for_content2__$params),
  $for_content__text = _._const(3, ($scope, text) => _._text($scope[0], text)),
  $for_content__$params = _._const(1, ($scope, $params2) =>
    $for_content__$temp($scope, $params2?.[0]),
  ),
  $for_content__$temp = _._const(2, ($scope, $temp) =>
    $for_content__text($scope, $temp.text),
  ),
  $for_content = _._content_branch(" ", " b", 0, $for_content__$params),
  $for = _._for_of(0, $for_content),
  $for2 = _._for_of(1, $for_content2),
  $for3 = _._for_of(2, $for_content3),
  $for4 = _._for_of(3, $for_content4),
  $for5 = _._for_of(4, $for_content5),
  $items__script = _._script("a0", ($scope, { 6: items }) =>
    _._on($scope[5], "click", function () {
      $items($scope, (items = [...items.slice(1), items[0]]));
    }),
  ),
  $items = _._let(6, ($scope, items) => {
    ($for($scope, [items, "id"]),
      $for2($scope, [items, (item) => item.id]),
      $for3($scope, [items, "id"]),
      $for4($scope, [items, (item) => item.id]),
      $for5($scope, [items, void 0]),
      $items__script($scope));
  });
init();
