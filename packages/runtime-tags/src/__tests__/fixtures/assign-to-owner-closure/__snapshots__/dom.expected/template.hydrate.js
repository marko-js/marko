// size: 175 (min) 127 (brotli)
const $setup$if$content = _$.effect("a0", ($scope) =>
    _$.on($scope[0], "click", function () {
      $hide($scope._, !0);
    }),
  ),
  $if_content = _$.createRenderer("<button></button>", " ", $setup$if$content),
  $if = _$.conditional(0, $if_content),
  $hide = _$.state(1, ($scope, hide) => $if($scope, hide ? 1 : 0));
init();
