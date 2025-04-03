// size: 638 (min) 349 (brotli)
const $expr_name_write_effect = _$.effect(
    "a0",
    ($scope, { 3: name, 4: write }) => {
      write(`mounted ${name}`),
        (_$.getAbortSignal($scope, 0).onabort = () => {
          write(`destroyed ${name}`);
        });
    },
  ),
  $expr_name_write = _$.intersection(5, ($scope) => {
    _$.resetAbortSignal($scope, 0), $expr_name_write_effect($scope);
  }),
  $write$1 = _$.value(4, $expr_name_write),
  $name = _$.value(3, ($scope, name) => {
    _$.data($scope[0], name), $expr_name_write($scope);
  }),
  $write$for$content = _$.loopClosure(4, 2, ($scope, write) =>
    $write$1($scope[0], write),
  ),
  $item$for$content = _$.value(2, ($scope, item) => $name($scope[0], item)),
  $params2$for$content = _$.value(1, ($scope, $params2) =>
    $item$for$content($scope, $params2[0]),
  ),
  $setup$for$content = ($scope) => {
    $scope[0];
  },
  $for_content = _$.createRenderer(
    "<div> </div>",
    "/D l&",
    $setup$for$content,
    $params2$for$content,
    ($scope) => $write$for$content._($scope),
  ),
  $for = _$.loopOf(2, $for_content),
  $items_effect = _$.effect("b1", ($scope, { 3: items }) =>
    _$.on($scope[0], "click", function () {
      $items($scope, items.length ? items.slice(0, -1) : [1, 2, 3]);
    }),
  ),
  $items = _$.state(3, ($scope, items) => {
    $for($scope, [items]), $items_effect($scope);
  });
_$.register("b0", function ($scope) {
  return function (msg) {
    $scope[1].innerHTML += "\n" + msg;
  };
}),
  init();
