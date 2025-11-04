// size: 428 (min) 245 (brotli)
const $a = _2._let(6, ($scope) => _2._text($scope.b, $scope.g)),
  $b = _2._let(7, ($scope) => _2._text($scope.c, $scope.h)),
  $c = _2._let(8, ($scope) => _2._text($scope.d, JSON.stringify($scope.i))),
  $d = _2._let(9, ($scope) => _2._text($scope.e, $scope.j)),
  $e = _2._let(10, ($scope) => _2._text($scope.f, JSON.stringify($scope.k)));
(_2._script("a0", ($scope) =>
  _2._on($scope.a, "click", function () {
    let local;
    var $result2, $a2, $b2, unused, $c2, $result, $d2, $e2;
    (($result2 = { a: 1, _b: { _b: 2 }, local: 3, c: 4 }),
      ({
        a: $a2,
        _b: { _b: $b2 },
        local: local,
        unused: unused,
        ...$c2
      } = $result2),
      $a($scope, $a2),
      $b($scope, $b2),
      $c($scope, $c2),
      ($result = [{ arr: [6, 7, 8, 9] }]),
      ([
        {
          arr: [local, $d2, , ...$e2],
        },
      ] = $result),
      $d($scope, $d2),
      $e($scope, $e2));
  }),
),
  init());
