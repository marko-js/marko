// size: 249 (min) 168 (brotli)
const $if_content__message_text = _._if_closure(1, 0, ($scope) =>
    _._text($scope[0], $scope._[3]),
  ),
  $if_content__setup = $if_content__message_text,
  $if_content = _._content_branch(" ", " b", $if_content__setup),
  $message = _._let(2, ($scope) => $message_text($scope, $scope[2]?.text)),
  $message_text = _._const(3, $if_content__message_text),
  $if = _._if(1, $if_content),
  $show = _._let(4, ($scope) => $if($scope, $scope[4] ? 0 : 1));
(_._script("a0", ($scope) =>
  _._on($scope[0], "click", function () {
    ($message($scope, null), $show($scope, !1));
  }),
),
  init());
