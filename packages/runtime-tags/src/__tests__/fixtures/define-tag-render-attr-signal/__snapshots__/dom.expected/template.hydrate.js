// size: 362 (min) 223 (brotli)
const $define_content__number = _._const(3, ($scope, number) =>
    _._text($scope[0], number),
  ),
  $define_content__$params = _._const(1, ($scope, $params2) =>
    $define_content__$temp($scope, $params2?.[0]),
  ),
  $define_content__$temp = _._const(2, ($scope, $temp) =>
    $define_content__number($scope, $temp.number),
  );
_._content_resume("a0", "<div> </div>", "D l", 0, $define_content__$params);
const $dynamicTag = _._dynamic_tag(0),
  $x__OR__MyTag = _._or(5, ($scope) => {
    let { 3: x, 4: MyTag } = $scope;
    $dynamicTag($scope, MyTag, () => ({ number: x }));
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
