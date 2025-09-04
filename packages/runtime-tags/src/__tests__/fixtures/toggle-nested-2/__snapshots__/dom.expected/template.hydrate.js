// size: 587 (min) 285 (brotli)
const $if_content2__count__script = _._script(
    "a0",
    (
      $scope,
      {
        _: {
          _: { 4: count },
        },
      },
    ) =>
      _._on($scope[0], "click", function () {
        $count($scope._._, ++count);
      }),
  ),
  $if_content2__count = _._closure_get(
    4,
    ($scope, count) => {
      (_._text($scope[1], count), $if_content2__count__script($scope));
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
  $if_content__inner__script = _._script("a1", ($scope, { _: { 3: inner } }) =>
    _._on($scope[0], "click", function () {
      $inner($scope._, (inner = !inner));
    }),
  ),
  $if_content__inner = _._if_closure(3, 1, 0, ($scope, inner) => {
    ($if_content__if($scope, inner ? 0 : 1),
      $if_content__inner__script($scope));
  }),
  $if_content__setup = $if_content__inner,
  $if_content = _._content_branch(
    "<button id=inner></button><!><!>",
    " b%c",
    $if_content__setup,
  ),
  $if = _._if(1, $if_content),
  $outer__script = _._script("a2", ($scope, { 2: outer }) =>
    _._on($scope[0], "click", function () {
      $outer($scope, (outer = !outer));
    }),
  ),
  $outer = _._let(2, ($scope, outer) => {
    ($if($scope, outer ? 0 : 1), $outer__script($scope));
  }),
  $inner = _._let(3, $if_content__inner),
  $count__closure = _._closure($if_content2__count),
  $count = _._let(4, $count__closure);
init();
