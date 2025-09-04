// size: 103 (min) 95 (brotli)
const $data = _._let(2, ($scope, data) => _._text($scope[1], data));
(_._script("a0", ($scope) =>
  _._on($scope[0], "click", function () {
    $data($scope, 1);
  }),
),
  init());
