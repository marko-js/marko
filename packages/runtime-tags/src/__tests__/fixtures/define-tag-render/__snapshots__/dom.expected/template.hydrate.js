// size: 129 (min) 112 (brotli)
const $MyTag_content__y__script = _._script("a0", ($scope) =>
    _._on($scope.c, "click", function () {
      $MyTag_content__y($scope, $scope.h + 1);
    }),
  ),
  $MyTag_content__y = _._let(7, ($scope) => {
    (_._text($scope.b, $scope.h),
      _._text($scope.d, $scope.h),
      $MyTag_content__y__script($scope));
  });
init();
