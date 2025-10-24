// size: 937 (min) 445 (brotli)
const $name__OR__write__script = _._script(
    "a0",
    ($scope, { 3: name, 4: write }) =>
      (_.$signal($scope, 0).onabort = () => {
        write(`destroyed ${name}`);
      }),
  ),
  $name__OR__write = _._or(5, ($scope) => {
    (_.$signalReset($scope, 0), $name__OR__write__script($scope));
  }),
  $name = _._const(3, ($scope, name) => {
    (_._text($scope[0], name), $name__OR__write($scope));
  }),
  $write$1 = _._const(4, $name__OR__write),
  $for_content2__setup = ($scope) => {
    ($scope[0],
      $for_content2__write($scope),
      $for_content2__outerItem._($scope));
  },
  $for_content2__write = _._closure_get(
    4,
    ($scope, write) => $write$1($scope[0], write),
    ($scope) => $scope._._,
  ),
  $for_content2__outerItem__OR__middleItem = _._or(3, ($scope) => {
    let {
      _: { 3: outerItem },
      2: middleItem,
    } = $scope;
    $name($scope[0], `${outerItem}.${middleItem}`);
  }),
  $for_content2__outerItem = _._for_closure(
    3,
    1,
    $for_content2__outerItem__OR__middleItem,
  ),
  $for_content2__middleItem = _._const(
    2,
    $for_content2__outerItem__OR__middleItem,
  ),
  $for_content2__$params = _._const(1, ($scope, $params3) =>
    $for_content2__middleItem($scope, $params3[0]),
  ),
  $for_content2 = _._content_branch(
    "<div><div> </div></div>",
    "D/D l&l",
    $for_content2__setup,
    $for_content2__$params,
  ),
  $for_content__setup = ($scope) => {
    ($scope[0], $for_content__items._($scope), $for_content__write._($scope));
  },
  $for_content__write = _._for_closure(4, 2, ($scope, write) =>
    $write$1($scope[0], write),
  ),
  $for_content__outerItem = _._const(3, ($scope, outerItem) => {
    ($name($scope[0], `${outerItem}`), $for_content2__outerItem($scope));
  }),
  $for_content__for = _._for_of(1, $for_content2),
  $for_content__items = _._for_closure(3, 2, ($scope, items) =>
    $for_content__for($scope, [items]),
  ),
  $for_content__$params = _._const(2, ($scope, $params2) =>
    $for_content__outerItem($scope, $params2[0]),
  ),
  $for_content = _._content_branch(
    "<div><div> </div><!></div>",
    "D/D l&%l",
    $for_content__setup,
    $for_content__$params,
  ),
  $for = _._for_of(2, $for_content),
  $items__script = _._script("b1", ($scope, { 3: items }) =>
    _._on($scope[0], "click", function () {
      $items($scope, (items = items.length ? items.slice(0, -1) : [1, 2, 3]));
    }),
  ),
  $items = _._let(3, ($scope, items) => {
    ($for($scope, [items]),
      $for_content__items($scope),
      $items__script($scope));
  });
(_._resume("b0", function ($scope) {
  return function (msg) {
    $scope[1].innerHTML += "\n" + msg;
  };
}),
  init());
