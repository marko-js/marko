// size: 139 (min) 128 (brotli)
const $className_effect = _$.effect("a0", ($scope, { 2: className }) =>
    _$.on($scope[1], "click", function () {
      $className($scope, (className = "A" === className ? "B" : "A"));
    }),
  ),
  $className = _$.state(2, ($scope, className) => {
    (_$.classAttr($scope[0], className), $className_effect($scope));
  });
init();
