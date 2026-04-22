// size: 208 (min) 161 (brotli)
const $for_content__num__script = _._script(`a0`, ($scope) =>
    _._on($scope.a, `click`, function () {
      $num($scope._, $scope._.b + 1);
    }),
  ),
  $for_content__num = _._for_closure(0, $for_content__num__script),
  $for = _._for_to(0, `<button> </button>`, ` D l`, ($scope) => {
    ($for_content__num._($scope), _._text($scope.b, $scope.M));
  }),
  $num = _._let(1, ($scope) => {
    ($for($scope, [$scope.b, 0, 1]), $for_content__num($scope));
  });
init();
