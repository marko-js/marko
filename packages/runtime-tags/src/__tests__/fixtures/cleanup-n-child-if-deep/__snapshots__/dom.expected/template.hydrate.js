// size: 1354 (min) 513 (brotli)
const $template = "<div><!> a</div><span><!> a</span><p><!> a</p>",
  $expr_name_write_effect = _$.effect("a0", ($scope, { 5: name, 6: write }) => {
    write(`${name} mounted`),
      (_$.getAbortSignal($scope, 0).onabort = () => {
        write(`${name} destroyed`);
      });
  }),
  $expr_name_write = _$.intersection(7, ($scope) => {
    _$.resetAbortSignal($scope, 0), $expr_name_write_effect($scope);
  }),
  $write$1 = _$.value(6, $expr_name_write),
  $name = _$.value(5, ($scope, name) => {
    _$.data($scope[0], name),
      _$.data($scope[1], name),
      _$.data($scope[2], name),
      $expr_name_write($scope);
  }),
  $write$if$content3 = _$.dynamicClosureRead(
    8,
    ($scope, write) => $write$1($scope[0], write),
    ($scope) => $scope._._._,
  ),
  $setup$if$content3 = ($scope) => {
    $scope[0], $name($scope[0], "Inner");
  },
  $if_content3 = _$.createRenderer(
    $template,
    "/D%lD%lD%l&",
    $setup$if$content3,
    0,
    ($scope) => $write$if$content3($scope),
  ),
  $if$if$content = _$.conditional(1, $if_content3),
  $write$if$content2 = _$.dynamicClosureRead(
    8,
    ($scope, write) => $write$1($scope[0], write),
    ($scope) => $scope._._,
  ),
  $showInner$if$content = _$.dynamicClosureRead(
    7,
    ($scope, showInner) => $if$if$content($scope, showInner ? 0 : 1),
    ($scope) => $scope._._,
  ),
  $setup$if$content2 = ($scope) => {
    $scope[0], $name($scope[0], "Middle");
  },
  $if_content2 = _$.createRenderer(
    `<div>${$template}<!></div>`,
    "D/D%lD%lD%l&%",
    $setup$if$content2,
    0,
    ($scope) => {
      $showInner$if$content($scope), $write$if$content2($scope);
    },
  ),
  $if$if$content2 = _$.conditional(1, $if_content2),
  $write$if$content = _$.conditionalClosure(8, 4, 0, ($scope, write) =>
    $write$1($scope[0], write),
  ),
  $showMiddle$if$content = _$.conditionalClosure(
    6,
    4,
    0,
    ($scope, showMiddle) => $if$if$content2($scope, showMiddle ? 0 : 1),
  ),
  $setup$if$content = ($scope) => {
    $scope[0], $name($scope[0], "Outer");
  },
  $if_content = _$.createRenderer(
    `<div>${$template}<!></div>`,
    "D/D%lD%lD%l&%",
    $setup$if$content,
    0,
    ($scope) => {
      $showMiddle$if$content._($scope), $write$if$content._($scope);
    },
  ),
  $if = _$.conditional(4, $if_content),
  $showInner_closure = _$.dynamicClosure($showInner$if$content),
  $showInner_effect = _$.effect("b1", ($scope, { 7: showInner }) =>
    _$.on($scope[2], "click", function () {
      $showInner($scope, !showInner);
    }),
  ),
  $showInner = _$.state(7, ($scope) => {
    $showInner_closure($scope), $showInner_effect($scope);
  }),
  $showMiddle_effect = _$.effect("b2", ($scope, { 6: showMiddle }) =>
    _$.on($scope[1], "click", function () {
      $showMiddle($scope, !showMiddle);
    }),
  ),
  $showMiddle = _$.state(6, ($scope) => {
    $showMiddle$if$content($scope), $showMiddle_effect($scope);
  }),
  $showOuter_effect = _$.effect("b3", ($scope, { 5: showOuter }) =>
    _$.on($scope[0], "click", function () {
      $showOuter($scope, !showOuter);
    }),
  ),
  $showOuter = _$.state(5, ($scope, showOuter) => {
    $if($scope, showOuter ? 0 : 1), $showOuter_effect($scope);
  });
_$.register("b0", function ($scope) {
  return function (msg) {
    $scope[3].innerHTML += "\n" + msg;
  };
}),
  init();
