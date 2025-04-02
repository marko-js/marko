// size: 254 (min) 171 (brotli)
const _input_effect = _$.effect("a0", (_scope) => _$.attrsEvents(_scope, 0)),
  _input = _$.value(2, (_scope, input) => {
    _$.attrs(_scope, 0, { type: "checkbox", ...input }), _input_effect(_scope);
  }),
  _checked = _$.state(2, (_scope, checked) => {
    _$.data(_scope[1], String(checked)),
      _input(_scope[0], {
        checked: checked,
        checkedChange: _checkedChange(_scope),
      });
  });
function _checkedChange(_scope) {
  return (_new_checked) => {
    _checked(_scope, _new_checked);
  };
}
_$.register("b0", _checkedChange), init();
