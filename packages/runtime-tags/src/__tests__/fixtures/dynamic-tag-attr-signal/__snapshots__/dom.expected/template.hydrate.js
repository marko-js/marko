// size: 143 (min) 134 (brotli)
const $className_effect = _$.effect("a0", ($scope, { 2: className }) =>
    _$.on($scope[1], "click", function () {
      $className($scope, "A" === className ? "B" : "A");
    }),
  ),
  $className = _$.state(2, ($scope, className) => {
    _$.classAttr($scope[0], className), $className_effect($scope);
  });
init();
