// size: 224 (min) 136 (brotli)
const $lastCount2 = _$.state(6, ($scope, lastCount2) =>
    _$.data($scope[3], lastCount2),
  ),
  $lastCount = _$.state(5, ($scope, lastCount) =>
    _$.data($scope[2], lastCount),
  ),
  $clickCount_effect = _$.effect("a0", ($scope, { 4: clickCount }) =>
    _$.on($scope[0], "click", function () {
      const last = $lastCount(
        $scope,
        ($clickCount($scope, clickCount + 1), clickCount),
      );
      $lastCount2($scope, last);
    }),
  ),
  $clickCount = _$.state(4, ($scope, clickCount) => {
    _$.data($scope[1], clickCount), $clickCount_effect($scope);
  });
init();
