// size: 478 (min) 259 (brotli)
const _x_effect = _$.effect("a1", (_scope, { 2: x }) =>
    _$.on(_scope[0], "click", function () {
      _x(_scope, x + 1);
    }),
  ),
  _x = _$.state(2, (_scope, x) => {
    _$.data(_scope[1], x), _$.tagVarSignal(_scope, x), _x_effect(_scope);
  });
function _setup_(_scope) {
  _x(_scope, 1), _$.setTagVarChange(_scope, _valueChange(_scope));
}
function _valueChange(_scope) {
  return (_new_x) => {
    _x(_scope, _new_x);
  };
}
_$.register("a0", _valueChange);
var Counter = _$.createTemplate(
  "a",
  "<button class=inc> </button>",
  " D l",
  _setup_,
);
_$.registerBoundSignal("b1", (_scope, count) => {}),
  _$.effect("b2", (_scope) =>
    _$.on(_scope[2], "click", function () {
      _$.tagVarSignalChange(_scope["0!"], 0);
    }),
  ),
  _$.register("b0", function () {
    return Counter;
  }),
  init();
