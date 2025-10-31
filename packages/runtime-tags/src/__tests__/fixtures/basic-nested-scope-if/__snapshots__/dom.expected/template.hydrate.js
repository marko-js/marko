// size: 372 (min) 227 (brotli)
const $else_content__clickCount = _._if_closure(0, 1, ($scope) =>
    _._text($scope[0], $scope._[1]),
  ),
  $else_content__setup = $else_content__clickCount,
  $else_content = _._content_branch(
    "<span>The button was clicked <!> times.</span>",
    "Db%l",
    $else_content__setup,
  ),
  $if_content__clickCount__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", function () {
      $clickCount($scope._, $scope._[1] + 1);
    }),
  ),
  $if_content__clickCount = _._if_closure(0, 0, ($scope) => {
    (_._text($scope[1], $scope._[1]), $if_content__clickCount__script($scope));
  }),
  $if_content__setup = $if_content__clickCount,
  $if_content = _._content_branch(
    "<button> </button>",
    " D l",
    $if_content__setup,
  ),
  $if = _._if(0, $if_content, $else_content),
  $clickCount = _._let(1, ($scope) => {
    ($if($scope, $scope[1] < 3 ? 0 : 1),
      $if_content__clickCount($scope),
      $else_content__clickCount($scope));
  });
init();
