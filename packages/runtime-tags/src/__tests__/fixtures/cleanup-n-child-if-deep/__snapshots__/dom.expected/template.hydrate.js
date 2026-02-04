// size: 1115 (min) 458 (brotli)
const $template = "<div><!> a</div><span><!> a</span><p><!> a</p>",
  $name__OR__write__script = _._script("a0", ($scope) => {
    ($scope.g(`${$scope.f} mounted`),
      (_.$signal($scope, 0).onabort = () => {
        $scope.g(`${$scope.f} destroyed`);
      }));
  }),
  $name__OR__write = _._or(7, ($scope) => {
    (_.$signalReset($scope, 0), $name__OR__write__script($scope));
  }),
  $name = _._const(5, ($scope) => {
    (_._text($scope.a, $scope.f),
      _._text($scope.b, $scope.f),
      _._text($scope.c, $scope.f),
      $name__OR__write($scope));
  }),
  $write$1 = _._const(6, $name__OR__write),
  $if_content3__write = _._closure_get(
    8,
    ($scope) => $write$1($scope.a, $scope._._._.i),
    ($scope) => $scope._._._,
  ),
  $if_content3__setup = ($scope) => {
    ($if_content3__write($scope), $scope.a, $name($scope.a, "Inner"));
  },
  $if_content2__if = _._if(1, $template, "/D%lD%lD%l&", $if_content3__setup),
  $if_content2__showInner = _._closure_get(
    7,
    ($scope) => $if_content2__if($scope, $scope._._.h ? 0 : 1),
    ($scope) => $scope._._,
  ),
  $if_content2__setup = ($scope) => {
    ($if_content2__showInner($scope),
      $if_content2__write($scope),
      $scope.a,
      $name($scope.a, "Middle"));
  },
  $if_content2__write = _._closure_get(
    8,
    ($scope) => $write$1($scope.a, $scope._._.i),
    ($scope) => $scope._._,
  ),
  $if_content__if = _._if(
    1,
    `<div>${$template}<!></div>`,
    "D/D%lD%lD%l&%l",
    $if_content2__setup,
  ),
  $if_content__showMiddle = _._if_closure(4, 0, ($scope) =>
    $if_content__if($scope, $scope._.g ? 0 : 1),
  ),
  $if_content__setup = ($scope) => {
    ($if_content__showMiddle._($scope),
      $if_content__write._($scope),
      $scope.a,
      $name($scope.a, "Outer"));
  },
  $if_content__write = _._if_closure(4, 0, ($scope) =>
    $write$1($scope.a, $scope._.i),
  ),
  $if = _._if(
    4,
    `<div>${$template}<!></div>`,
    "D/D%lD%lD%l&%l",
    $if_content__setup,
  ),
  $showOuter__script = _._script("b1", ($scope) =>
    _._on($scope.a, "click", function () {
      $showOuter($scope, !$scope.f);
    }),
  ),
  $showOuter = _._let(5, ($scope) => {
    ($if($scope, $scope.f ? 0 : 1), $showOuter__script($scope));
  }),
  $showMiddle__script = _._script("b2", ($scope) =>
    _._on($scope.b, "click", function () {
      $showMiddle($scope, !$scope.g);
    }),
  ),
  $showMiddle = _._let(6, ($scope) => {
    ($if_content__showMiddle($scope), $showMiddle__script($scope));
  }),
  $showInner__closure = _._closure($if_content2__showInner),
  $showInner__script = _._script("b3", ($scope) =>
    _._on($scope.c, "click", function () {
      $showInner($scope, !$scope.h);
    }),
  ),
  $showInner = _._let(7, ($scope) => {
    ($showInner__closure($scope), $showInner__script($scope));
  });
(_._resume("b0", function ($scope) {
  return function (msg) {
    $scope.d.innerHTML += "\n" + msg;
  };
}),
  init());
