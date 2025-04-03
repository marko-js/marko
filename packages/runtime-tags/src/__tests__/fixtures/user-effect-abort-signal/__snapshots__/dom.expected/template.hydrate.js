// size: 174 (min) 142 (brotli)
const $b = _$.state(6, ($scope, b) => _$.data($scope[1], b)),
  $a = _$.state(5, ($scope, a) => _$.data($scope[0], a));
_$.effect("a0", ($scope, { 4: input_value }) => {
  {
    const previousValue = $a($scope, input_value + 1);
    _$.getAbortSignal($scope, 0).onabort = () => $b($scope, previousValue);
  }
}),
  init();
