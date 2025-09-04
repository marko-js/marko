// size: 442 (min) 252 (brotli)
const $define_content__a = _._const(4, ($scope, a) => _._text($scope[0], a)),
  $define_content__b = _._const(5, ($scope, b) => _._text($scope[1], b)),
  $define_content__c = _._const(6, ($scope, c) => _._text($scope[2], c)),
  $define_content__$params = _._const(3, ($scope, $params2) => {
    ($define_content__a($scope, $params2[0]),
      $define_content__b($scope, $params2[1]),
      $define_content__c($scope, $params2[2]));
  });
_._content_resume(
  "a0",
  "<div><!>|<!>|<!></div>",
  "D%c%c%l",
  0,
  $define_content__$params,
);
const $dynamicTag = _._dynamic_tag(0, 0, 0, 1),
  $x__OR__MyTag = _._or(5, ($scope) => {
    let { 3: x, 4: MyTag } = $scope;
    $dynamicTag($scope, MyTag, () => [1, "Hello", x]);
  }),
  $x__script = _._script("a1", ($scope, { 3: x }) =>
    _._on($scope[1], "click", function () {
      $x($scope, ++x);
    }),
  ),
  $x = _._let(3, ($scope, x) => {
    (_._text($scope[2], x), $x__OR__MyTag($scope), $x__script($scope));
  });
init();
