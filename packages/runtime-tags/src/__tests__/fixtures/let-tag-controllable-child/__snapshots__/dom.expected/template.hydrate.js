// size: 591 (min) 257 (brotli)
const _expr_input_value_input_valueChange = _$.intersection(10, (_scope) => {
    const { 8: input_value, 9: input_valueChange } = _scope;
    _state(_scope, input_value, input_valueChange);
  }),
  _otherState_effect = _$.effect("a0", (_scope, { 12: otherState }) =>
    _$.on(_scope[3], "click", function () {
      _otherState(_scope, otherState + 1);
    }),
  ),
  _otherState = _$.state(12, (_scope, otherState) => {
    _$.data(_scope[5], otherState), _otherState_effect(_scope);
  }),
  _state_effect = _$.effect("a1", (_scope, { 11: state }) =>
    _$.on(_scope[0], "click", function () {
      _state(_scope, state + 1);
    }),
  ),
  _state = _$.state(11, (_scope, state) => {
    _$.data(_scope[2], state), _state_effect(_scope);
  }),
  _input_valueChange = _$.value(9, (_scope) =>
    _expr_input_value_input_valueChange(_scope),
  ),
  _input_value = _$.value(8, (_scope, input_value) => {
    _$.data(_scope[1], input_value),
      _$.data(_scope[4], input_value),
      _expr_input_value_input_valueChange(_scope);
  }),
  _input = _$.value(7, (_scope, input) => {
    _input_value(_scope, input.value),
      _input_valueChange(_scope, input.valueChange),
      _otherState(_scope, input.value, input.valueChange);
  }),
  _source = _$.state(2, (_scope, source) => {
    _$.data(_scope[1], source),
      _input(_scope[0], { value: source, valueChange: _valueChange(_scope) });
  });
function _valueChange(_scope) {
  return (_new_source) => {
    _source(_scope, _new_source);
  };
}
_$.register("b0", _valueChange), init();
