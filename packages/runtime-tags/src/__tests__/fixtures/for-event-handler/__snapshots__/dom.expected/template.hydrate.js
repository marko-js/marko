// size: 301 (min) 194 (brotli)
const $i$for$content = _$.value(3, ($scope, i) => _$.data($scope[1], i)),
  $params2$for$content = _$.value(2, ($scope, $params2) =>
    $i$for$content($scope, $params2[0]),
  ),
  $num$for$content_effect = _$.effect("a0", ($scope, { _: { 1: num } }) =>
    _$.on($scope[0], "click", function () {
      $num($scope._, num + 1);
    }),
  ),
  $num$for$content = _$.loopClosure(1, 0, $num$for$content_effect),
  $for_content = _$.createRenderer(
    "<button> </button>",
    " D ",
    0,
    $params2$for$content,
    ($scope) => $num$for$content._($scope),
  ),
  $for = _$.loopTo(0, $for_content),
  $num = _$.state(1, ($scope, num) => {
    $for($scope, [num, 0, 1]), $num$for$content($scope);
  });
init();
