// size: 402 (min) 223 (brotli)
const $obj = _._let(6, ($scope) => {
    (_._text($scope[0], JSON.stringify($scope[6])),
      (({ a: a, ...partialObj }) => {
        $partialObj($scope, partialObj);
      })($scope[6]),
      $a($scope, $scope[6].a),
      $partialObj_b($scope, $scope[6].b));
  }),
  $partialObj = _._const(8, ($scope) => {
    (_._text($scope[1], JSON.stringify($scope[8])),
      $partialObj_a($scope, $scope[8].a));
  }),
  $partialObj_a = _._const(10, ($scope) =>
    _._text($scope[4], void 0 === $scope[10] ? "removed a" : "didn't remove a"),
  ),
  $a = _._const(7, ($scope) => _._text($scope[2], $scope[7])),
  $partialObj_b = _._const(9, ($scope) => _._text($scope[3], $scope[9]));
(_._script("a0", ($scope) =>
  _._on($scope[5], "click", function () {
    $obj($scope, { a: 4, b: 5, d: 6 });
  }),
),
  init());
