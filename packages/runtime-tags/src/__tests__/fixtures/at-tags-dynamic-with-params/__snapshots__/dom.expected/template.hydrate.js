// size: 273 (min) 198 (brotli)
const $dynamicTag = _._dynamic_tag(0, 0, 0, 1),
  $item_content__$params = ($scope, $params2) =>
    (($scope, y) => _._text($scope.a, y))($scope, $params2[0]),
  $item_content = _._content("b0", "y: <!>", "b%b", 0, $item_content__$params),
  $x__script = _._script("b1", ($scope) =>
    _._on($scope.b, "click", function () {
      $x($scope, !$scope.c);
    }),
  ),
  $x = _._let(2, ($scope) => {
    let $item;
    ($scope.c && ($item = _.attrTag({ content: $item_content($scope) })),
      (($scope, input_item) => {
        $dynamicTag($scope, input_item, () => [1]);
      })($scope.a, $item),
      $x__script($scope));
  });
init();
