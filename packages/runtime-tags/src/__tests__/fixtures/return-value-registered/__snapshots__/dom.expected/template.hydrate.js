// size: 132 (min) 106 (brotli)
function $getter() {
  return `hello`;
}
_._resume(`a0`, $getter);
const $get__script = _._script(
  `b0`,
  ($scope) => ($scope.c.textContent = $scope.d()),
);
(_._var_resume(`b1`, _._const(3, $get__script)), init());
