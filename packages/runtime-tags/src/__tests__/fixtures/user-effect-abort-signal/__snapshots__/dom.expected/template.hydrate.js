// size: 162 (min) 131 (brotli)
const $a = _._let(5, ($scope, a) => _._text($scope[0], a)),
  $b = _._let(6, ($scope, b) => _._text($scope[1], b));
(_._script("a0", ($scope, { 4: input_value }) => {
  {
    const previousValue = $a($scope, input_value + 1);
    _.$signal($scope, 0).onabort = () => $b($scope, previousValue);
  }
}),
  init());
