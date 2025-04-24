// size: 631 (min) 307 (brotli)
const $count$if$content_effect = _$.effect(
    "a0",
    (
      $scope,
      {
        _: {
          _: { 4: count },
        },
      },
    ) =>
      _$.on($scope[0], "click", function () {
        $count($scope._._, count + 1);
      }),
  ),
  $count$if$content = _$.dynamicClosureRead(
    4,
    ($scope, count) => {
      _$.data($scope[1], count), $count$if$content_effect($scope);
    },
    ($scope) => $scope._._,
  ),
  $if_content2 = _$.createRenderer(
    "<button id=count> </button>",
    " D ",
    0,
    0,
    $count$if$content,
  ),
  $if$if$content = _$.conditional(1, $if_content2),
  $inner$if$content_effect = _$.effect("a1", ($scope, { _: { 3: inner } }) =>
    _$.on($scope[0], "click", function () {
      $inner($scope._, !inner);
    }),
  ),
  $inner$if$content = _$.conditionalClosure(3, 1, 0, ($scope, inner) => {
    $if$if$content($scope, inner ? 0 : 1), $inner$if$content_effect($scope);
  }),
  $if_content = _$.createRenderer(
    "<button id=inner></button><!><!>",
    " b%D",
    0,
    0,
    $inner$if$content,
  ),
  $if = _$.conditional(1, $if_content),
  $outer_effect = _$.effect("a2", ($scope, { 2: outer }) =>
    _$.on($scope[0], "click", function () {
      $outer($scope, !outer);
    }),
  ),
  $outer = _$.state(2, ($scope, outer) => {
    $if($scope, outer ? 0 : 1), $outer_effect($scope);
  }),
  $inner = _$.state(3, $inner$if$content),
  $count_closure = _$.dynamicClosure($count$if$content),
  $count = _$.state(4, $count_closure);
init();
