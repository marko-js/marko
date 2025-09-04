// size: 291 (min) 200 (brotli)
const $for_content__num__script = _._script("a0", ($scope, { _: { 1: num } }) =>
    _._on($scope[0], "click", function () {
      $num($scope._, ++num);
    }),
  ),
  $for_content__num = _._for_closure(1, 0, $for_content__num__script),
  $for_content__i = _._const(3, ($scope, i) => _._text($scope[1], i)),
  $for_content__setup = $for_content__num,
  $for_content__$params = _._const(2, ($scope, $params2) =>
    $for_content__i($scope, $params2[0]),
  ),
  $for_content = _._content_branch(
    "<button> </button>",
    " D l",
    $for_content__setup,
    $for_content__$params,
  ),
  $for = _._for_to(0, $for_content),
  $num = _._let(1, ($scope, num) => {
    ($for($scope, [num, 0, 1]), $for_content__num($scope));
  });
init();
