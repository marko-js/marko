// size: 720 (min) 294 (brotli)
const _expr__otherState_change_otherState_effect = _$.effect("d", (_scope) =>
    _$.on(
      _scope[3],
      "click",
      ((_scope) => {
        const { 10: _otherState_change, 11: otherState } = _scope;
        return function () {
          _otherState(_scope, otherState + 1, _otherState_change);
        };
      })(_scope),
    ),
  ),
  _expr__otherState_change_otherState = _$.intersection(2, (_scope) => {
    _expr__otherState_change_otherState_effect(_scope);
  }),
  _expr__state_change_state_effect = _$.effect("e", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 8: _state_change, 9: state } = _scope;
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
    11,
    (_scope, otherState) => _$.data(_scope[5], otherState),
    () => _expr__otherState_change_otherState,
  ),
  _otherState_change = _$.value(
    10,
    0,
    () => _expr__otherState_change_otherState,
  ),
  _state = _$.state(
    9,
    (_scope, state) => _$.data(_scope[2], state),
    () => _expr__state_change_state,
  ),
  _state_change = _$.value(8, 0, () => _expr__state_change_state),
  _input_ = _$.value(
    7,
    (_scope, input) => {
      _$.data(_scope[1], input.value),
        _$.data(_scope[4], input.value),
        _state_change(_scope, input.valueChange),
        _state(_scope, input.value, _scope[8]),
        _otherState_change(_scope, input.valueChange),
        _otherState(_scope, input.value, _scope[10]);
    },
    () =>
      _$.intersections([
        _state_change,
        _state,
        _otherState_change,
        _otherState,
      ]),
  ),
  _valueChange = _$.register(
    "c",
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
