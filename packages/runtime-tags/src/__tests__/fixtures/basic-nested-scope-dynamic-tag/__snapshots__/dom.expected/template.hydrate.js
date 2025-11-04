// size: 220 (min) 155 (brotli)
const $falseChild_content__count__script = _._script("b0", ($scope) =>
    _._on($scope.a, "click", function () {
      $count($scope._, $scope._.b + 1);
    }),
  ),
  $falseChild_content__count = _._closure_get(1, ($scope) => {
    (_._text($scope.b, $scope._.b), $falseChild_content__count__script($scope));
  }),
  $falseChild_content__setup = $falseChild_content__count;
_._content_resume(
  "b1",
  "<button> </button>",
  " D l",
  $falseChild_content__setup,
);
const $count__closure = _._closure($falseChild_content__count),
  $count = _._let(1, $count__closure);
init();
