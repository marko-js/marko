// size: 805 (min) 311 (brotli)
const _expr__otherState_change_otherState_effect = _$.effect("a0", (_scope) =>
    _$.on(
      _scope[3],
      "click",
      ((_scope) => {
        const { 12: _otherState_change, 13: otherState } = _scope;
        return function () {
          _otherState(_scope, otherState + 1, _otherState_change);
        };
      })(_scope),
    ),
  ),
  _expr__otherState_change_otherState = _$.intersection(2, (_scope) => {
    _expr__otherState_change_otherState_effect(_scope);
  }),
  _expr__state_change_state_effect = _$.effect("a1", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 10: _state_change, 11: state } = _scope;
        return function () {
          _state(_scope, state + 1, _state_change);
        };
      })(_scope),
    ),
  ),
  _expr__state_change_state = _$.intersection(2, (_scope) => {
    _expr__state_change_state_effect(_scope);
  }),
  _otherState = _$.state(
    13,
    (_scope, otherState) => _$.data(_scope[5], otherState),
    () => _expr__otherState_change_otherState,
  ),
  _otherState_change = _$.value(
    12,
    0,
    () => _expr__otherState_change_otherState,
  ),
  _state = _$.state(
    11,
    (_scope, state) => _$.data(_scope[2], state),
    () => _expr__state_change_state,
  ),
  _state_change = _$.value(10, 0, () => _expr__state_change_state),
  _input_valueChange = _$.value(
    9,
    (_scope, input_valueChange) => _state_change(_scope, input_valueChange),
    () => _state_change,
  ),
  _input_value = _$.value(
    8,
    (_scope, input_value) => {
      _$.data(_scope[1], input_value),
        _$.data(_scope[4], input_value),
        _state(_scope, input_value, _scope[10]),
        _otherState(_scope, input_value, _scope[12]);
    },
    () => _$.intersections([_state, _otherState]),
  ),
  _input_ = _$.value(
    7,
    (_scope, input) => {
      _input_value(_scope, input.value),
        _input_valueChange(_scope, input.valueChange),
        _otherState_change(_scope, input.valueChange);
    },
    () =>
      _$.intersections([_input_value, _input_valueChange, _otherState_change]),
  ),
  _valueChange = _$.register(
    "b0",
    (_scope) =>
      function (_new_source) {
        _source(_scope, _new_source);
      },
  ),
  _source = _$.state(
    2,
    (_scope, source) => {
      _$.data(_scope[1], source),
        _input_(_scope[0], {
          value: source,
          valueChange: _valueChange(_scope),
        });
    },
    () => _$.inChild(0, _input_),
  );
init();
