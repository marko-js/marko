// size: 324 (min) 200 (brotli)
const $dynamicTag = _._dynamic_tag(0, 0, 0, 1),
  $input_item = _._const(3, ($scope, input_item) =>
    $dynamicTag($scope, input_item, () => [1]),
  ),
  $item_content__y = _._const(2, ($scope, y) => _._text($scope[0], y)),
  $item_content__$params = _._const(1, ($scope, $params2) =>
    $item_content__y($scope, $params2[0]),
  ),
  $item_content = _._content("b0", "y: <!>", "b%b", 0, $item_content__$params),
  $x__script = _._script("b1", ($scope, { 2: x }) =>
    _._on($scope[1], "click", function () {
      $x($scope, (x = !x));
    }),
  ),
  $x = _._let(2, ($scope, x) => {
    let $item;
    (x && ($item = _.attrTag({ content: $item_content($scope) })),
      $input_item($scope[0], $item),
      $x__script($scope));
  });
init();
