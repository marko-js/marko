// size: 293 (min) 200 (brotli)
const $num$for$content_effect = _$.effect("a0", ($scope, { _: { 1: num } }) =>
    _$.on($scope[0], "click", function () {
      $num($scope._, num + 1);
    }),
  ),
  $num$for$content = _$.loopClosure(1, 0, $num$for$content_effect),
  $i$for$content = _$.value(3, ($scope, i) => _$.data($scope[1], i)),
  $setup$for$content = $num$for$content,
  $params2$for$content = _$.value(2, ($scope, $params2) =>
    $i$for$content($scope, $params2[0]),
  ),
  $for_content = _$.createRenderer(
    "<button> </button>",
    " D ",
    $setup$for$content,
    $params2$for$content,
  ),
  $for = _$.loopTo(0, $for_content),
  $num = _$.state(1, ($scope, num) => {
    $for($scope, [num, 0, 1]), $num$for$content($scope);
  });
init();
