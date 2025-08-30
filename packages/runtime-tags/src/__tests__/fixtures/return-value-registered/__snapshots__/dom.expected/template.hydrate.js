// size: 143 (min) 103 (brotli)
_$.register("a0", function () {
  return "hello";
});
const $get_effect = _$.effect(
  "b0",
  ($scope, { 3: get }) => ($scope[2].textContent = get()),
);
(_$.registerBoundSignal("b1", _$.value(3, $get_effect)), init());
