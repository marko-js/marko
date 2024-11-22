// size: 265 (min) 187 (brotli)
const _input__effect = _$.effect("d", (_scope) => _$.attrsEvents(_scope, 0)),
  _input_ = _$.value(2, (_scope, input) => {
    _$.attrs(_scope, 0, { type: "checkbox", ...input }), _input__effect(_scope);
  }),
  _checkedChange = _$.register(
    "c",
    (_scope) =>
      function (_new_checked) {
        _checked(_scope, _new_checked);
      },
  ),
  _checked = _$.state(
    2,
    (_scope, checked) => {
      _$.data(_scope[1], String(checked)),
        _input_(_scope[0], {
          checked: checked,
          checkedChange: _checkedChange(_scope),
        });
    },
    () => _$.inChild(0, _input_),
  );
init();
