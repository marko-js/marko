// size: 165 (min) 121 (brotli)
const $MyTag_content__c = _._const(6, ($scope) =>
    _._text($scope[2], $scope[6]),
  ),
  $x__script = _._script("a0", ($scope) =>
    _._on($scope[1], "click", function () {
      $x($scope, $scope[3] + 1);
    }),
  ),
  $x = _._let(3, ($scope) => {
    ($MyTag_content__c($scope[0], $scope[3]),
      _._text($scope[2], $scope[3]),
      $x__script($scope));
  });
init();
