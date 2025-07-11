// size: 526 (min) 319 (brotli)
const $name = _$.value(3, ($scope, name) => _$.data($scope[0], name)),
  $setup$for$content = ($scope) => {
    ($scope[0], $outer$for$content._($scope));
  },
  $expr_outer_inner$for$content = _$.intersection(3, ($scope) => {
    const {
      _: { 2: outer },
      2: inner,
    } = $scope;
    $name($scope[0], `${outer}.${inner}`);
  }),
  $outer$for$content = _$.loopClosure(2, 0, $expr_outer_inner$for$content),
  $inner$for$content = _$.value(2, $expr_outer_inner$for$content),
  $params3$for$content = _$.value(1, ($scope, $params3) =>
    $inner$for$content($scope, $params3[0]),
  ),
  $for_content2 = _$.createRenderer(
    "<div> </div>",
    "/D l&",
    $setup$for$content,
    $params3$for$content,
  ),
  $for$for$content = _$.loopOf(0, $for_content2),
  $items$for$content = _$.loopClosure(2, 1, ($scope, items) =>
    $for$for$content($scope, [items]),
  ),
  $setup$for$content2 = $items$for$content,
  $params2$for$content = _$.value(1, ($scope, $params2) =>
    $outer$for$content2($scope, $params2[0]),
  ),
  $outer$for$content2 = _$.value(2, $outer$for$content),
  $for_content = _$.createRenderer(
    "<!><!><!>",
    "D%D",
    $setup$for$content2,
    $params2$for$content,
  ),
  $for = _$.loopOf(1, $for_content),
  $items_effect = _$.effect("b0", ($scope, { 2: items }) =>
    _$.on($scope[0], "click", function () {
      $items($scope, [...items, items.length]);
    }),
  ),
  $items = _$.state(2, ($scope, items) => {
    ($for($scope, [items]), $items$for$content($scope), $items_effect($scope));
  });
init();
