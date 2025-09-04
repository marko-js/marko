// size: 193 (min) 147 (brotli)
const $mounted$if$content = _$.conditionalClosure(1, 0, 0, ($scope, mounted) =>
    _$.data($scope[0], mounted && "C"),
  ),
  $setup$if$content = $mounted$if$content,
  $if_content = _$.createRenderer("AB<!>D", "b%c", $setup$if$content),
  $if = _$.conditional(0, $if_content),
  $mounted = _$.state(1, ($scope, mounted) => {
    ($if($scope, mounted ? 0 : 1), $mounted$if$content($scope));
  });
(_$.effect("a0", ($scope) => $mounted($scope, !0)), init());
