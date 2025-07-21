// size: 615 (min) 298 (brotli)
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
        $count($scope._._, ++count);
      }),
  ),
  $count$if$content = _$.dynamicClosureRead(
    4,
    ($scope, count) => {
      (_$.data($scope[1], count), $count$if$content_effect($scope));
    },
    ($scope) => $scope._._,
  ),
  $setup$if$content = $count$if$content,
  $if_content2 = _$.createRenderer(
    "<button id=count> </button>",
    " D ",
    $setup$if$content,
  ),
  $if$if$content = _$.conditional(1, $if_content2),
  $inner$if$content_effect = _$.effect("a1", ($scope, { _: { 3: inner } }) =>
    _$.on($scope[0], "click", function () {
      $inner($scope._, (inner = !inner));
    }),
  ),
  $inner$if$content = _$.conditionalClosure(3, 1, 0, ($scope, inner) => {
    ($if$if$content($scope, inner ? 0 : 1), $inner$if$content_effect($scope));
  }),
  $setup$if$content2 = $inner$if$content,
  $if_content = _$.createRenderer(
    "<button id=inner></button><!><!>",
    " b%D",
    $setup$if$content2,
  ),
  $if = _$.conditional(1, $if_content),
  $outer_effect = _$.effect("a2", ($scope, { 2: outer }) =>
    _$.on($scope[0], "click", function () {
      $outer($scope, (outer = !outer));
    }),
  ),
  $outer = _$.state(2, ($scope, outer) => {
    ($if($scope, outer ? 0 : 1), $outer_effect($scope));
  }),
  $inner = _$.state(3, $inner$if$content),
  $count_closure = _$.dynamicClosure($count$if$content),
  $count = _$.state(4, $count_closure);
init();
