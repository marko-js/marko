// size: 218 (min) 148 (brotli)
const $clickCount__script = _._script("a0", ($scope, { 4: clickCount }) =>
    _._on($scope[0], "click", function () {
      const last = $lastCount(
        $scope,
        ($clickCount($scope, ++clickCount), clickCount - 1),
      );
      $lastCount2($scope, last);
    }),
  ),
  $clickCount = _._let(4, ($scope, clickCount) => {
    (_._text($scope[1], clickCount), $clickCount__script($scope));
  }),
  $lastCount = _._let(5, ($scope, lastCount) => _._text($scope[2], lastCount)),
  $lastCount2 = _._let(6, ($scope, lastCount2) =>
    _._text($scope[3], lastCount2),
  );
init();
