// size: 423 (min) 216 (brotli)
const _input_effect = _$.effect("a0", (_scope) => _$.attrsEvents(_scope, 0)),
  _input = _$.value(2, (_scope, input) => {
    _$.attrs(_scope, 0, { type: "checkbox", ...input }), _input_effect(_scope);
  }),
  _expr_checkedValue__checkedValueChange = _$.intersection(6, (_scope) => {
    const { 4: checkedValue, 5: _checkedValueChange } = _scope;
    _input(_scope[0], {
      checkedValue: checkedValue,
      checkedValueChange: _checkedValueChange,
      value: "a",
    }),
      _input(_scope[1], {
        checkedValue: checkedValue,
        checkedValueChange: _checkedValueChange,
        value: "b",
      }),
      _input(_scope[2], {
        checkedValue: checkedValue,
        checkedValueChange: _checkedValueChange,
        value: "c",
      });
  }),
  _checkedValue = _$.state(4, (_scope, checkedValue) => {
    _$.data(_scope[3], checkedValue),
      _expr_checkedValue__checkedValueChange(_scope);
  });
_$.register("b0", function (_scope) {
  return (_new_checkedValue) => {
    _checkedValue(_scope, _new_checkedValue);
  };
}),
  init();
