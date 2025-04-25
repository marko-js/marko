// size: 985 (min) 472 (brotli)
const $expr_name_write_effect = _$.effect(
    "a0",
    ($scope, { 3: name, 4: write }) =>
      (_$.getAbortSignal($scope, 0).onabort = () => {
        write(`destroyed ${name}`);
      }),
  ),
  $expr_name_write = _$.intersection(5, ($scope) => {
    _$.resetAbortSignal($scope, 0), $expr_name_write_effect($scope);
  }),
  $name = _$.value(3, ($scope, name) => {
    _$.data($scope[0], name), $expr_name_write($scope);
  }),
  $write$1 = _$.value(4, $expr_name_write),
  $setup$for$content2 = ($scope) => {
    $scope[0], $outerItem$for$content2._($scope), $write$for$content2($scope);
  },
  $write$for$content2 = _$.dynamicClosureRead(
    4,
    ($scope, write) => $write$1($scope[0], write),
    ($scope) => $scope._._,
  ),
  $expr_outerItem_middleItem$for$content = _$.intersection(3, ($scope) => {
    const {
      _: { 3: outerItem },
      2: middleItem,
    } = $scope;
    $name($scope[0], `${outerItem}.${middleItem}`);
  }),
  $outerItem$for$content2 = _$.loopClosure(
    3,
    1,
    $expr_outerItem_middleItem$for$content,
  ),
  $middleItem$for$content = _$.value(2, $expr_outerItem_middleItem$for$content),
  $params3$for$content = _$.value(1, ($scope, $params3) =>
    $middleItem$for$content($scope, $params3[0]),
  ),
  $for_content2 = _$.createRenderer(
    "<div><div> </div></div>",
    "D/D l&",
    $setup$for$content2,
    $params3$for$content,
  ),
  $setup$for$content = ($scope) => {
    $scope[0], $items$for$content._($scope), $write$for$content._($scope);
  },
  $write$for$content = _$.loopClosure(4, 2, ($scope, write) =>
    $write$1($scope[0], write),
  ),
  $outerItem$for$content = _$.value(3, ($scope, outerItem) => {
    $name($scope[0], `${outerItem}`), $outerItem$for$content2($scope);
  }),
  $for$for$content = _$.loopOf(1, $for_content2),
  $items$for$content = _$.loopClosure(3, 2, ($scope, items) =>
    $for$for$content($scope, [items]),
  ),
  $params2$for$content = _$.value(2, ($scope, $params2) =>
    $outerItem$for$content($scope, $params2[0]),
  ),
  $for_content = _$.createRenderer(
    "<div><div> </div><!></div>",
    "D/D l&%",
    $setup$for$content,
    $params2$for$content,
  ),
  $for = _$.loopOf(2, $for_content),
  $items_effect = _$.effect("b1", ($scope, { 3: items }) =>
    _$.on($scope[0], "click", function () {
      $items($scope, items.length ? items.slice(0, -1) : [1, 2, 3]);
    }),
  ),
  $items = _$.state(3, ($scope, items) => {
    $for($scope, [items]), $items$for$content($scope), $items_effect($scope);
  });
_$.register("b0", function ($scope) {
  return function (msg) {
    $scope[1].innerHTML += "\n" + msg;
  };
}),
  init();
