// size: 301 (min) 202 (brotli)
const $if_content__setup = ($scope) => {
    $MyTag_content__setup._($scope[0], $scope._);
  },
  $if_content = _._content_branch(
    "<!><div> </div><!>",
    "b/D l&b",
    $if_content__setup,
  ),
  $MyTag_content__x = _._closure_get(4, ($scope, x) => _._text($scope[0], x)),
  $MyTag_content__setup = _._child_setup($MyTag_content__x),
  $if = _._if(1, $if_content),
  $x__closure = _._closure($MyTag_content__x),
  $x__script = _._script("a0", ($scope, { 4: x }) =>
    _._on($scope[2], "click", function () {
      $x($scope, ++x);
    }),
  ),
  $x = _._let(4, ($scope, x) => {
    (_._text($scope[3], x),
      $if($scope, 0),
      $x__closure($scope),
      $x__script($scope));
  });
init();
