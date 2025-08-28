// size: 431 (min) 219 (brotli)
const $a = _$.state(6, ($scope, a) => _$.data($scope[1], a)),
  $b = _$.state(7, ($scope, b) => _$.data($scope[2], b)),
  $c = _$.state(8, ($scope, c) => _$.data($scope[3], JSON.stringify(c))),
  $d = _$.state(9, ($scope, d) => _$.data($scope[4], d)),
  $e = _$.state(10, ($scope, e) => _$.data($scope[5], JSON.stringify(e)));
(_$.effect("a0", ($scope) =>
  _$.on($scope[0], "click", function () {
    let local;
    var $result2, $a2, $b2, $c2, $result, $d2, $e2;
    (($result2 = { a: 1, _b: { _b: 2 }, local: 3, c: 4 }),
      ({
        a: $a2,
        _b: { _b: $b2 },
        local: local,
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
