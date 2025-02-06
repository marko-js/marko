// size: 494 (min) 238 (brotli)
const _input__effect = _$.effect("a0", (_scope) => _$.attrsEvents(_scope, 0)),
  _input_ = _$.value(2, (_scope, input) => {
    _$.attrs(_scope, 0, { type: "checkbox", ...input }), _input__effect(_scope);
  }),
  _expr_checkedValue__checkedValueChange = _$.intersection(
    2,
    (_scope) => {
      const { 4: checkedValue, 5: _checkedValueChange } = _scope;
      _input_(_scope[0], {
        checkedValue: checkedValue,
        checkedValueChange: _checkedValueChange,
        value: "a",
      }),
        _input_(_scope[1], {
          checkedValue: checkedValue,
          checkedValueChange: _checkedValueChange,
          value: "b",
        }),
        _input_(_scope[2], {
          checkedValue: checkedValue,
          checkedValueChange: _checkedValueChange,
          value: "c",
        });
    },
    () =>
      _$.intersections([
        _$.inChild(0, _input_),
        _$.inChild(1, _input_),
        _$.inChild(2, _input_),
      ]),
  ),
  _checkedValue = _$.state(
    4,
    (_scope, checkedValue) => _$.data(_scope[3], checkedValue),
    () => _expr_checkedValue__checkedValueChange,
  );
_$.register("b0", function (_scope) {
  return (_new_checkedValue) => {
    _checkedValue(_scope, _new_checkedValue);
  };
}),
  init();
