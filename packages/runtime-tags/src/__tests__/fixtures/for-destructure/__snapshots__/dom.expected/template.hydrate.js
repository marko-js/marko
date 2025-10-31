// size: 454 (min) 250 (brotli)
const $for_content__name = _._const(4, ($scope) =>
    _._text($scope[0], $scope[4]),
  ),
  $for_content__description = _._const(5, ($scope) =>
    _._text($scope[1], $scope[5]),
  ),
  $for_content__$params = _._const(2, ($scope) =>
    $for_content__$temp($scope, $scope[2]?.[0]),
  ),
  $for_content__$temp = _._const(3, ($scope) => {
    ($for_content__name($scope, $scope[3].name),
      $for_content__description($scope, $scope[3].description));
  }),
  $for_content = _._content_branch(
    "<div><!>: <!></div>",
    "D%c%l",
    0,
    $for_content__$params,
  ),
  $for = _._for_of(0, $for_content),
  $items__script = _._script("a0", ($scope) => {
    (_._on($scope[1], "click", function () {
      $items($scope, [
        ...$scope[3],
        { name: "JavaScript", description: "Java, but scriptier" },
      ]);
    }),
      _._on($scope[2], "click", function () {
        $items($scope, $scope[3].slice(0, -1));
      }));
  }),
  $items = _._let(3, ($scope) => {
    ($for($scope, [$scope[3]]), $items__script($scope));
  });
init();
