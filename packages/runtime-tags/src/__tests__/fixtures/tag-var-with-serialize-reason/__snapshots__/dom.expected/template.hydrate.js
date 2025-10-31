// size: 240 (min) 174 (brotli)
const $if_content = _._content_branch("<span></span>", "b"),
  $if = _._if(0, $if_content),
  $input_value = _._const(3, ($scope) => $if($scope, $scope[3] ? 0 : 1)),
  $count__script = _._script("b0", ($scope) =>
    _._on($scope[0], "click", function () {
      $count($scope, $scope[4] + 1);
    }),
  ),
  $count = _._let(4, ($scope) => {
    (_._text($scope[1], $scope[4]),
      $input_value($scope[2], $scope[4]),
      $count__script($scope));
  });
(_._var_resume("b1", ($scope) => {}), init());
