// size: 419 (min) 228 (brotli)
const $for_content__name = _._const(4, ($scope) => _._text($scope.a, $scope.e)),
  $for_content__description = _._const(5, ($scope) =>
    _._text($scope.b, $scope.f),
  ),
  $for_content__$params = _._const(2, ($scope) =>
    $for_content__$temp($scope, $scope.c?.[0]),
  ),
  $for_content__$temp = _._const(3, ($scope) => {
    ($for_content__name($scope, $scope.d.name),
      $for_content__description($scope, $scope.d.description));
  }),
  $for = _._for_of(0, "<div><!>: <!></div>", "D%c%l", 0, $for_content__$params),
  $items__script = _._script("a0", ($scope) => {
    (_._on($scope.b, "click", function () {
      $items($scope, [
        ...$scope.d,
        { name: "JavaScript", description: "Java, but scriptier" },
      ]);
    }),
      _._on($scope.c, "click", function () {
        $items($scope, $scope.d.slice(0, -1));
      }));
  }),
  $items = _._let(3, ($scope) => {
    ($for($scope, [$scope.d]), $items__script($scope));
  });
init();
