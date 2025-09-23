// size: 352 (min) 225 (brotli)
const $if_content__setup = ($scope) => {
    $define_content__setup($scope[0], $scope._);
  },
  $if_content = _._content_branch(
    "<!><div> </div><!>",
    "b/D l&b",
    $if_content__setup,
  ),
  $define_content__x = _._closure_get(4, ($scope, x) => _._text($scope[0], x)),
  $define_content__setup = _._child_setup($define_content__x);
_._content_resume("a0", "<div> </div>", "D l", $define_content__setup);
const $if = _._if(1, $if_content),
  $x__closure = _._closure($define_content__x),
  $x__script = _._script("a1", ($scope, { 4: x }) =>
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
