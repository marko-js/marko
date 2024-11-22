// size: 527 (min) 271 (brotli)
const _valueChange = _$.register(
    "f",
    (_scope) =>
      function (_new_x) {
        _x(_scope, _new_x);
      },
  ),
  _x_effect = _$.effect("g", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 2: x } = _scope;
        return function () {
          _x(_scope, x + 1);
        };
      })(_scope),
    ),
  ),
  _x = _$.state(
    2,
    (_scope, x) => {
      _$.data(_scope[1], x), _x_effect(_scope), _$.tagVarSignal(_scope, x);
    },
    () => _$.tagVarSignal,
  );
function _setup_(_scope) {
  _x(_scope, 1), _$.setTagVarChange(_scope, _valueChange(_scope));
}
var Counter = _$.createTemplate(
  "e",
  "<button class=inc> </button>",
  " D l",
  _setup_,
);
_$.register("b", function () {
  return Counter;
}),
  _$.dynamicTagAttrs(0),
  _$.registerBoundSignal("c", (_scope, count) => {}),
  _$.effect("d", (_scope) =>
    _$.on(_scope[1], "click", function () {
      _$.tagVarSignalChange(_scope["0!"], 0);
    }),
  ),
  init();
