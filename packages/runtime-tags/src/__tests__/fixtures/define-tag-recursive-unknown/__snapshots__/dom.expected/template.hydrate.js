// size: 406 (min) 257 (brotli)
const $else_content__input_message = _._if_closure(0, 1, ($scope) =>
    _._text($scope.a, JSON.stringify($scope._.e)),
  ),
  $else_content__setup = $else_content__input_message,
  $if_content__dynamicTag = _._dynamic_tag(0),
  $if_content__Foo__OR__input_bar = _._or(1, ($scope) =>
    $if_content__dynamicTag($scope, $scope._._.b, () => ({
      message: $scope._.d,
    })),
  ),
  $if_content__Foo = _._closure_get(
    1,
    $if_content__Foo__OR__input_bar,
    ($scope) => $scope._._,
  ),
  $if_content__input_bar = _._if_closure(0, 0, $if_content__Foo__OR__input_bar),
  $if_content__setup = ($scope) => {
    ($if_content__Foo($scope), $if_content__input_bar._($scope));
  },
  $Foo_content__if = _._if(
    0,
    "<!><!><!>",
    "b%c",
    $if_content__setup,
    " ",
    " b",
    $else_content__setup,
  ),
  $Foo_content__input_bar = _._const(3, ($scope) => {
    ($Foo_content__if($scope, $scope.d ? 0 : 1),
      $if_content__input_bar($scope));
  }),
  $Foo_content__tag_input_message = _._const(4, $else_content__input_message),
  $Foo_content__input = ($scope, input) => {
    ($Foo_content__input_bar($scope, input?.bar),
      $Foo_content__tag_input_message($scope, input?.message));
  };
_._content_resume("a0", "<!><!><!>", "b%c", 0, ($scope, $params2) =>
  $Foo_content__input($scope, $params2[0]),
);
