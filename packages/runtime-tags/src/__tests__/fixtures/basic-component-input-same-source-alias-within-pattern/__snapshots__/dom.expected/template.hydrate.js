// size: 393 (min) 210 (brotli)
const $onClick__script = _._script("a0", ($scope, { 5: onClick }) =>
    _._on($scope[0], "click", onClick),
  ),
  $onClick$1 = _._const(5, $onClick__script),
  $text = _._const(7, ($scope, text) => {
    (_._text($scope[1], text), $textAlias($scope, text));
  }),
  $textAlias = ($scope, textAlias) => {
    _._text($scope[2], textAlias);
  },
  $value2 = _._const(6, ($scope, $value) => $text($scope, $value.text)),
  $clickCount = _._let(2, ($scope, clickCount) => {
    ($value2($scope[0], { text: clickCount }),
      $onClick$1($scope[0], $onClick($scope)),
      $text($scope[1], clickCount),
      $onClick$1($scope[1], $onClick2($scope)));
  });
function $onClick2($scope, { 2: clickCount } = $scope) {
  return function () {
    $clickCount($scope, ++clickCount);
  };
}
function $onClick($scope, { 2: clickCount } = $scope) {
  return function () {
    $clickCount($scope, ++clickCount);
  };
}
(_._resume("b1", $onClick2), _._resume("b0", $onClick), init());
