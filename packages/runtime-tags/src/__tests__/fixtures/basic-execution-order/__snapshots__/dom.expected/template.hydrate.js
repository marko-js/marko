// size: 252 (min) 171 (brotli)
const $if_content__message_text = _._if_closure(
    3,
    1,
    0,
    ($scope, message_text) => _._text($scope[0], message_text),
  ),
  $if_content__setup = $if_content__message_text,
  $if_content = _._content_branch(" ", " b", $if_content__setup),
  $message = _._let(2, ($scope, message) =>
    $message_text($scope, message?.text),
  ),
  $message_text = _._const(3, $if_content__message_text),
  $if = _._if(1, $if_content),
  $show = _._let(4, ($scope, show) => $if($scope, show ? 0 : 1));
(_._script("a0", ($scope) =>
  _._on($scope[0], "click", function () {
    ($message($scope, null), $show($scope, !1));
  }),
),
  init());
