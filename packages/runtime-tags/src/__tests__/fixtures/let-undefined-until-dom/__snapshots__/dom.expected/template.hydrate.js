// size: 82 (min) 72 (brotli)
const $x = _$.state(1, ($scope, x) => _$.data($scope[0], x));
(_$.effect("a0", ($scope) => $x($scope, "Client Only")), init());
