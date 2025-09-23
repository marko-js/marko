// size: 494 (min) 282 (brotli)
const $define_content__value = _._const(3, ($scope, value) =>
    _._text($scope[0], value),
  ),
  $define_content__setup = _._child_setup(),
  $define_content__$params = _._const(1, ($scope, $params2) =>
    $define_content__$temp($scope, $params2?.[0]),
  ),
  $define_content__$temp = _._const(2, ($scope, $temp) =>
    $define_content__value($scope, $temp.value),
  );
_._content_resume(
  "a0",
  "<div>Hello <!></div>",
  "Db%l",
  $define_content__setup,
  $define_content__$params,
);
const $if_content__setup = ($scope) => {
    ($define_content__setup($scope[0], $scope._), $if_content__x._($scope));
  },
  $if_content__x = _._if_closure(4, 0, 0, ($scope, x) =>
    $define_content__value($scope[0], x),
  ),
  $if_content = _._content_branch(
    "<!><div>Hello <!></div><!>",
    "b/Db%l&b",
    $if_content__setup,
  ),
  $if = _._if(0, $if_content),
  $show = _._let(3, ($scope, show) => $if($scope, show ? 0 : 1)),
  $x__script = _._script("a1", ($scope, { 4: x }) =>
    _._on($scope[1], "click", function () {
      ($x($scope, ++x), $show($scope, !0));
    }),
  ),
  $x = _._let(4, ($scope, x) => {
    (_._text($scope[2], x), $if_content__x($scope), $x__script($scope));
  });
init();
