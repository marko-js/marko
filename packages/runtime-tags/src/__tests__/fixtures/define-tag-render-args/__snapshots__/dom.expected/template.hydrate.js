// size: 157 (min) 113 (brotli)
const $MyTag_content__c = _._const(6, ($scope) => _._text($scope.c, $scope.g)),
  $x__script = _._script("a0", ($scope) =>
    _._on($scope.b, "click", function () {
      $x($scope, $scope.d + 1);
    }),
  ),
  $x = _._let(3, ($scope) => {
    ($MyTag_content__c($scope.a, $scope.d),
      _._text($scope.c, $scope.d),
      $x__script($scope));
  });
init();
