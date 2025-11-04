// size: 305 (min) 208 (brotli)
const $dynamicTag = _._dynamic_tag(0, 0, 0, 1),
  $input_item = _._const(3, ($scope) =>
    $dynamicTag($scope, $scope.d, () => [1]),
  ),
  $item_content__y = _._const(2, ($scope) => _._text($scope.a, $scope.c)),
  $item_content__$params = _._const(1, ($scope) =>
    $item_content__y($scope, $scope.b[0]),
  ),
  $item_content = _._content("b0", "y: <!>", "b%b", 0, $item_content__$params),
  $x__script = _._script("b1", ($scope) =>
    _._on($scope.b, "click", function () {
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
