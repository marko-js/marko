// size: 101 (min) 86 (brotli)
const $data = _$.state(2, ($scope, data) => _$.data($scope[1], data));
(_$.effect("a0", ($scope) =>
  _$.on($scope[0], "click", function () {
    $data($scope, 1);
  }),
),
  init());
