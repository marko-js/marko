// size: 221 (min) 164 (brotli)
const $if_content__message_text = _._if_closure(1, 0, ($scope) =>
    _._text($scope.a, $scope._.d),
  ),
  $if_content__setup = $if_content__message_text,
  $message = _._let(2, ($scope) => $message_text($scope, $scope.c?.text)),
  $message_text = _._const(3, $if_content__message_text),
  $if = _._if(1, " ", " b", $if_content__setup),
  $show = _._let(4, ($scope) => $if($scope, $scope.e ? 0 : 1));
(_._script("a0", ($scope) =>
  _._on($scope.a, "click", function () {
    ($message($scope, null), $show($scope, !1));
  }),
),
  init());
