// size: 131 (min) 110 (brotli)
_._resume("a0", function () {
  return "hello";
});
const $get__script = _._script(
  "b0",
  ($scope) => ($scope[2].textContent = $scope[3]()),
);
(_._var_resume("b1", _._const(3, $get__script)), init());
