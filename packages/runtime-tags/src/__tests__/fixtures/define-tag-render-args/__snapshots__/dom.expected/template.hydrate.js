// size: 384 (min) 207 (brotli)
const $define_content__a = _._const(4, ($scope, a) => _._text($scope[0], a)),
  $define_content__b = _._const(5, ($scope, b) => _._text($scope[1], b)),
  $define_content__c = _._const(6, ($scope, c) => _._text($scope[2], c)),
  $define_content__setup = _._child_setup(),
  $define_content__$params = _._const(3, ($scope, $params2) => {
    ($define_content__a($scope, $params2[0]),
      $define_content__b($scope, $params2[1]),
      $define_content__c($scope, $params2[2]));
  });
_._content_resume(
  "a0",
  "<div><!>|<!>|<!></div>",
  "D%c%c%l",
  $define_content__setup,
  $define_content__$params,
);
const $x__script = _._script("a1", ($scope, { 3: x }) =>
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
