// size: 216 (min) 138 (brotli)
const $clickCount_effect = _$.effect("a0", ($scope, { 4: clickCount }) =>
    _$.on($scope[0], "click", function () {
      const last = $lastCount(
        $scope,
        ($clickCount($scope, ++clickCount), clickCount - 1),
      );
      $lastCount2($scope, last);
    }),
  ),
  $clickCount = _$.state(4, ($scope, clickCount) => {
    (_$.data($scope[1], clickCount), $clickCount_effect($scope));
  }),
  $lastCount = _$.state(5, ($scope, lastCount) =>
    _$.data($scope[2], lastCount),
  ),
  $lastCount2 = _$.state(6, ($scope, lastCount2) =>
    _$.data($scope[3], lastCount2),
  );
init();
