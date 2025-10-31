// size: 325 (min) 218 (brotli)
const $for_content__item = _._const(2, ($scope) =>
    _._text($scope[0], $scope[2]),
  ),
  $for_content__$params = _._const(1, ($scope) =>
    $for_content__item($scope, $scope[1][0]),
  ),
  $for_content = _._content_branch(
    "<li> </li>",
    "D l",
    0,
    $for_content__$params,
  ),
  $getul = _._el("a0", "j1"),
  $for = _._for_of(1, $for_content),
  $items__script = _._script("a1", ($scope) =>
    _._on($scope[0], "click", function () {
      $items($scope, [...$scope[2], $scope[2]?.length]);
    }),
  ),
  $items = _._let(2, ($scope) => {
    ($for($scope, [$scope[2]]), $items__script($scope));
  });
(_._script("a2", ($scope) => {
  $getul($scope)().classList.add("attached");
}),
  init());
