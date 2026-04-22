// size: 295 (min) 208 (brotli)
const $MyTag_content__value = ($scope, value) => _._text($scope.a, value),
  $if_content__x = _._if_closure(0, 0, ($scope) =>
    $MyTag_content__value($scope.a, $scope._.e),
  ),
  $if_content__setup = $if_content__x,
  $if = _._if(
    0,
    ((_w0) => `<!>${_w0}<!>`)(`<div>Hello <!></div>`),
    ((_w0) => `b/${_w0}&b`)(`Db%l`),
    $if_content__setup,
  ),
  $show = _._let(3, ($scope) => $if($scope, +!$scope.d)),
  $x__script = _._script(`a0`, ($scope) =>
    _._on($scope.b, `click`, function () {
      ($x($scope, $scope.e + 1), $show($scope, !0));
    }),
  ),
  $x = _._let(4, ($scope) => {
    (_._text($scope.c, $scope.e), $if_content__x($scope), $x__script($scope));
  });
init();
