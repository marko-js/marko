// size: 292 (min) 197 (brotli)
const $for_content__item = _._const(2, ($scope) => _._text($scope.a, $scope.c)),
  $for_content__$params = _._const(1, ($scope) =>
    $for_content__item($scope, $scope.b[0]),
  ),
  $getul = _._el("a0", 1),
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
  $getul($scope)().classList.add("attached");
}),
  init());
