// size: 205 (min) 140 (brotli)
const _value = _$.state(2, (_scope, value) => {
  _$.controllable_textarea_value(_scope, 0, value, _valueChange(_scope)),
    _$.data(_scope[1], value);
});
function _valueChange(_scope) {
  return (_new_value) => {
    _value(_scope, _new_value);
  };
}
_$.effect("a1", (_scope) => _$.controllable_textarea_value_effect(_scope, 0)),
  _$.register("a0", _valueChange),
  init();
