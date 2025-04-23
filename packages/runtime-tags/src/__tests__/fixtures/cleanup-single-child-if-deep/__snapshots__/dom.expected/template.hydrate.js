// size: 1272 (min) 487 (brotli)
const $expr_name_write_effect = _$.effect(
    "a0",
    ($scope, { 3: name, 4: write }) => {
      write(`${name} mounted`),
        (_$.getAbortSignal($scope, 0).onabort = () => {
          write(`${name} destroyed`);
        });
    },
  ),
  $expr_name_write = _$.intersection(5, ($scope) => {
    _$.resetAbortSignal($scope, 0), $expr_name_write_effect($scope);
  }),
  $name = _$.value(3, ($scope, name) => {
    _$.data($scope[0], name), $expr_name_write($scope);
  }),
  $write$1 = _$.value(4, $expr_name_write),
  $setup$if$content3 = ($scope) => {
    $scope[0], $name($scope[0], "Inner");
  },
  $write$if$content3 = _$.dynamicClosureRead(
    8,
    ($scope, write) => $write$1($scope[0], write),
    ($scope) => $scope._._._,
  ),
  $if_content3 = _$.createRenderer(
    "<p> </p>",
    "/D l&",
    $setup$if$content3,
    0,
    ($scope) => $write$if$content3($scope),
  ),
  $setup$if$content2 = ($scope) => {
    $scope[0], $name($scope[0], "Middle");
  },
  $write$if$content2 = _$.dynamicClosureRead(
    8,
    ($scope, write) => $write$1($scope[0], write),
    ($scope) => $scope._._,
  ),
  $if$if$content = _$.conditional(1, $if_content3),
  $showInner$if$content = _$.dynamicClosureRead(
    7,
    ($scope, showInner) => $if$if$content($scope, showInner ? 0 : 1),
    ($scope) => $scope._._,
  ),
  $if_content2 = _$.createRenderer(
    "<div><p> </p><!></div>",
    "D/D l&%",
    $setup$if$content2,
    0,
    ($scope) => {
      $showInner$if$content($scope), $write$if$content2($scope);
    },
  ),
  $setup$if$content = ($scope) => {
    $scope[0], $name($scope[0], "Outer");
  },
  $write$if$content = _$.conditionalClosure(8, 4, 0, ($scope, write) =>
    $write$1($scope[0], write),
  ),
  $if$if$content2 = _$.conditional(1, $if_content2),
  $showMiddle$if$content = _$.conditionalClosure(
    6,
    4,
    0,
    ($scope, showMiddle) => $if$if$content2($scope, showMiddle ? 0 : 1),
  ),
  $if_content = _$.createRenderer(
    "<div><p> </p><!></div>",
    "D/D l&%",
    $setup$if$content,
    0,
    ($scope) => {
      $showMiddle$if$content._($scope), $write$if$content._($scope);
    },
  ),
  $if = _$.conditional(4, $if_content),
  $showOuter_effect = _$.effect("b1", ($scope, { 5: showOuter }) =>
    _$.on($scope[0], "click", function () {
      $showOuter($scope, !showOuter);
    }),
  ),
  $showOuter = _$.state(5, ($scope, showOuter) => {
    $if($scope, showOuter ? 0 : 1), $showOuter_effect($scope);
  }),
  $showMiddle_effect = _$.effect("b2", ($scope, { 6: showMiddle }) =>
    _$.on($scope[1], "click", function () {
      $showMiddle($scope, !showMiddle);
    }),
  ),
  $showMiddle = _$.state(6, ($scope) => {
    $showMiddle$if$content($scope), $showMiddle_effect($scope);
  }),
  $showInner_closure = _$.dynamicClosure($showInner$if$content),
  $showInner_effect = _$.effect("b3", ($scope, { 7: showInner }) =>
    _$.on($scope[2], "click", function () {
      $showInner($scope, !showInner);
    }),
  ),
  $showInner = _$.state(7, ($scope) => {
    $showInner_closure($scope), $showInner_effect($scope);
  });
_$.register("b0", function ($scope) {
  return function (msg) {
    $scope[3].innerHTML += "\n" + msg;
  };
}),
  init();
