// size: 313 (min) 205 (brotli)
const $dynamicTag = _._dynamic_tag(0, 0, 0, 1),
  $input_item = _._const(3, ($scope) =>
    $dynamicTag($scope, $scope[3], () => [1]),
  ),
  $item_content__y = _._const(2, ($scope) => _._text($scope[0], $scope[2])),
  $item_content__$params = _._const(1, ($scope) =>
    $item_content__y($scope, $scope[1][0]),
  ),
  $item_content = _._content("b0", "y: <!>", "b%b", 0, $item_content__$params),
  $x__script = _._script("b1", ($scope) =>
    _._on($scope[1], "click", function () {
      $x($scope, !$scope[2]);
    }),
  ),
  $x = _._let(2, ($scope) => {
    let $item;
    ($scope[2] && ($item = _.attrTag({ content: $item_content($scope) })),
      $input_item($scope[0], $item),
      $x__script($scope));
  });
init();
