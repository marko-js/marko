// size: 386 (min) 214 (brotli)
const $obj = _._let(6, ($scope) => {
    (_._text($scope.a, JSON.stringify($scope.g)),
      (({ a: a, ...partialObj }) => {
        $partialObj($scope, partialObj);
      })($scope.g),
      $a($scope, $scope.g.a),
      $obj_b($scope, $scope.g.b));
  }),
  $partialObj = _._const(8, ($scope) => {
    (_._text($scope.b, JSON.stringify($scope.i)),
      $partialObj_a($scope, $scope.i.a));
  }),
  $partialObj_a = _._const(10, ($scope) =>
    _._text($scope.e, void 0 === $scope.k ? "removed a" : "didn't remove a"),
  ),
  $a = _._const(7, ($scope) => _._text($scope.c, $scope.h)),
  $obj_b = _._const(9, ($scope) => _._text($scope.d, $scope.j));
(_._script("a0", ($scope) =>
  _._on($scope.f, "click", function () {
    $obj($scope, { a: 4, b: 5, d: 6 });
  }),
),
  init());
