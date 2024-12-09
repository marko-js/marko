// size: 239 (min) 154 (brotli)
const _y_effect = _$.effect("a1", (_scope, { 4: y }) =>
    _$.on(_scope[0], "click", function () {
      _y(_scope, y + 1);
    }),
  ),
  _y = _$.state(4, (_scope, y) => {
    _$.data(_scope[2], y), _y_effect(_scope);
  }),
  _x = _$.state(3, (_scope, x) => {
    _$.data(_scope[1], x), _y(_scope, x, _valueChange(_scope));
  });
function _valueChange(_scope) {
  return function (newValue) {
    _x(_scope, newValue + 1);
  };
}
_$.register("a0", _valueChange), init();
