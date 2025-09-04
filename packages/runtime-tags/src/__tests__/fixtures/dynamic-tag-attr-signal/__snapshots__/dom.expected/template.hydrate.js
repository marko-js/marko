// size: 142 (min) 119 (brotli)
const $className__script = _._script("a0", ($scope, { 2: className }) =>
    _._on($scope[1], "click", function () {
      $className($scope, (className = "A" === className ? "B" : "A"));
    }),
  ),
  $className = _._let(2, ($scope, className) => {
    (_._attr_class($scope[0], className), $className__script($scope));
  });
init();
