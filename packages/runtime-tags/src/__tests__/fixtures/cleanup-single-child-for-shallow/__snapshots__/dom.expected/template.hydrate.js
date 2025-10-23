// size: 605 (min) 336 (brotli)
const $name__OR__write__script = _._script(
    "a0",
    ($scope, { 3: name, 4: write }) => {
      (write(`mounted ${name}`),
        (_.$signal($scope, 0).onabort = () => {
          write(`destroyed ${name}`);
        }));
    },
  ),
  $name__OR__write = _._or(5, ($scope) => {
    (_.$signalReset($scope, 0), $name__OR__write__script($scope));
  }),
  $name = _._const(3, ($scope, name) => {
    (_._text($scope[0], name), $name__OR__write($scope));
  }),
  $write$1 = _._const(4, $name__OR__write),
  $for_content__setup = ($scope) => {
    ($scope[0], $for_content__write._($scope));
  },
  $for_content__write = _._for_closure(4, 2, ($scope, write) =>
    $write$1($scope[0], write),
  ),
  $for_content__item = _._const(2, ($scope, item) => $name($scope[0], item)),
  $for_content__$params = _._const(1, ($scope, $params2) =>
    $for_content__item($scope, $params2[0]),
  ),
  $for_content = _._content_branch(
    "<div> </div>",
    "/D l&",
    $for_content__setup,
    $for_content__$params,
  ),
  $for = _._for_of(2, $for_content),
  $items__script = _._script("b1", ($scope, { 3: items }) =>
    _._on($scope[0], "click", function () {
      $items($scope, (items = items?.length ? items.slice(0, -1) : [1, 2, 3]));
    }),
  ),
  $items = _._let(3, ($scope, items) => {
    ($for($scope, [items]), $items__script($scope));
  });
(_._resume("b0", function ($scope) {
  return function (msg) {
    $scope[1].innerHTML += "\n" + msg;
  };
}),
  init());
