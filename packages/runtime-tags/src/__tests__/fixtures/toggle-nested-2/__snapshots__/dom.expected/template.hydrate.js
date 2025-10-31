// size: 563 (min) 275 (brotli)
const $if_content2__count__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", function () {
      $count($scope._._, $scope._._[4] + 1);
    }),
  ),
  $if_content2__count = _._closure_get(
    4,
    ($scope) => {
      (_._text($scope[1], $scope._._[4]), $if_content2__count__script($scope));
    },
    ($scope) => $scope._._,
  ),
  $if_content2__setup = $if_content2__count,
  $if_content2 = _._content_branch(
    "<button id=count> </button>",
    " D l",
    $if_content2__setup,
  ),
  $if_content__if = _._if(1, $if_content2),
  $if_content__inner__script = _._script("a1", ($scope) =>
    _._on($scope[0], "click", function () {
      $inner($scope._, !$scope._[3]);
    }),
  ),
  $if_content__inner = _._if_closure(1, 0, ($scope) => {
    ($if_content__if($scope, $scope._[3] ? 0 : 1),
      $if_content__inner__script($scope));
  }),
  $if_content__setup = $if_content__inner,
  $if_content = _._content_branch(
    "<button id=inner></button><!><!>",
    " b%c",
    $if_content__setup,
  ),
  $if = _._if(1, $if_content),
  $outer__script = _._script("a2", ($scope) =>
    _._on($scope[0], "click", function () {
      $outer($scope, !$scope[2]);
    }),
  ),
  $outer = _._let(2, ($scope) => {
    ($if($scope, $scope[2] ? 0 : 1), $outer__script($scope));
  }),
  $inner = _._let(3, $if_content__inner),
  $count__closure = _._closure($if_content2__count),
  $count = _._let(4, $count__closure);
init();
