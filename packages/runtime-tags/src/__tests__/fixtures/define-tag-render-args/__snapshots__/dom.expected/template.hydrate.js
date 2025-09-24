// size: 169 (min) 118 (brotli)
const $define_content__c = _._const(6, ($scope, c) => _._text($scope[2], c)),
  $x__script = _._script("a0", ($scope, { 3: x }) =>
    _._on($scope[1], "click", function () {
      $x($scope, ++x);
    }),
  ),
  $x = _._let(3, ($scope, x) => {
    ($define_content__c($scope[0], x),
      _._text($scope[2], x),
      $x__script($scope));
  });
init();
