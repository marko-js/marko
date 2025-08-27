// size: 402 (min) 226 (brotli)
const $x$for$content = _$.value(2, ($scope, x) => _$.data($scope[0], x)),
  $params2$for$content = _$.value(1, ($scope, $params2) =>
    $x$for$content($scope, $params2[0]),
  ),
  $for_content = _$.createRenderer(
    "<li> </li>",
    "D l",
    0,
    $params2$for$content,
  ),
  $open_effect = _$.effect("a0", ($scope, { 3: open }) =>
    _$.on($scope[1], "click", function () {
      $open($scope, (open = !open));
    }),
  ),
  $open = _$.state(3, ($scope, open) => {
    (_$.attr($scope[0], "hidden", !open), $open_effect($scope));
  }),
  $for = _$.loopOf(0, $for_content),
  $list_effect = _$.effect("a1", ($scope, { 4: list }) =>
    _$.on($scope[2], "click", function () {
      $list($scope, (list = [].concat(list).reverse()));
    }),
  ),
  $list = _$.state(4, ($scope, list) => {
    ($for($scope, [
      list,
      function (x) {
        return x;
      },
    ]),
      $list_effect($scope));
  });
init();
