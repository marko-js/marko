// size: 433 (min) 223 (brotli)
const $a = _2._let(6, ($scope, a) => _2._text($scope[1], a)),
  $b = _2._let(7, ($scope, b) => _2._text($scope[2], b)),
  $c = _2._let(8, ($scope, c) => _2._text($scope[3], JSON.stringify(c))),
  $d = _2._let(9, ($scope, d) => _2._text($scope[4], d)),
  $e = _2._let(10, ($scope, e) => _2._text($scope[5], JSON.stringify(e)));
(_2._script("a0", ($scope) =>
  _2._on($scope[0], "click", function () {
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
