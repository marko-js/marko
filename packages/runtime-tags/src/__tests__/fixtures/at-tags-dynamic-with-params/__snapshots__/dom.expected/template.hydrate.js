// size: 321 (min) 206 (brotli)
const $dynamicTag = _$.dynamicTag(0, 0, 0, 1),
  $input_item = _$.value(3, ($scope, input_item) =>
    $dynamicTag($scope, input_item, () => [1]),
  ),
  $y$item$content = _$.value(2, ($scope, y) => _$.data($scope[0], y)),
  $params2$item$content = _$.value(1, ($scope, $params2) =>
    $y$item$content($scope, $params2[0]),
  ),
  $item_content = _$.registerContent(
    "b0",
    "y: <!>",
    "b%",
    0,
    $params2$item$content,
  ),
  $x_effect = _$.effect("b1", ($scope, { 2: x }) =>
    _$.on($scope[1], "click", function () {
      $x($scope, !x);
    }),
  ),
  $x = _$.state(2, ($scope, x) => {
    let $item;
    (x && ($item = _$.attrTag({ content: $item_content($scope) })),
      $input_item($scope[0], $item),
      $x_effect($scope));
  });
init();
