// size: 1072 (min) 455 (brotli)
const $template = `<p> </p>`,
  $input_name__OR__input_write__script = _._script(`a0`, ($scope) => {
    ($scope.e(`${$scope.d} mounted`),
      (_.$signal($scope, 0).onabort = () => {
        $scope.e(`${$scope.d} destroyed`);
      }));
  }),
  $input_name__OR__input_write = _._or(5, ($scope) => {
    (_.$signalReset($scope, 0), $input_name__OR__input_write__script($scope));
  }),
  $name = _._const(3, ($scope) => {
    (_._text($scope.a, $scope.d), $input_name__OR__input_write($scope));
  }),
  $write$1 = _._const(4, $input_name__OR__input_write),
  $if_content3__write = _._closure_get(
    8,
    ($scope) => $write$1($scope.a, $scope._._._.i),
    ($scope) => $scope._._._,
  ),
  $if_content2__if = _._if(
    1,
    $template,
    ((_w0) => `/${_w0}&`)(`D l`),
    ($scope) => {
      ($if_content3__write($scope), $scope.a, $name($scope.a, `Inner`));
    },
  ),
  $if_content2__showInner = _._closure_get(
    7,
    ($scope) => $if_content2__if($scope, +!$scope._._.h),
    ($scope) => $scope._._,
  ),
  $if_content2__setup = ($scope) => {
    ($if_content2__showInner($scope),
      $if_content2__write($scope),
      $scope.a,
      $name($scope.a, `Middle`));
  },
  $if_content2__write = _._closure_get(
    8,
    ($scope) => $write$1($scope.a, $scope._._.i),
    ($scope) => $scope._._,
  ),
  $if_content__if = _._if(
    1,
    ((_w0) => `<div>${_w0}<!></div>`)($template),
    ((_w0) => `D/${_w0}&%l`)(`D l`),
    $if_content2__setup,
  ),
  $if_content__showMiddle = _._if_closure(4, 0, ($scope) =>
    $if_content__if($scope, +!$scope._.g),
  ),
  $if_content__setup = ($scope) => {
    ($if_content__showMiddle._($scope),
      $if_content__write._($scope),
      $scope.a,
      $name($scope.a, `Outer`));
  },
  $if_content__write = _._if_closure(4, 0, ($scope) =>
    $write$1($scope.a, $scope._.i),
  ),
  $if = _._if(
    4,
    ((_w0) => `<div>${_w0}<!></div>`)($template),
    ((_w0) => `D/${_w0}&%l`)(`D l`),
    $if_content__setup,
  ),
  $showOuter__script = _._script(`b1`, ($scope) =>
    _._on($scope.a, `click`, function () {
      $showOuter($scope, !$scope.f);
    }),
  ),
  $showOuter = _._let(5, ($scope) => {
    ($if($scope, +!$scope.f), $showOuter__script($scope));
  }),
  $showMiddle__script = _._script(`b2`, ($scope) =>
    _._on($scope.b, `click`, function () {
      $showMiddle($scope, !$scope.g);
    }),
  ),
  $showMiddle = _._let(6, ($scope) => {
    ($if_content__showMiddle($scope), $showMiddle__script($scope));
  }),
  $showInner__closure = _._closure($if_content2__showInner),
  $showInner__script = _._script(`b3`, ($scope) =>
    _._on($scope.c, `click`, function () {
      $showInner($scope, !$scope.h);
    }),
  ),
  $showInner = _._let(7, ($scope) => {
    ($showInner__closure($scope), $showInner__script($scope));
  });
function $write($scope) {
  return function (msg) {
    $scope.d.innerHTML +=
      `
` + msg;
  };
}
(_._resume(`b0`, $write), init());
