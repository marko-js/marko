// size: 377 (min) 219 (brotli)
const $for_content__$params = ($scope, $params2) =>
    $for_content__$temp($scope, $params2?.[0]),
  $for_content__$temp = ($scope, $temp) => {
    ((($scope, name) => {
      _._text($scope.a, name);
    })($scope, $temp.name),
      (($scope, description) => {
        _._text($scope.b, description);
      })($scope, $temp.description));
  },
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
