// size: 86 (min) 82 (brotli)
const $output = _$.state(2, ($scope, output) => _$.data($scope[0], output));
(_$.effect("a0", ($scope) => $output($scope, JSON.stringify(testLog))), init());
