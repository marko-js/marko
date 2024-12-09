// size: 470 (min) 209 (brotli)
const _x_effect = _$.effect("a1", (_scope, { 2: x }) =>
    _$.on(_scope[0], "click", function () {
      _x(_scope, x + 1);
    }),
  ),
  _x = _$.state(
    2,
    (_scope, x) => {
      _$.data(_scope[1], x), _x_effect(_scope), _$.tagVarSignal(_scope, x);
    },
    () => _$.tagVarSignal,
  );
_$.register("a0", function (_scope) {
  return (_new_x) => {
    _x(_scope, _new_x);
  };
});
const _count_effect = _$.effect("b0", (_scope, { 4: count }) =>
  _$.on(_scope[1], "click", function () {
    _$.tagVarSignalChange(_scope[0], count + 1);
  }),
);
_$.registerBoundSignal(
  "b1",
  _$.value(4, (_scope, count) => {
    _$.data(_scope[2], count), _count_effect(_scope);
  }),
),
  _$.effect("b2", (_scope) =>
    _$.on(_scope[3], "click", function () {
      _$.tagVarSignalChange(_scope[0], 0);
    }),
  ),
  init();
