// size: 252 (min) 173 (brotli)
const $if_content__message = _._if_closure(3, 1, 0, ($scope, message) =>
    _._text($scope[0], message),
  ),
  $if_content__setup = $if_content__message,
  $if_content = _._content_branch("<span> </span>", "D l", $if_content__setup),
  $if = _._if(1, $if_content),
  $show__script = _._script("a0", ($scope, { 2: show }) =>
    _._on($scope[0], "click", function () {
      ($message($scope, "bye"), $show($scope, (show = !show)));
    }),
  ),
  $show = _._let(2, ($scope, show) => {
    ($if($scope, show ? 0 : 1), $show__script($scope));
  }),
  $message = _._let(3, $if_content__message);
init();
