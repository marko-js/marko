// size: 257 (min) 173 (brotli)
const $for_content2__i = _._const(4, ($scope, i) => _._text($scope[0], i)),
  $for_content2__val = _._const(3, ($scope, val) => _._text($scope[1], val)),
  $for_content2__$params = _._const(2, ($scope, $params3) => {
    ($for_content2__val($scope, $params3[0]),
      $for_content2__i($scope, $params3[1]));
  }),
  $for_content2 = _._content_branch(
    "<div><!>: <!></div>",
    "D%c%l",
    0,
    $for_content2__$params,
  ),
  $for2 = _._for_of(1, $for_content2),
  $arrB = _._let(3, ($scope, arrB) => $for2($scope, [arrB]));
(_._script("a0", ($scope) => $arrB($scope, [1, 2])), init());
