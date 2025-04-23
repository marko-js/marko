// size: 283 (min) 183 (brotli)
const $message_text$if$content = _$.conditionalClosure(
    3,
    1,
    0,
    ($scope, message_text) => _$.data($scope[0], message_text),
  ),
  $if_content = _$.createRenderer(" ", " ", 0, 0, ($scope) =>
    $message_text$if$content._($scope),
  ),
  $message = _$.state(2, ($scope, message) =>
    $message_text($scope, message?.text),
  ),
  $message_text = _$.value(3, $message_text$if$content),
  $if = _$.conditional(1, $if_content),
  $show = _$.state(4, ($scope, show) => $if($scope, show ? 0 : 1));
_$.effect("a0", ($scope) =>
  _$.on($scope[0], "click", function () {
    $message($scope, null), $show($scope, !1);
  }),
),
  init();
