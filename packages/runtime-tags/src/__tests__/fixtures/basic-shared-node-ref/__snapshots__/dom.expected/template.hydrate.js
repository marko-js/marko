// size: 392 (min) 227 (brotli)
const $for_content__x = _._const(2, ($scope) => _._text($scope[0], $scope[2])),
  $for_content__$params = _._const(1, ($scope) =>
    $for_content__x($scope, $scope[1][0]),
  ),
  $for_content = _._content_branch(
    "<li> </li>",
    "D l",
    0,
    $for_content__$params,
  ),
  $open__script = _._script("a0", ($scope) =>
    _._on($scope[1], "click", function () {
      $open($scope, !$scope[3]);
    }),
  ),
  $open = _._let(3, ($scope) => {
    (_._attr($scope[0], "hidden", !$scope[3]), $open__script($scope));
  }),
  $for = _._for_of(0, $for_content),
  $list__script = _._script("a1", ($scope) =>
    _._on($scope[2], "click", function () {
      $list($scope, [].concat($scope[4]).reverse());
    }),
  ),
  $list = _._let(4, ($scope) => {
    ($for($scope, [
      $scope[4],
      function (x) {
        return x;
      },
    ]),
      $list__script($scope));
  });
init();
