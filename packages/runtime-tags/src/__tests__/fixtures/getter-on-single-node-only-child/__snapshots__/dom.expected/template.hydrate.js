// size: 270 (min) 184 (brotli)
const $for_content__$params = ($scope, $params2) =>
    (($scope, item) => _._text($scope.a, item))($scope, $params2[0]),
  $ul_getter = _._el("a0", 1),
  $for = _._for_of(1, "<li> </li>", "D l", 0, $for_content__$params),
  $items__script = _._script("a1", ($scope) =>
    _._on($scope.a, "click", function () {
      $items($scope, [...$scope.c, $scope.c?.length]);
    }),
  ),
  $items = _._let(2, ($scope) => {
    ($for($scope, [$scope.c]), $items__script($scope));
  });
(_._script("a2", ($scope) => {
  $ul_getter($scope)().classList.add("attached");
}),
  init());
