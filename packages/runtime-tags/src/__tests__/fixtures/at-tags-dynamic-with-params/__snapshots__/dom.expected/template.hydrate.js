// size: 271 (min) 184 (brotli)
const $dynamicTag = _._dynamic_tag(0, 0, 0, 1),
  $input_item = ($scope, input_item) =>
    $dynamicTag($scope, input_item, () => [1]),
  $item_content__y = ($scope, y) => _._text($scope.a, y),
  $item_content = _._content(`b0`, `y: <!>`, `b%b`, 0, ($scope, $params2) =>
    $item_content__y($scope, $params2[0]),
  ),
  $x__script = _._script(`b1`, ($scope) =>
    _._on($scope.b, `click`, function () {
      $x($scope, !$scope.c);
    }),
  ),
  $x = _._let(2, ($scope) => {
    let $item;
    ($scope.c && ($item = _.attrTag({ content: $item_content($scope) })),
      $input_item($scope.a, $item),
      $x__script($scope));
  });
init();
