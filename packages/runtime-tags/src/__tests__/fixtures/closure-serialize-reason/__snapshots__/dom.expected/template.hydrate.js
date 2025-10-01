// size: 285 (min) 188 (brotli)
const $if_content__setup = _._if_closure(7, 0, 0, ($scope, getMessage) =>
    _._text($scope[0], getMessage()),
  ),
  $if_content = _._content_branch("<span> </span>", "D l", $if_content__setup),
  $if = _._if(0, $if_content),
  $x__script = _._script("a1", ($scope, { 6: x }) =>
    _._on($scope[1], "click", function () {
      $x($scope, ++x);
    }),
  ),
  $x = _._let(6, ($scope, x) => {
    (_._text($scope[2], x), $if($scope, x ? 0 : 1), $x__script($scope));
  });
(_._resume("a0", function ({ 5: input_message }) {
  return () => input_message;
}),
  init());
