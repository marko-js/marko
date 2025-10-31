// size: 224 (min) 169 (brotli)
const $falseChild_content__count__script = _._script("b0", ($scope) =>
    _._on($scope[0], "click", function () {
      $count($scope._, $scope._[1] + 1);
    }),
  ),
  $falseChild_content__count = _._closure_get(1, ($scope) => {
    (_._text($scope[1], $scope._[1]),
      $falseChild_content__count__script($scope));
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
