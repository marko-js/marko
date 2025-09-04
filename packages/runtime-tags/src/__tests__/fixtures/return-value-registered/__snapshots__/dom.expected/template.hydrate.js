// size: 136 (min) 113 (brotli)
_._resume("a0", function () {
  return "hello";
});
const $get__script = _._script(
  "b0",
  ($scope, { 3: get }) => ($scope[2].textContent = get()),
);
(_._var_resume("b1", _._const(3, $get__script)), init());
