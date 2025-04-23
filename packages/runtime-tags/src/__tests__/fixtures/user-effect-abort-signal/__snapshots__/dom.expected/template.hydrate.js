// size: 174 (min) 130 (brotli)
const $a = _$.state(5, ($scope, a) => _$.data($scope[0], a)),
  $b = _$.state(6, ($scope, b) => _$.data($scope[1], b));
_$.effect("a0", ($scope, { 4: input_value }) => {
  {
    const previousValue = $a($scope, input_value + 1);
    _$.getAbortSignal($scope, 0).onabort = () => $b($scope, previousValue);
  }
}),
  init();
