// size: 244 (min) 173 (brotli)
const $if_content = _._content_branch("<span></span>", "b"),
  $if = _._if(0, $if_content),
  $input_value = _._const(3, ($scope, input_value) =>
    $if($scope, input_value ? 0 : 1),
  ),
  $count__script = _._script("b0", ($scope, { 4: count }) =>
    _._on($scope[0], "click", function () {
      $count($scope, ++count);
    }),
  ),
  $count = _._let(4, ($scope, count) => {
    (_._text($scope[1], count),
      $input_value($scope[2], count),
      $count__script($scope));
  });
(_._var_resume("b1", ($scope) => {}), init());
