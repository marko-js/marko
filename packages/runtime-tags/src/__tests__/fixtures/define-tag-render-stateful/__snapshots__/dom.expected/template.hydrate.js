// size: 438 (min) 261 (brotli)
const $define_content__name = _._const(4, ($scope, name) =>
    _._text($scope[0], name),
  ),
  $define_content__count = _._const(5, ($scope, count) =>
    _._text($scope[1], count),
  ),
  $define_content__$params = _._const(2, ($scope, $params2) =>
    $define_content__$temp($scope, $params2?.[0]),
  ),
  $define_content__$temp = _._const(3, ($scope, $temp) => {
    ($define_content__name($scope, $temp.name),
      $define_content__count($scope, $temp.count));
  });
_._content_resume(
  "a0",
  "<div>Hello <!> <!></div>",
  "Db%c%l",
  0,
  $define_content__$params,
);
const $dynamicTag = _._dynamic_tag(2),
  $count__OR__MyTag = _._or(5, ($scope) => {
    let { 3: count, 4: MyTag } = $scope;
    $dynamicTag($scope, MyTag, () => ({ name: "Ryan", count: count }));
  }),
  $count__script = _._script("a1", ($scope, { 3: count }) =>
    _._on($scope[0], "click", function () {
      $count($scope, ++count);
    }),
  ),
  $count = _._let(3, ($scope, count) => {
    (_._text($scope[1], count),
      $count__OR__MyTag($scope),
      $count__script($scope));
  });
init();
