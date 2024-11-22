// size: 530 (min) 221 (brotli)
const _input__effect = _$.effect("e", (_scope) => _$.attrsEvents(_scope, 0)),
  _input_ = _$.value(2, (_scope, input) => {
    _$.attrs(_scope, 0, { type: "checkbox", ...input }), _input__effect(_scope);
  }),
  _checkedValueChange = _$.register(
    "c",
    (_scope) =>
      function (_new_checkedValue) {
        _checkedValue(_scope, _new_checkedValue);
      },
  ),
  _checkedValueChange2 = _$.register(
    "d",
    (_scope) =>
      function (_new_checkedValue2) {
        _checkedValue(_scope, _new_checkedValue2);
      },
  ),
  _checkedValueChange3 = _$.register(
    "d",
    (_scope) =>
      function (_new_checkedValue3) {
        _checkedValue(_scope, _new_checkedValue3);
      },
  ),
  _checkedValue = _$.state(
    4,
    (_scope, checkedValue) => {
      _$.data(_scope[3], checkedValue),
        _input_(_scope[0], {
          checkedValue: checkedValue,
          checkedValueChange: _checkedValueChange(_scope),
          value: "a",
        }),
        _input_(_scope[1], {
          checkedValue: checkedValue,
          checkedValueChange: _checkedValueChange2(_scope),
          value: "b",
        }),
        _input_(_scope[2], {
          checkedValue: checkedValue,
          checkedValueChange: _checkedValueChange3(_scope),
          value: "c",
        });
    },
    () =>
      _$.intersections([
        _$.inChild(0, _input_),
        _$.inChild(1, _input_),
        _$.inChild(2, _input_),
      ]),
  );
init();
