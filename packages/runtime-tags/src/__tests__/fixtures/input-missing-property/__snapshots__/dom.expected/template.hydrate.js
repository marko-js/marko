// size: 279 (min) 194 (brotli)
const $if_content2__setup = _._closure_get(
    4,
    ($scope) => _._text($scope.a, $scope._._.e || `Fallback`),
    ($scope) => $scope._._,
  ),
  $if_content__if = _._if(0, `<div> </div>`, `D l`, $if_content2__setup),
  $Child_content__if = _._if(0, `<!><!><!>`, `b%c`, ($scope) =>
    $if_content__if($scope, 0),
  ),
  $Child_content__input_count = ($scope, input_count) =>
    $Child_content__if($scope, +!input_count),
  $count__script = _._script(`a0`, ($scope) =>
    _._on($scope.a, `click`, function () {
      $count($scope, $scope.d + 1);
    }),
  ),
  $count = _._let(3, ($scope) => {
    (_._text($scope.b, $scope.d),
      $Child_content__input_count($scope.c, $scope.d),
      $count__script($scope));
  });
init();
