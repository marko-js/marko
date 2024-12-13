// size: 209 (min) 127 (brotli)
const _value = _$.state(2, (_scope, value) => {
  _$.controllable_select_value(_scope, 0, value, _valueChange(_scope)),
    _$.data(_scope[1], value);
});
function _valueChange(_scope) {
  return function (v) {
    _value(_scope, v);
  };
}
_$.effect("a1", (_scope) => _$.controllable_select_value_effect(_scope, 0)),
  _$.register("a0", _valueChange),
  init();
